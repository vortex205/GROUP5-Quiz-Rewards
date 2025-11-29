import './globals.css'
import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'GROUP5 Quiz & Rewards',
  description: 'Gamified quiz app for GROUP5 business students.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[var(--bg)] text-white">
          {children}
        </div>
      </body>
    </html>
  )
}