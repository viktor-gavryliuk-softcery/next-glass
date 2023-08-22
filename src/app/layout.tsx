import type { Metadata } from 'next';
import { montserrat } from './fonts'

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';


export const metadata: Metadata = {
  title: 'ADS CONTROL | MARKETING WEB 3.0',
  description: 'Ads control website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className='bg-my-bg'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
