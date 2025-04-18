import { RegisterForm } from "@/components/auth/RegisterForm";


export default function RegisterPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid max-w-none grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/* Your logo SVG */}
          </svg>
          Your Brand
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}