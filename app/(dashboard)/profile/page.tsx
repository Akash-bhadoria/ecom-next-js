import { auth } from "@/auth";

export default async function Profile() {
  const session = await auth();
  return (
    <div>
      Hello, am in dashboard
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}
