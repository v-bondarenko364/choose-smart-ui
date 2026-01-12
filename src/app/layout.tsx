import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Box } from '@mui/material';

import Providers from '@/components/Providers';
import UserDehydrationProvider from '@/components/UserDehydrationProvider';
import Header from '@/components/Header';
import verifyToken from '@/lib/verifyToken';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'ChooseSmart',
  description: 'Turn tough choices into breakthroughs: capture key decisions and choose smarter',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const tokenStatus = await verifyToken();

  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>
        <Providers>
          <UserDehydrationProvider status={tokenStatus} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Header />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
