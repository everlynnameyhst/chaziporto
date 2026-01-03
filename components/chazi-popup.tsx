/**
 * Create By Chazi ` Mpx
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles, Code, Palette, Rocket, Zap, Star, Users, Trophy, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome")
      if (!hasSeenWelcome) {
        setIsOpen(true)
        sessionStorage.setItem("hasSeenWelcome", "true")
      }
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const features = [
    { icon: Code, title: "Full-Stack Dev", description: "React, Next.js & Node.js", color: "text-blue-400" },
    { icon: Palette, title: "Creative Design", description: "Beautiful UI/UX", color: "text-purple-400" },
    { icon: Rocket, title: "Fast Performance", description: "Optimized experience", color: "text-primary" },
    { icon: Zap, title: "Modern Tech", description: "Best practices", color: "text-yellow-400" },
  ]

  const stats = [
    { icon: Star, value: "50+", label: "Projects" },
    { icon: Users, value: "100+", label: "Clients" },
    { icon: Trophy, value: "5+", label: "Years" },
    { icon: Heart, value: "∞", label: "Passion" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg z-[101] rounded-3xl bg-card/40 backdrop-blur-2xl border border-primary/30 shadow-2xl shadow-primary/10"
          >
            <div className="relative p-6 md:p-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 rounded-xl hover:bg-destructive/10 hover:text-destructive transition-colors"
              >
                <X className="w-5 h-5" />
              </Button>

              <div className="flex flex-col items-center mb-6">
                <div className="relative w-16 h-16 mb-4">
                  <div className="circle-clip w-full h-full relative overflow-hidden border-2 border-primary/40 bg-background shadow-lg shadow-primary/30">
                    <Image
                      src="https://files.catbox.moe/sm40kh.png"
                      alt="Welcome Logo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 circle-clip bg-primary/10 blur-md -z-10" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                  <span className="text-gradient">Welcome to Lexxy Mpx</span>
                </h2>

                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  Innovative digital solutions with passion
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3 p-3 rounded-xl bg-background/40 border border-border/30 hover:border-primary/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-xs mb-0.5">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 mb-5">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center text-center">
                    <stat.icon className="w-5 h-5 text-primary mb-1" />
                    <span className="text-xl font-bold text-gradient">{stat.value}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  size="default"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground group flex-1"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Explore Portfolio
                </Button>
                <Button
                  size="default"
                  variant="outline"
                  onClick={() => {
                    setIsOpen(false)
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="rounded-2xl border-primary/20 hover:bg-primary/10 flex-1"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
