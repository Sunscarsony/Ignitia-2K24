import type { Metadata } from 'next'
import Navbar from '@/components/common/landing/Navbar'
import Footer from '@/components/common/landing/Footer'

export const metadata: Metadata = {
  title: 'Ignitia 2K24',
  description: 'cultural fest organised by PSIT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
