import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'VACANCIES | ADS CONTROL ',
  description: 'Ads control website vacancies page',
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
