import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

const headings = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-headings',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'The CatchUp',
  description: 'A personal letter and chronicle platform.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${headings.variable} ${body.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}

