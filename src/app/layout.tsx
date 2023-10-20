import type { Metadata } from 'next';
import { montserrat } from './fonts'

import Header from '@/components/Header';

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
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" ></link>
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body className='bg-my-bg'>
        <Header />
        {children}
      </body>
    </html>
  )
}
