import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clash Royale Store – Purple-Grade Accounts & Boosting',
  description: 'Buy maxed CR accounts or push ladder with pro boosters. Evo-deck calculator, instant checkout, 24 h support.',
  openGraph: {
    title: 'Clash Royale Store – Purple-Grade Accounts & Boosting',
    description: 'Buy maxed CR accounts or push ladder with pro boosters. Evo-deck calculator, instant checkout, 24 h support.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Clash Royale Store',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clash Royale Store – Purple-Grade Accounts & Boosting',
    description: 'Buy maxed CR accounts or push ladder with pro boosters. Evo-deck calculator, instant checkout, 24 h support.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}