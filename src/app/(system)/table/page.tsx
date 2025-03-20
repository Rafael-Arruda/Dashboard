import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { TableDemo } from "@/components/table";

export default async function Table() {
    const session = await getServerSession();

    if (!session) {
        redirect("/auth/login")
    }

    return (
        <section className="rounded-2xl border border-gray-200 bg-white">
            <div className="px-6 py-5 border-b">
                <h2 className="text-base font-medium text-gray-800 dark:text-white/90">Basic Table 5</h2>
            </div>
            <div className="p-4 sm:p-6">
                <div className="border rounded-2xl">
                    <div className="border-b py-4 px-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Recent Orders</h3>
                    </div>
                    <TableDemo />
                </div>
            </div>
        </section>
    )
}