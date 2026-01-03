/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
import { Navbar } from "@/components/chazi-navbar"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/chazi-footer"

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
