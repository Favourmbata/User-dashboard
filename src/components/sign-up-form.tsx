

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import axios from "axios"
import Image from "next/image"
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .required("Phone number is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
})

export default function SignUpForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      setError("")
      try {
        const response = await axios.post("/api/auth/register", values)
        if (response.data.success) {
          router.push("/verify")
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setError(error.response.data.error || "Registration failed. Please try again.")
        } else {
          setError("An unexpected error occurred")
        }
        console.error("Registration failed:", error)
      } finally {
        setIsLoading(false)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6 shadow-md border-r-2 border-b-2 border-gray-300 rounded-lg px-4 h-[600px]">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Hello...!</h1>
        <p className="text-sm text-muted-foreground">Create account</p>
      </div>

      {error && <p className="text-sm text-center text-destructive">{error}</p>}

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" className="bg-[#F0EFEF]"  type="email" placeholder="example@gmail.com" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-destructive">{formik.errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" className="bg-[#F0EFEF]"  type="tel" placeholder="+25 111 222 33" {...formik.getFieldProps("phone")} />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-sm text-destructive">{formik.errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input id="password" className="bg-[#F0EFEF]" type={showPassword ? "text" : "password"} {...formik.getFieldProps("password")} />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="text-sm text-destructive">{formik.errors.password}</p>
          )}
        </div>
      </div>
      <div className="flex justify-center">
      <Button type="submit" className="w-[44%]  bg-[#1B4679]" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Create Account"}
      </Button>
</div>

      

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center items-center">
        <div className="lg:ml-24 ml-10">
          <Image src="/image 2.png" width={20} height={20} alt="Facebook" className=" h-6 w-6" />
          <span className="text-sm">Facebook</span>
          
        </div>
        <div>
          <Image src="/image 1.png" width={20} height={20} alt="Google" className="mr-4 h-6 w-6" />
          <span className="text-sm">Google</span>
        </div>
      </div>
    </form>
  )
}

