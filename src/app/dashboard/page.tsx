import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <section>
      <h1>Olá {session?.user?.name}</h1>
      <h2>Bem vindo ao Dashboard</h2>
    </section>
  )
}