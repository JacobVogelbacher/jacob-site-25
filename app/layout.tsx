import type { Metadata } from 'next'
import { Quicksand, Inter } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'

import './globals.css'

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jacob Vogelbacher - Software Engineer',
  description:
    'Jacob Vogelbacher is a full-stack software engineer who specializes in automating business processes and building pixel-perfect experiences on the web.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark" data-accent="green">
      <head>
        <meta name="apple-mobile-web-app-title" content="Jacob Vogelbacher" />
      </head>
      <GoogleTagManager gtmId="GTM-W7NJ8G6R" />

      <body className={`${inter.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
