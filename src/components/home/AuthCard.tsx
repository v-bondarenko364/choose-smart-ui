'use client';

import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const AuthCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = (credentialResponse: unknown) => {
    setIsLoading(true);
    // TODO: Implement Google login logic
    console.log('Google login:', credentialResponse);
    setIsLoading(false);
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F8EFE1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            backgroundColor: '#F0F7FF',
          }}
        >
          <CircularProgress
            sx={{
              color: '#4A90E2',
            }}
            size={48}
          />
        </Box>
      ) : (
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            backgroundColor: '#F0F7FF',
            width: '100%',
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 448 }}>
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
                      Welcome Back!
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#4A4A4A',
                      }}
                    >
                      Sign in to continue your wellness journey
                    </Typography>
                  </Box>
                }
              />
              <CardContent
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
              </CardContent>
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
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AuthCard;
