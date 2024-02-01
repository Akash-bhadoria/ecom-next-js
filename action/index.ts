import { prisma } from "@/lib/prisma";
import { signIn } from "@/auth";
import { Routes } from "@/routes";

export async function SignInUser(email: string, password: string) {
  try {
    await signIn("credentials", {
      redirect: false,
      email,
      password,
      redirectTo: Routes.REDIRECT_TO_USER_PROFILE,
    });
  } catch (err) {}
}
