import { Theme } from '@radix-ui/themes'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import '@radix-ui/themes/styles.css'
import './globals.css'

const appFont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Natural Language Processing with Python - AI',
  description: 'Learn how to use machine learning concepts with Python.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${appFont.className}`}>
        <Theme hasBackground={false}>{children}</Theme>
      </body>
    </html>
  )
}
