/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */

"use client"

import { useState } from "react"
import { Check, Copy, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppBotCode() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null)

  const codeSections = [
    {
      id: "esm",
      title: "ESM Module Plugin",
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
    setTimeout(() => setCopiedSection(null), 1500)
  }

  const getSyntaxHighlight = (code: string) => {
    return code
      .replace(/(import|export|default|const|require|module\.exports|case|break|async|await)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(return|let|new|Date)/g, '<span class="text-purple-400">$1</span>')
      .replace(/(if|else|split|parseInt|toUpperCase)/g, '<span class="text-pink-400">$1</span>')
      .replace(/(true|false|null)/g, '<span class="text-yellow-400">$1</span>')
      .replace(/(addCoupon|chazireply|db\.collection|insertOne)/g, '<span class="text-green-400">$1</span>')
      .replace(/('.*?'|`.*?`)/g, '<span class="text-yellow-300">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
      .replace(/(\d+)/g, '<span class="text-orange-400">$1</span>')
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 p-8 bg-gray-900 border-2 border-gray-700 rounded-xl font-mono">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-900/50 rounded-lg">
          <MessageSquare className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">WhatsApp Bot Integration</h2>
          <p className="text-sm text-gray-400">Copy kode plugin untuk menambahkan fitur kupon ke bot Anda.</p>
        </div>
      </div>

      <div className="space-y-6">
        {codeSections.map((section) => (
          <div key={section.id} className="relative group">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-300 font-medium ml-2">{section.title}</span>
              </div>
              
              <Button
                onClick={() => handleCopy(section.id, section.code)}
                className={`h-8 px-4 transition-all duration-300 ${
                  copiedSection === section.id 
                    ? 'bg-green-600 text-white scale-105' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                } border border-gray-600 rounded-lg`}
              >
                <div className="flex items-center gap-2">
                  {copiedSection === section.id ? (
                    <>
                      <Check className="w-4 h-4 animate-pulse" />
                      <span className="font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="font-medium">Copy</span>
                    </>
                  )}
                </div>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5 rounded-lg"></div>
              <pre className="p-6 rounded-lg bg-black/90 text-gray-300 text-sm overflow-x-auto border border-gray-800 shadow-2xl">
                <code 
                  dangerouslySetInnerHTML={{ 
                    __html: getSyntaxHighlight(section.code) 
                  }}
                />
              </pre>
              
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Status:</span>
            <span className="text-green-400 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Ready to copy
            </span>
          </div>
          <div className="text-gray-500">
            <span className="text-gray-400">Format:</span> JavaScript/Node.js
          </div>
        </div>
      </div>
    </div>
  )
}
