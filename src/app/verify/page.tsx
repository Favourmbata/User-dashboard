
import VerificationForm from "@/components/verification-form"
import Image from "next/image"
export default function VerifyPage() {
  return (
    <div className="min-h-screen max-w-7xl  overflow-x-hidden">
    {/* <div className=""> */}
      <div className="grid lg:grid-cols-2 gap-4 p-5">
        <div className="hidden lg:flex items-center justify-center bg-muted/10 rounded-2xl p-6">
          <div className="relative w-[280px]">
            <Image
              src="/Group 6 (1).png"
              width={316}
              height={387}
              alt="Verification illustration"
              className="object-contain"
            
            />
          </div>
        </div>
        <div className="flex max-sm:items-center max-sm:justify-center max-sm:min-h-screen  sm:p-4">
          <div className="w-full max-w-md space-y-6">
            <VerificationForm />
          </div>
        </div>
      </div>
    {/* </div> */}
  </div>
)
}