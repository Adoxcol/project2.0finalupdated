import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-lg">
          MyApp
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm hover:text-primary">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm hover:text-primary">
            Dashboard
          </Link>
          <Link to="/posts" className="text-sm hover:text-primary">
            Posts
          </Link>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}