"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Sparkles, Mail, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CircularLogo } from "@/components/chazi-logo"

/**
 * Create By Chazi ` Mpx
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: Briefcase, label: "Projects", href: "/projects" },
    { icon: Sparkles, label: "Skills", href: "/skills" },
    { icon: ShoppingCart, label: "Shop", href: "/shop" }, // Added Shop navigation item
    { icon: Mail, label: "Contact", href: "/contact" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/40 navbar-rounded gpu-accelerate"
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
              className="rounded-xl hover:bg-primary/10 transition-colors"
            >
              <div
                className="transition-transform duration-200"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-foreground" />}
              </div>
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-background border-l border-border/40 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/40">
                  <div className="flex items-center gap-3">
                    <CircularLogo size={40} />
                    <span className="text-xl font-bold text-gradient">Lexxy Mpx</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-xl hover:bg-primary/10">
                    <X className="w-5 h-5 text-primary" />
                  </Button>
                </div>

                <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={toggleMenu}
                      className="group relative overflow-hidden flex items-center gap-4 p-4 rounded-xl bg-card/50 hover:bg-primary/10 border border-border/30 hover:border-primary/40 transition-all duration-200"
                    >
                      <div className="relative z-10 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="relative z-10 flex-1">
                        <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors block">
                          {item.label}
                        </span>
                        <span className="text-xs text-muted-foreground">Go to {item.label.toLowerCase()}</span>
                      </div>
                    </Link>
                  ))}
                </nav>

                <div className="pt-4 mt-4 border-t border-border/40">
                  <p className="text-xs text-muted-foreground text-center">© 2026 Lexxy Mpx. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
