import { auth } from "@/auth";
export default async function Home() {
  const session = await auth();
  console.log(await auth());
  return (
    <div>
      <form action="/api/auth/signin" method="get">
        <button type="submit" className="btn btn-default">
          Sign In
        </button>
      </form>
      <form action="/auth/signUp" method="get">
        <button type="submit" className="btn btn-default">
          Sign Up
        </button>
      </form>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}
