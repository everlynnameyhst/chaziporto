"use client"

import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Heart,
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CircularLogo } from "@/components/chazi-logo"

/**
 * Create By Chazi ` Mpx
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */

export function Footer() {
  // Social links hanya GitHub, WhatsApp, dan LinkedIn
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/everlynnameyhst",
      label: "GitHub",
      color: "hover:bg-[#333]/10 hover:text-[#333] dark:hover:text-white",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/14314403688",
      label: "WhatsApp",
      color: "hover:bg-[#25D366]/10 hover:text-[#25D366]",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/chazi-mpx",
      label: "LinkedIn",
      color: "hover:bg-[#0077b5]/10 hover:text-[#0077b5]",
    },
  ]

  const footerLinks = {
    navigation: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Skills", href: "/skills" },
      { label: "Shop", href: "/shop" },
    ],
    services: [
      { label: "Web Development", href: "#" },
      { label: "UI/UX Design", href: "#" },
      { label: "Mobile Apps", href: "#" },
      { label: "Consulting", href: "#" },
    ],
    contact: [
      { icon: Mail, label: "supporteverlyn@vestia.icu", href: "mailto:supporteverlyn@vestia.icu" },
      { icon: Phone, label: "+1 (432) 440-3688", href: "tel:+14314403688" },
      { icon: MapPin, label: "Chinese, Beijing", href: "#" },
    ],
  }

  return (
    <footer
      id="contact"
      className="relative bg-card/50 border-t border-border/60 mt-24 footer-rounded-top overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-4">
              <CircularLogo size={70} />
              <div>
                <span className="text-3xl font-bold text-gradient block">Lexxy Mpx</span>
                <span className="text-sm text-muted-foreground">Creative Technologist</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              Crafting beautiful, functional, and performant digital experiences with modern web technologies. Let's
              build something amazing together.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider flex items-center gap-2">
                <Send className="w-4 h-4 text-primary" />
                Newsletter
              </h4>
              <div className="flex gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-xl bg-background/80 border-border/60 focus:border-primary h-11"
                />
                <Button className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-5">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-primary group-hover:w-4 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-primary group-hover:w-4 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:col-span-3 space-y-4"
          >
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-3 group"
                  >
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="break-all">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="py-8 border-y border-border/40"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">Connect with me on social media:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 rounded-xl bg-background/80 border border-border/60 flex items-center justify-center transition-all duration-200 ${color}`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Lexxy Mpx.</span>
            <span className="hidden md:inline">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Crafted with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span className="text-muted-foreground">and passion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}