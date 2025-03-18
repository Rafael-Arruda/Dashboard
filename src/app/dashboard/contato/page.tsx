import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Contato() {
    const session = await getServerSession();

    if (!session) {
        redirect("/auth/login");
    }

    return (
        <h1>Contato</h1>
    )
}