import SignUpForm from "@/components/sign-up-form"
import Image from "next/image"
export default function SignUpPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto ">
      {/* <div className="w-full"> */}
        <div className="grid lg:grid-cols-2 gap-4 p-6">
          <div className="hidden lg:flex items-center justify-center bg-muted/10 rounded-2xl p-6">
            <div className="relative w-[27rem] fixed">
              <Image
                src="/Mobile login-bro 1.png"
                width={200}
                height={200}
                alt="Sign up illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex max-sm:items-center max-sm:justify-center max-sm:min-h-screen  sm:p-4">
            <div className="w-full max-w-md space-y-6">
              <SignUpForm />
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

