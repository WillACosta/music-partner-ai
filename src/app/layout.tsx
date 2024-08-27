import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

const appFont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music Partner AI',
  description: 'Explore your music library with the power of gen-AI.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={appFont.className}>
        <main className='min-h-screen container py-10 px-5'>{children}</main>
      </body>
    </html>
  )
}
