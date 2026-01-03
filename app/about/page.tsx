/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
 
"use client"

import { Navbar } from "@/components/chazi-navbar"
import { Footer } from "@/components/chazi-footer"
import { motion } from "framer-motion"
import { Award, Target, Rocket, Lightbulb, Users, Monitor, Cpu, Palette } from "lucide-react"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  }

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="px-4 md:px-8 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div variants={itemVariants} className="relative flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative w-32 h-32 md:w-40 md:h-40"
                >
                  <div className="circle-clip w-full h-full relative overflow-hidden border-4 border-primary/30 bg-background shadow-2xl shadow-primary/20">
                    <motion.img
                      src="https://files.catbox.moe/u13f8n.png" // ganti url lu ya (＾ｖ＾)
                      alt="Lexxy Mpx Profile"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
                  </div>

                  <div className="absolute inset-0 circle-clip bg-primary/10 blur-2xl -z-10 scale-105" />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  <h1 className="text-5xl md:text-6xl font-bold text-gradient">About Me</h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I'm Lexxy Mpx, a passionate Full-Stack Developer and Creative Technologist with a love for building
                  beautiful digital experiences.
                </p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="glass rounded-[2.5rem] p-8 md:p-12 space-y-6 relative overflow-hidden group">
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
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="glass rounded-[2rem] p-6 space-y-4">
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
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="glass rounded-[2rem] p-6 space-y-4">
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
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
