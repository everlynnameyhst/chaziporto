/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
 
"use client"

import { motion } from "framer-motion"
import { Palette, Smartphone, Layout, Server, Terminal, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Server,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & DevOps",
    icon: Terminal,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    items: ["Git", "Docker", "Vercel", "AWS", "CI/CD"],
  },
  {
    category: "Design",
    icon: Palette,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    items: ["Figma", "UI/UX", "Prototyping", "Design Systems", "Responsive Design"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    items: ["React Native", "Flutter", "iOS", "Android", "PWA"],
  },
  {
    category: "Special Skills",
    icon: Sparkles,
    color: "text-primary",
    bgColor: "bg-primary/10",
    items: ["AI Integration", "WebGL", "3D Graphics", "Performance Optimization", "Accessibility"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="min-h-screen px-4 md:px-8 py-24 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full glass rounded-3xl border-border/40 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl ${skill.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon className={`w-6 h-6 ${skill.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${skill.bgColor} ${skill.color}`} />
                        <span className="text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
