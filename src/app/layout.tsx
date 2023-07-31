import './globals.css'
import type { Metadata } from 'next'


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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
