"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js, Stripe, and PostgreSQL",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Stripe"],
    github: "#",
    demo: "#",
    size: "large",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app powered by OpenAI and WebSockets",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "OpenAI"],
    github: "#",
    demo: "#",
    size: "medium",
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS for managing portfolio content",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Sanity", "Next.js", "Tailwind"],
    github: "#",
    demo: "#",
    size: "medium",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with real-time data",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "API", "Charts"],
    github: "#",
    demo: "#",
    size: "small",
  },
  {
    title: "Task Manager",
    description: "Collaborative task management tool",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue", "Firebase", "Vuex"],
    github: "#",
    demo: "#",
    size: "small",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 md:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A collection of my recent work showcasing various technologies and design approaches
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${project.size === "large" ? "md:col-span-2 md:row-span-2" : project.size === "medium" ? "md:col-span-1 md:row-span-2" : "md:col-span-1"}`}
            >
              <Card className="group h-full overflow-hidden glass rounded-3xl border-border/40 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover aspect-video"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-2xl bg-primary/20 backdrop-blur-sm hover:bg-primary/30"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 text-foreground" />
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-2xl bg-primary/20 backdrop-blur-sm hover:bg-primary/30"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 text-foreground" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-xl border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
