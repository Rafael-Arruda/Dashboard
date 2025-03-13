import React from "react"
import Link from "next/link";

function Home () {
  return (
    <div>
      <h1>Página Home</h1>
      <Link href="/dashboard">Ir para o Dashboard</Link>
    </div>
  )
}

export default Home;