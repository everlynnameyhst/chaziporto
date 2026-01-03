/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
 
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const _jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lexxy Mpx - Full-Stack Web Developer",
  description:
    "Portfolio of Lexxy Mpx -",
  generator: "Chazi Mpx",
  keywords: ["portfolio", "web developer", "full-stack", "react", "next.js"],
  authors: [{ name: "Lexxy Mpx" }],
  icons: {
    icon: [
      {
        url: "https://files.catbox.moe/sm40kh.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://files.catbox.moe/sm40kh.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://files.catbox.moe/sm40kh.png",
        type: "image/svg+xml",
      },
    ],
    apple: "https://files.catbox.moe/sm40kh.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#10b981" },
    { media: "(prefers-color-scheme: dark)", color: "#10b981" },
  ],
  width: "device-width",
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${_spaceGrotesk.variable} ${_jetBrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
