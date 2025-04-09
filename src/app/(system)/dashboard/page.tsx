import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

// Components
import { ChartBar } from "@/components/chart-bar";
import { ChartRadial } from "@/components/chart-radial";
import { DropdownMenuCheckboxes } from "@/components/dropdown-menu-checkboxes";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

// Icons
import { LuUsers } from "react-icons/lu";
import { BsDatabase, BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

export default async function Dashboard() {
  const session = await getServerSession()

  // if (!session) {
  //   redirect("/auth/login");
  // }

  return (
    <section>
      <div className="grid grid-cols-12 gap-4 md:gap-6">

        <div className="col-span-12 space-y-6 xl:col-span-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">
              <div className="w-12 h-12 rounded-sm bg-[#f2f4f7] flex items-center justify-center">
                <LuUsers size={20} />
              </div>
              <div className="mt-5">
                <span className="text-sm text-[#667085]">Customers</span>
                <div className="mt-2 flex items-center justify-between">
                  <strong className="text-3xl">3,782</strong>
                  <span className="flex items-center text-green-800 bg-green-100 rounded-2xl text-sm py-0.5 px-2.5">
                    <BsArrowUpShort size={16} />
                    11,01%
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white">
              <div className="w-12 h-12 rounded-sm bg-[#f2f4f7] flex items-center justify-center">
                <BsDatabase size={20} />
              </div>
              <div className="mt-5">
                <span className="text-sm text-[#667085]">Orders</span>
                <div className="mt-2 flex items-center justify-between">
                  <strong className="text-3xl">5,359</strong>
                  <span className="flex items-center text-red-800 bg-red-100 rounded-2xl text-sm py-0.5 px-2.5">
                    <BsArrowDownShort size={16} />
                    9,05%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white col-span-2">
            <ChartBar />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-5">
          <div className="bg-gray-100 rounded-2xl">
            <div className="p-6 pb-11 rounded-2xl border border-gray-200 bg-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Monthly Target</h3>
                  <p className="text-sm text-gray-500 mt-1">Target you’ve set for each month</p>
                </div>
                <div>
                  <DropdownMenuCheckboxes />
                </div>
              </div>

              <div className="max-h-[150px]">
                <ChartRadial />
              </div>

              <div>
                <p className="text-gray-500 mx-14 mt-2 text-center line-clamp-2">You earn $3287 today, it's higher than last month. Keep up your good work!</p>
              </div>
            </div>

            <div className="py-5 px-6 flex items-center justify-center gap-5 sm:gap-8">
              <div className="flex flex-col items-center">
                <p className="text-gray-500 text-sm mb-1">Target</p>
                <p className="font-semibold text-gray-800 text-lg">$20k</p>
              </div>

              <div className="h-7">
                <Separator orientation="vertical" />
              </div>

              <div className="flex flex-col items-center">
                <p className="text-gray-500 text-sm mb-1">Revenue</p>
                <p className="font-semibold text-gray-800 text-lg">$20k</p>
              </div>

              <div className="h-7">
                <Separator orientation="vertical" />
              </div>

              <div className="flex flex-col items-center">
                <p className="text-gray-500 text-sm mb-1">Today</p>
                <p className="font-semibold text-gray-800 text-lg">$20k</p>
              </div>
            </div>

          </div>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-800">Top Channels</h3>
              </div>
              <div>
                <DropdownMenuCheckboxes />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mt-5">
                <span className="text-right text-gray-400 text-theme-xs text-[12px]">Source</span>
                <span className="text-right text-gray-400 text-theme-xs text-[12px]">Visitors</span>
              </div>
              <div className="mt-4 border-b border-gray-100">
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">Google</span>
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">4.7K</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">Facebook</span>
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">3.4K</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">Threads</span>
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">2.9K</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">Google</span>
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">1.5K</span>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="outline" className="w-full h-11 text-sm">Channels Report</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-800">Top Pages</h3>
              </div>
              <div>
                <DropdownMenuCheckboxes />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mt-5">
                <span className="text-right text-gray-400 text-theme-xs text-[12px]">Source</span>
                <span className="text-right text-gray-400 text-theme-xs text-[12px]">Visitors</span>
              </div>
              <div className="mt-4 border-b border-gray-100">
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">Google</span>
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">4.7K</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">Facebook</span>
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">3.4K</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">Threads</span>
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">2.9K</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">Google</span>
                  <span className="text-gray-500 text-theme-sm dark:text-gray-400 text-sm">1.5K</span>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="outline" className="w-full h-11 text-sm">Channels Report</Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}