'use client';

import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { store } from '@/store';

const Providers = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
    </GoogleOAuthProvider>
  </Provider>
);

export default Providers;
