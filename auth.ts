import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

interface ICredentials {
  email: string;
  password: string;
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signIn",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: ICredentials) {
        const existingUser = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        if (!existingUser) {
          return null;
        }
        try {
          const validPassword = await bcrypt.compare(
            credentials.password + "",
            existingUser.password + ""
          );

          if (!validPassword) {
            return null;
          }

          return {
            id: existingUser.id,
            email: existingUser.email,
            name: existingUser.name,
          };
        } catch (error) {
          console.error("Error comparing passwords:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      try {
        if (account?.provider === "google") {
          if (!profile?.email) {
            throw new Error("No Profile");
          }
          await prisma.user.upsert({
            where: { email: profile.email },
            update: {
              name: profile.name,
            },
            create: {
              email: profile.email as string,
              name: profile.name as string,
              roleId: 3,
            },
          });
        }

        return true;
      } catch (error) {
        console.error("Error during signIn:", error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      return Promise.resolve(baseUrl);
    },
  },
});
