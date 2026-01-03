/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
 
import { Navbar } from "@/components/chazi-navbar"
import { Hero } from "@/components/chazi-hero"
import { Footer } from "@/components/chazi-footer"
import { WelcomePopup } from "@/components/chazi-popup"
import { FAQ } from "@/components/chazi-faq"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <WelcomePopup />
      <Navbar />
      <main>
        <Hero />
        <FAQ />
      </main>
      <Footer />

      {/* Ambient background decorations */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </div>
  )
}
