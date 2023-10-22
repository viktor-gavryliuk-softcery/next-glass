// import type { Metadata } from 'next';

// import serviceData from '../serviceData';
// export const metadata: Metadata = {
//   title: serviceData[slug].title,
//   description: serviceData[slug].description,
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
