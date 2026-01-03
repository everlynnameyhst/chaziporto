/**
 * Create By Chazi ` Mpx
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
"use client"

import Image from "next/image"

interface CircularLogoProps {
  size?: number
  className?: string
}

export function CircularLogo({ size = 48, className = "" }: CircularLogoProps) {
  return (
    <div className={`relative transition-transform hover:scale-105 ${className}`} style={{ width: size, height: size }}>
      <div className="circle-clip w-full h-full relative overflow-hidden border-2 border-primary/40 bg-background shadow-lg shadow-primary/20">
        <Image src="https://files.catbox.moe/u13f8n.png" alt="Chazi Mpx Logo" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 circle-clip bg-primary/10 blur-md -z-10" />
    </div>
  )
}
