import React from "react"

import Link from "next/link";
import Image from "next/image";

import Logo from "../../../dashboard/public/logo.svg"

function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-white border-b">
        <div className="w-full max-w-[1320px] m-auto px-3">
          <div className="flex items-center justify-between h-20">
            <div>
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo do site"
                  width={154}
                  height={32}
                  priority
                />
              </Link>
            </div>
            <nav>
              <ul className="flex gap-4">
                <li className="hover:underline">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/dashboard/table">Tabelas</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/dashboard/contato">Contato</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main */}
      <main>
        Aqui vai ter o conteúdo da Landing page do sistema.
      </main>
    </>
  )
}

export default Home;