import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'PARTNERS | ADS CONTROL ',
  description: 'Ads control website partners page',
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
