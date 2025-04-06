
import { auth } from "../../lib/auth";
import { cookies, headers } from "next/headers";
import SignOut from "../../components/signOut";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    cookies: cookies(),   // pega os cookies da request atual
    headers: headers(),   // pega os headers da request atual
  });

  if (!session?.user) {
    return <h1>Você precisa estar logado.</h1>;
  }

  return (
    <div>
      <h1>Bem-vindo, {session.user.name}</h1>
      <br />
      <SignOut />
    </div>
  );
}
