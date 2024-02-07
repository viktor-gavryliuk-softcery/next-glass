import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TEAM | ADS CONTROL ',
  description: 'Ads control website team page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
