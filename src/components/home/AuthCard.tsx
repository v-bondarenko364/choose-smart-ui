'use client';

import React, { useEffect, useState } from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Container } from '@mui/material';
import { useAppDispatch } from '@/store';
import { getUser, loginWithVendor } from '@/store/slices/auth';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const AuthCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const user = useSelector(getUser);

  useEffect(() => {
    if (user) {
      router.push('/record');
    }
  }, [user, router]);

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    try {
      setIsLoading(true);

      await dispatch(
        loginWithVendor({
          token: credentialResponse.credential!,
        }),
      );
    } catch (error) {
      console.error('Error during sign in:', error);
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      {isLoading ? (
        <CircularProgress
          sx={{
            color: '#4A90E2',
          }}
          size={48}
        />
      ) : (
        <Container maxWidth="xs">
          <Card
            sx={{
              border: 'none',
              boxShadow: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <CardHeader
              sx={{
                textAlign: 'center',
                pt: 4,
                '& .MuiCardHeader-content': {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                },
              }}
              title={
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      background: 'linear-gradient(135deg, #2B5A87 0%, #34659A 100%)',
                    }}
                  >
                    <AutoAwesomeIcon sx={{ fontSize: 32, color: 'white' }} />
                  </Avatar>
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      fontWeight: 700,
                      color: '#1A1F36',
                    }}
                  >
                    Welcome to ChooseSmart
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#4A4A4A',
                    }}
                  >
                    Turn tough choices into breakthroughs: capture key decisions and choose smarter
                  </Typography>
                </Box>
              }
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pb: 2,
              }}
            >
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                pb: 3,
                px: 3,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#6B7280',
                  fontSize: '0.875rem',
                }}
              >
                By signing up, you agree to our{' '}
                <Link
                  component={NextLink}
                  href="/terms"
                  sx={{
                    color: '#4A90E2',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Terms of Use
                </Link>{' '}
                &{' '}
                <Link
                  component={NextLink}
                  href="/privacy-policy"
                  sx={{
                    color: '#4A90E2',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Privacy Policy
                </Link>
              </Typography>
            </Box>
          </Card>
        </Container>
      )}
    </Box>
  );
};

export default AuthCard;
