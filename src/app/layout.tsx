import type { Metadata } from 'next';
import { montserrat } from './fonts'

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
      <body>{children}</body>
    </html>
  )
}
