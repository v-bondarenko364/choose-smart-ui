'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import type { PropsWithChildren } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { getIsAuthenticated, getIsLoading } from '@/store/slices/general';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  return isLoading ? (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>{children}</>
  );
};

export default ProtectedRoute;
