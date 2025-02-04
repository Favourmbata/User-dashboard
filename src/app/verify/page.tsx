



import VerificationForm from "@/components/verification-form"

export default function VerifyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 overflow-x-hidden">
    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg">
      <div className="grid lg:grid-cols-2 gap-4 p-6">
        <div className="hidden lg:flex items-center justify-center bg-muted/10 rounded-2xl p-6">
          <div className="relative w-[280px]">
            <img
              src="/Group 6 (1).png"
              alt="Verification illustration"
              className="object-contain"
              style={{ height: "387.41px", width: "316.16px" }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-6">
            <VerificationForm />
          </div>
        </div>
      </div>
    </div>
  </div>
)
}