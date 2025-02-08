import SignInForm from "@/components/sign-in-form"
import Image from "next/image"
export default function SignInPage() {
  return (
    <div className="min-h-screen max-w-7xl ">
      {/* <div className="w-full "> */}
        <div className="grid lg:grid-cols-2 gap-4 p-6">
          <div className="hidden lg:flex items-center justify-center bg-muted/10 rounded-2xl p-6">
            <div className="relative w-[18rem] fixed">
              <Image
                src="/My password-pana (1) 1 (1).png"
                width={400}
                height={400}
                alt="Sign in illustration"
                className=" object-contain"
                
              />
            </div>
          </div>
          <div className="flex max-sm:items-center max-sm:justify-center max-sm:min-h-screen  sm:p-4">
            <div className="w-full max-w-md space-y-6">
              <SignInForm />
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

