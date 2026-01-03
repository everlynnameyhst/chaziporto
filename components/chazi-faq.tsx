/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Apa layanan yang ditawarkan?",
    answer:
      "Saya menyediakan berbagai layanan termasuk server Minecraft, SAMP, bots untuk WhatsApp/Telegram/Discord, dan source code siap pakai dengan harga terjangkau.",
  },
  {
    question: "Bagaimana cara melakukan pembayaran?",
    answer:
      "Pembayaran dapat dilakukan melalui berbagai metode seperti transfer bank, e-wallet, dan cryptocurrency. Detail pembayaran akan diberikan setelah checkout.",
  },
  {
    question: "Apakah ada garansi untuk produk?",
    answer:
      "Ya, semua produk dilengkapi dengan garansi dan dukungan teknis. Jika ada masalah, silakan hubungi saya melalui kontak yang tersedia.",
  },
  {
    question: "Berapa lama proses setup setelah pembayaran?",
    answer:
      "Proses setup biasanya memakan waktu 1-24 jam setelah pembayaran dikonfirmasi, tergantung kompleksitas layanan yang dipilih.",
  },
  {
    question: "Apakah bisa request custom features?",
    answer:
      "Tentu saja! Saya menerima permintaan kustomisasi untuk berbagai layanan. Hubungi saya untuk diskusi lebih lanjut mengenai kebutuhan spesifik Anda.",
  },
]

export function FAQ() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  }

  return (
    <section id="faq" className="py-24 px-4 md:px-8 bg-muted/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Pertanyaan Umum</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan saya.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/40 rounded-2xl px-6 hover:border-primary/40 transition-all"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  )
}
