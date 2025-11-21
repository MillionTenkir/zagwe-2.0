import type React from "react"
import type { Metadata } from "next"
import { Cabin, Martian_Mono as Cabin_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _cabin = Cabin({ subsets: ["latin"] })
const _cabinMono = Cabin_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zagwe - Premium African Catering",
  description: "Authentic African cuisine catering with ready meals, hampers and premium dishes",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
