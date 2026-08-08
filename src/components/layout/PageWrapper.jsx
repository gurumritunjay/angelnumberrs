import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export function PageWrapper({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
