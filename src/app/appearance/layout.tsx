import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'MEDIA APPEARANCE | ADS CONTROL ',
  description: 'Ads control website media appearance page',
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
