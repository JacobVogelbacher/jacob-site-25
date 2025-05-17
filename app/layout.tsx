import type { Metadata } from 'next'
import { Quicksand, Inter } from 'next/font/google'
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
  title: 'Jacob Vogelbacher',
  description:
    'Full-stack software engineer automating business processes and building pixel-perfect experiences on the web.',
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
      <body className={`${inter.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
