import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | ADS CONTROL ',
  description: 'Ads control website FAQ page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
