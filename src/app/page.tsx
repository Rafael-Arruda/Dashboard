import React from "react"

import Link from "next/link";
import Image from "next/image";

import Logo from "../../../dashboard/public/logo.svg"
import { Button } from "@/components/ui/button";

import { getServerSession } from "next-auth";

async function Home() {
  const session = await getServerSession();

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
              <ul className="flex items-center gap-4">
                <li className="hover:underline">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/dashboard/table">Tabelas</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/dashboard/contato">Contato</Link>
                </li>
                { !session?.user && (
                  <li className="hover:underline">
                    <Link href="/auth/login">
                      <Button type="button" variant="default" className="bg-blue-600 hover:bg-blue-500">
                        Acessar
                      </Button>
                    </Link>
                  </li>
                )}
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