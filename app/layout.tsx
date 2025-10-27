import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tailor Hub - Fintech Landing Page',
  description: 'Transform Your Fintech Operations with AI-Powered Data Intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
