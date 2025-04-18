
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/NavBar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8 mx-auto">
        {/* Debug div - remove after confirming it works */}
        <div className="bg-red-500 p-4 text-white mb-4 rounded-lg">
          If you see this, Tailwind is working!
        </div>

        <section className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to MyApp</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple, clean React application with authentication and routing
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Feature One</h3>
            <p className="text-sm text-muted-foreground">
              Basic CRUD operations with React and TypeScript
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Feature Two</h3>
            <p className="text-sm text-muted-foreground">
              Secure authentication flow
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Feature Three</h3>
            <p className="text-sm text-muted-foreground">
              Responsive design with Tailwind CSS
            </p>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/register">Create Account</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}