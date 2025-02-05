import SignUpForm from "@/components/sign-up-form"
import Image from "next/image"
export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg">
        <div className="grid lg:grid-cols-2 gap-4 p-6">
          <div className="hidden lg:flex items-center justify-center bg-muted/10 rounded-2xl p-6">
            <div className="relative w-[280px] h-[560px]">
              <Image
                src="/Mobile login-bro 1.png"
                width={100}
                height={100}
                alt="Sign up illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

