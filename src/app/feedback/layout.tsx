import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FEEDBACK | ADS CONTROL ',
  description: 'Ads control website feedback page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
