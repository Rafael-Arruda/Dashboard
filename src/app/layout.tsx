"use client"

import { usePathname } from "next/navigation";
import { Outfit } from "next/font/google";

import "./globals.css";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

import Header from "@/components/header";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Defina as rotas onde o Sidebar deve aparecer
  const Routes = ["/", "/dashboard", "/contato"];

  // Verifica se a rota atual está no Routes
  const isRoutesPage = Routes.includes(pathname);

  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </head>
      <body
        className={`${outfitSans.variable} antialiased`}
      >
        {isRoutesPage ? 
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <Header/>
              <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="max-w-[1296px] mx-auto w-full h-full rounded-2xl border border-gray-200 bg-white">
                  {children}
                </div>
              </div>
            </SidebarInset>
          </SidebarProvider>
        : 
          <main>
            {children}
          </main>
        }
      </body>
    </html>
  );
}
