
/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Sparkles, Mail, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CircularLogo } from "@/components/chazi-logo"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: Briefcase, label: "Projects", href: "/projects" },
    { icon: Sparkles, label: "Skills", href: "/skills" },
    { icon: ShoppingCart, label: "Shop", href: "/shop" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  const sidebarVariants = {
    closed: { 
      x: "100%",
      transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] } 
    },
    opened: { 
      x: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05, 
        delayChildren: 0.1
      } 
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    opened: { opacity: 1, x: 0 }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 navbar-rounded"
        style={{ willChange: "transform" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <CircularLogo size={54} />
            <span className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform duration-200">
              Lexxy Mpx
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group px-4 py-2 rounded-xl hover:bg-primary/10 transition-all duration-200 flex items-center gap-2"
              >
                <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="rounded-xl active:scale-90 transition-transform"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60] md:hidden"
            />

            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-80 bg-background z-[70] md:hidden shadow-2xl flex flex-col"
              style={{ willChange: "transform" }} // Optimasi GPU
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/40">
                  <div className="flex items-center gap-3">
                    <CircularLogo size={40} />
                    <span className="text-xl font-bold">Lexxy Mpx</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-xl">
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <nav className="flex flex-col gap-3 flex-1 overflow-y-auto custom-scrollbar">
                  {menuItems.map((item) => (
                    <motion.div key={item.label} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="group flex items-center gap-4 p-3 rounded-xl bg-card/40 border border-border/20 hover:border-primary/40 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold block">{item.label}</span>
                          <span className="text-[10px] text-muted-foreground">Open {item.label}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="pt-4 mt-auto border-t border-border/40 text-center">
                  <p className="text-[10px] text-muted-foreground opacity-50">© 2026 Lexxy Mpx</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
