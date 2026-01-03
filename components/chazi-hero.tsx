/**
 * Create By Chazi ` Mpx
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
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
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-32 pb-16">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center space-y-12">
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
              className="relative w-48 h-48 md:w-56 md:h-56"
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

          <div className="space-y-8 text-center">
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p className="text-primary font-medium text-lg">Hello, I'm</motion.p>
              <motion.h1 className="text-5xl md:text-7xl font-bold text-balance">
                <span className="text-gradient">Lexxy Mpx</span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto"
            >
              Full-Stack Developer & Creative Technologist crafting exceptional digital experiences with modern web
              technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground group"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-primary/20 hover:bg-primary/10 bg-transparent"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center">
              <p className="text-sm text-muted-foreground">Connect with me:</p>
              {[
                { Icon: Github, href: "https://github.com/everlynnameyhst" },
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Mail, href: "https://wa.me/14314403688" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
