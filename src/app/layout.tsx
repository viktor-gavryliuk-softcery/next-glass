import type { Metadata } from 'next';
import { montserrat } from './fonts';

import Header from '@/components/Header';

import Script from 'next/script';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title:
    'ADS CONTROL | WEB3 Marketing Agency | Marketing for WEB3 | Full-cycle Marketing for WEB3 projects',
  keywords:
    'ads control, ads, web3, web3 marketing, web3 agency, web3 marketing agency, full cycle marketing, marketing agency for web3, web3 projects marketing, strategies for web3 projects, marketing strategy fro web3 project, marketing fro crypto projects, web3 crypto projects marketing',

  description:
    'ADS CONTROL | WEB3 Marketing Agency | Marketing for Crypto projects | Full-cycle Marketing for WEB3 projects | Crypto marketing | Strategy and marketing fro your WEB3 project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={montserrat.className}>
      <head>
        <link
          href='https://assets.calendly.com/assets/external/widget.css'
          rel='stylesheet'></link>
        <Script
          src='https://assets.calendly.com/assets/external/widget.js'
          type='text/javascript'
          async></Script>
      </head>
      <body className='bg-my-bg'>
        <Header />
        {children}
        {/* Google tag (gtag.js) */}
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-1KXJE0CX7K'></Script>
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
