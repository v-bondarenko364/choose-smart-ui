import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { api } from '@/lib/api';
import './globals.css';
import Providers from '@/components/Providers';
// import UserHydrationProvider from '@/components/UserHydrationProvider';
import Header from '@/components/Header';
// import type { User } from '@/store/types/user';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'EndurePath',
  description:
    'Transform negative thoughts, build resilience, and practice mindfulness consistently!',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // let initialUser: User | null = null;
  // const data = await api.fetchUserByToken();

  // if (data?.user) {
  //   initialUser = data.user;
  // }

  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>
        <Providers>
          {/* <UserHydrationProvider initialUser={initialUser} />  */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
