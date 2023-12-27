import type { Metadata } from 'next';
import { montserrat } from './fonts'

import Header from '@/components/Header';

import './globals.css';
import Script from 'next/script';


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
        <Script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></Script>
      </head>
      <body className='bg-my-bg'>
        <Header />
        {children}
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1KXJE0CX7K"></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
          dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-1KXJE0CX7K');
        `}
        </Script>
      </body>
    </html>
  )
}
