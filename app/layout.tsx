import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Providers from '@/components/minibot/Providers'
import Chat from '@/components/minibot/Chat'


const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
 })

export const metadata: Metadata = {
  title: 'ImminentAgent',
  description: 'Track product prices effortlessly and save money on your online shopping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers >

      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          <Chat />
          {children}
        </main>
      </body>
      </Providers>
    </html>
  )
}