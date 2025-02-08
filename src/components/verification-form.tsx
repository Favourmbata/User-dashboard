
"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import axios from "axios"

export default function VerificationForm() {
  const router = useRouter()
  const [code, setCode] = useState(["", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const inputRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0]
    if (!/^\d*$/.test(value)) return

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const verificationCode = code.join("")
      const response = await axios.post("/api/auth/verify", { code: verificationCode })

      if (response.data.success) {
        router.push("/dashboard")
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.error || "Verification failed. Please try again.")
      } else {
        setError("An unexpected error occurred")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setError("A new code has been sent to your email")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 shadow-md border-r-2 border-b-2  border-gray-300 rounded-lg h-[440px]">
      <div className="space-y-2 px-4 mt-4">
        <h1 className="text-2xl font-semibold tracking-tight">Verify your email</h1>
        <p className="text-sm text-muted-foreground">An email with a verification code has been sent to your <br/>
           mail. Enter the four digit code.</p>
      </div>

      <div className="flex justify-center gap-3">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el
            }}
            type="text"
            inputMode="numeric"
            pattern="\d*"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center text-lg border rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
            maxLength={1}
            required
            autoComplete="off"
          />
        ))}
      </div>

      {error && <p className="text-sm text-center text-destructive">{error}</p>}
      <p className="text-center text-sm text-black">
        {"Didn't get a mail? "}
        <Button type="button" variant="link" className="p-0 h-auto font-normal text-[#1B4679]" onClick={handleResendCode}>
          Request again
        </Button>
      </p>
      <div className="flex justify-center">
        <Button type="submit" className="w-[35%] bg-[#1B4679] rounded-[20px]" disabled={isLoading}>
          {isLoading ? "Verifying..." : "Verify"}
        </Button>
      </div>

      
    </form>
  )
}
