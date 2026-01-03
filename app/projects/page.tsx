/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
 
import { Navbar } from "@/components/chazi-navbar"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/chazi-footer"

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
