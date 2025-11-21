"use client"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      {/* Main Navigation with Logo and Menu on same line */}
      <nav className="flex items-center justify-start gap-8 px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/zagwe-logo.png" alt="Zagwe" width={60} height={60} />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-foreground text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/menus" className="text-foreground text-sm font-medium hover:text-primary transition-colors">
            Menu
          </Link>
          <Link href="#" className="text-foreground text-sm font-medium hover:text-primary transition-colors">
            Ready Meals
          </Link>
          <Link href="#" className="text-foreground text-sm font-medium hover:text-primary transition-colors">
            Student Discount
          </Link>
          <Link href="#" className="text-foreground text-sm font-medium hover:text-primary transition-colors">
            Loyalty
          </Link>
          <Link href="#" className="text-foreground text-sm font-medium hover:text-primary transition-colors">
            How to order online
          </Link>
          <Link href="#" className="text-foreground text-sm font-medium hover:text-primary transition-colors">
            Reseller Signup
          </Link>
          <Link href="#" className="text-foreground text-sm font-medium hover:text-primary transition-colors">
            Product Allergen Info
          </Link>
        </div>
      </nav>
    </header>
  )
}
