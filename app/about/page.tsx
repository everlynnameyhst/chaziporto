/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
 
"use client"

import { Navbar } from "@/components/chazi-navbar"
import { Footer } from "@/components/chazi-footer"
import { motion } from "framer-motion"
import { CircularLogo } from "@/components/chazi-logo"
import { Award, Target, Rocket, Lightbulb, Users, Monitor, Cpu, Palette } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="px-4 md:px-8 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
             <div className="circle-clip w-full h-full relative overflow-hidden border-4 border-primary/30 bg-background shadow-2xl shadow-primary/20">
                <motion.img
                  src="https://files.catbox.moe/u13f8n.png"
                  alt="Lexxy Mpx Profile"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
              </div>

              <div className="absolute inset-0 circle-clip bg-primary/10 blur-2xl -z-10 scale-105" />
            </motion.div>
          </motion.div>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I'm Lexxy Mpx, a passionate Full-Stack Developer and Creative Technologist with a love for building
                  beautiful digital experiences.
                </p>
              </div>
            </div>

            <div className="glass rounded-[2.5rem] p-8 md:p-12 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket className="w-32 h-32 text-primary" />
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">My Journey</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in web development, I specialize in creating modern, responsive, and performant
                applications using cutting-edge technologies. My approach combines technical expertise with creative
                problem-solving to deliver solutions that not only work flawlessly but also delight users.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying up-to-date with the latest industry trends. Whether it's
                exploring new frameworks, optimizing performance, or crafting pixel-perfect interfaces, I'm always
                excited to take on new challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-[2rem] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Monitor className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">What I Do</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary/60" />
                    Full-Stack Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-primary/60" />
                    UI/UX Design & Prototyping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Mobile App Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Performance Optimization
                  </li>
                </ul>
              </div>

              <div className="glass rounded-[2rem] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">My Approach</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary/60" />
                    User-centered design thinking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Clean, maintainable code
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Agile development methodology
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Continuous improvement mindset
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
