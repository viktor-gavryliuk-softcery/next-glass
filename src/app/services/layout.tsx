import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'SERVICES | ADS CONTROL ',
  description: 'Ads control website services page',
}


export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      {children}
    </>
  )
}
