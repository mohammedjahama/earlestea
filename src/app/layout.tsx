import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MediaProvider } from '@/contexts/MediaContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Earle Sebastian',
  description: 'Art Director & Creative Visionary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MediaProvider>
          {children}
        </MediaProvider>
      </body>
    </html>
  )
}
