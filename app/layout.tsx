import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://multiphasiclabs.com'),
  title: {
    default: 'Multiphasic Labs | Mental Health AI Safety',
    template: '%s | Multiphasic Labs',
  },
  description: 'Open-source safety evaluation tooling for AI systems in mental health contexts. 250 scripted personas, 6 clinical safety criteria, reproducible benchmark.',
  authors: [{ name: 'Multiphasic Labs' }],
  openGraph: {
    type: 'website',
    siteName: 'Multiphasic Labs',
    images: ['/assets/MULTIPHASIC-9eef11f0-719d-473e-8d4f-6bf93ca47f46.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/MULTIPHASIC-9eef11f0-719d-473e-8d4f-6bf93ca47f46.png'],
  },
  icons: {
    icon: '/assets/favicon.svg',
    apple: '/assets/MULTIPHASIC-9eef11f0-719d-473e-8d4f-6bf93ca47f46.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" className={dmSans.variable}>
      <body className="min-h-screen flex flex-col bg-[#FAFAF8]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
