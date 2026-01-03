/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
"use client"

import { useState } from "react"
import { Check, Copy, MessageSquare, ChevronDown, ChevronUp, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppBotCode() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const codeSections = [
    {
      id: "esm",
      title: "ESM Module Plugin",
      description: "Plugin untuk bot dengan sistem module ES6",
      code: `import { addCoupon } from './lib/db.js'

export default {
  name: 'addcoupon',
  category: 'admin',
  desc: 'Menambahkan kupon diskon baru',
  async exec({ sock, m, args }) {
    if (!args[0] || !args[1]) return chazireply('Format: .addcoupon inputkode inputpersen')
    const code = args[0].toUpperCase()
    const discount = parseInt(args[1])
    await addCoupon(code, discount)
    chazireply(\`Kupon \${code} berhasil ditambahkan dengan diskon \${discount}%\`)
  }
}`
    },
    {
      id: "cjs",
      title: "CommonJS Plugin",
      description: "Plugin untuk bot dengan sistem module CommonJS",
      code: `const { addCoupon } = require('./lib/db')

module.exports = {
  name: 'addcoupon',
  category: 'admin',
  desc: 'Menambahkan kupon diskon baru',
  async exec({ sock, m, args }) {
    if (!args[0] || !args[1]) return chazireply('Format: .addcoupon inputkode inputpersen')
    const code = args[0].toUpperCase()
    const discount = parseInt(args[1])
    await addCoupon(code, discount)
    chazireply(\`Kupon \${code} berhasil ditambahkan dengan diskon \${discount}%\`)
  }
}`
    },
    {
      id: "case",
      title: "Case/Break Handler",
      description: "Handler untuk sistem case/break pada bot WhatsApp",
      code: `case 'addcoupon': {
  if (!isOwner) return chazireply('Fitur ini khusus Owner!')
  if (!q.includes('|')) return chazireply('Format: .addcoupon KODE|DISKON')
  let [code, discount] = q.split('|')
  await db.collection('coupons').insertOne({
    code: code.toUpperCase(),
    discount: parseInt(discount),
    active: true,
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  })
  chazireply(\`Kupon \${code} berhasil dibuat!\`)
}
break`
    }
  ]

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSection(id)
    
    const button = document.getElementById(`copy-btn-${id}`)
    if (button) {
      button.classList.add("animate-pulse")
      setTimeout(() => {
        button.classList.remove("animate-pulse")
      }, 500)
    }
    
    setTimeout(() => setCopiedSection(null), 2000)
  }

  const getSyntaxHighlight = (code: string) => {
    const replacements = [
      { pattern: /(import|export|default|from|async|await)/g, color: "text-blue-400" },
      { pattern: /(const|let|var|new|Date|parseInt|toUpperCase)/g, color: "text-purple-400" },
      { pattern: /(if|return|case|break|split|includes)/g, color: "text-pink-400" },
      { pattern: /(true|false|null)/g, color: "text-yellow-400" },
      { pattern: /(addCoupon|chazireply|db\.collection|insertOne|module\.exports|require)/g, color: "text-green-400" },
      { pattern: /('[^']*'|`[^`]*`)/g, color: "text-yellow-300" },
      { pattern: /(\d+)/g, color: "text-orange-400" },
      { pattern: /(\{|\(|\[)/g, color: "text-white" },
      { pattern: /(\}|\)|\])/g, color: "text-white" },
    ]

    let highlighted = code
    replacements.forEach(({ pattern, color }) => {
      highlighted = highlighted.replace(pattern, `<span class="${color}">$1</span>`)
    })

    return highlighted
  }

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id)
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 p-6 bg-gray-900 border border-gray-800 rounded-xl font-mono shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-6 p-3 bg-gray-800 rounded-lg">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-green-400" />
          <div>
            <h2 className="text-lg font-bold text-white">WhatsApp Bot Integration</h2>
            <p className="text-xs text-gray-400">Pilih dan copy kode plugin untuk bot Anda</p>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>

      <div className="space-y-4">
        {codeSections.map((section) => (
          <div key={section.id} className="border border-gray-700 rounded-lg overflow-hidden">
            {/* Dropdown Trigger */}
            <button
              onClick={() => toggleDropdown(section.id)}
              className="w-full p-4 bg-gray-800 hover:bg-gray-750 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${openDropdown === section.id ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                <div className="text-left">
                  <h3 className="font-bold text-white">{section.title}</h3>
                  <p className="text-sm text-gray-400">{section.description}</p>
                </div>
              </div>
              {openDropdown === section.id ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {/* Code Content */}
            {openDropdown === section.id && (
              <div className="border-t border-gray-700">
                <div className="p-4 bg-black/50">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                      <span>index.js</span>
                    </div>
                    <Button
                      id={`copy-btn-${section.id}`}
                      onClick={() => handleCopy(section.id, section.code)}
                      className={`h-8 px-4 transition-all duration-300 ${
                        copiedSection === section.id 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      } border border-gray-600 rounded`}
                    >
                      <div className="flex items-center gap-2">
                        {copiedSection === section.id ? (
                          <>
                            <Check className="w-4 h-4 animate-bounce" />
                            <span className="font-medium">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span className="font-medium">Copy Code</span>
                          </>
                        )}
                      </div>
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    <pre className="pl-4 pr-2 py-3 bg-black/90 text-gray-300 text-sm overflow-x-auto rounded">
                      <code 
                        dangerouslySetInnerHTML={{ 
                          __html: getSyntaxHighlight(section.code) 
                        }}
                        className="block whitespace-pre font-mono"
                      />
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Terminal Footer */}
      <div className="mt-8 pt-4 border-t border-gray-800">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">$</span>
            <span className="text-green-400">npm install whatsapp-web.js</span>
          </div>
          <div className="text-gray-500 text-xs">
            <span className="text-gray-400">Bot Framework:</span> Baileys
          </div>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="mt-4 flex items-center justify-end gap-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${copiedSection ? 'animate-ping bg-green-500' : 'bg-gray-600'}`}></div>
          <span className="text-xs text-gray-400">
            {copiedSection ? 'Kode berhasil dicopy!' : 'Ready to copy'}
          </span>
        </div>
      </div>
    </div>
  )
}
