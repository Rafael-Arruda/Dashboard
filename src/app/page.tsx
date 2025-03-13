import React from "react"

import { TableDemo } from "@/components/table";

function Home () {
  return (
    <section>
      <div className="px-6 py-5 border-b">
        <h2 className="text-base font-medium text-gray-800 dark:text-white/90">Basic Table 5</h2>
      </div>
      <div className="p-4 sm:p-6">
        <div className="border rounded-2xl">
          <div className="border-b py-4 px-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Recent Orders</h3>
          </div>
          <TableDemo/>
        </div>
      </div>
    </section>
  )
}

export default Home;