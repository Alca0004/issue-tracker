import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './NavBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.variable}>
        <Theme appearance='light' accentColor='iris' panelBackground='solid'>
          <NavBar />
          <main className='p-5'>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
