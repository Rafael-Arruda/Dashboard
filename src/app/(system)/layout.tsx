import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

import Header from "@/components/header";

export default function DashboardLayout({
    children
}: {children: React.ReactNode}) {
    return (
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
    )
}