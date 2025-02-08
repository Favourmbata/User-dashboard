


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UsageChart } from "@/components/dashboard/usage-chart"
import { CircularProgress } from "@/components/dashboard/circular-progress"
export default function DashboardPage() {
    return (
        <div className="">
        <div className="space-y-8 p-3 px-6 w-full max-w-7xl">
        <h1 className="text-xl font-bold">Welcome to your dashboard, Roaotech</h1>
  
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
     
          <Card className="border-r-2 border-b-2 border-gray-300 ">
            <CardContent className="flex flex-col items-center p-6 space-y-4">
              <CircularProgress value = {(200 / 300) * 100 } size={200}/>
              <p className="text-center text-sm text-gray-500">
                Messages Left: 200<br />Purchased: 300
              </p>
              <Button className="w-[60%] border rounded-2xl bg-white text-black hover:bg-gray-100">Buy More</Button>
            </CardContent>
          </Card>
  
          <Card className="border-r-2 border-b-2 border-gray-300">
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Gold Plan</h3>
                <p className="text-sm font-semibold">$40 for 300 SMS</p>
              </div>
              <div className="space-y-6 ">
                <Button className="w-[60%] bg-[#1B4679] rounded-2xl mt-10 text-white hover:bg-blue-500">Renew Plan</Button>
                <Button className="w-[60%] rounded-2xl  bg-white border border-gray-300 text-black hover:bg-gray-100">Change Plan</Button>
              </div>
            </CardContent>
          </Card>
  
        
          <Card className="lg:col-span-2 border border-gray-200 shadow-lg rounded-lg">
            <CardContent className="p-6">
              <UsageChart />
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    )
  }
 