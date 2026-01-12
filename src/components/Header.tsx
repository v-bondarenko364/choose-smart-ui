'use client';
import * as React from 'react';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { getIsAuthenticated, logout } from '@/store/slices/auth';
import { useAppDispatch } from '@/store';

const pages = [
  { label: 'Record', href: '/record' },
  { label: 'Dashboard', href: '/dashboard' },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const isAuthenticated = useSelector(getIsAuthenticated);

  const handleLogout = async () => {
    await dispatch(logout());
    router.push('/');
  };

  // TODO: utilise that in other components
  // <Container maxWidth="xl"></Container>
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                style={{ objectFit: 'contain' }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  ml: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                }}
              >
                ChooseSmart
              </Typography>
            </Box>
          </Link>
          <Box
            sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: { xs: 0, md: 2 } }}
          >
            {isAuthenticated &&
              pages.map((page) => (
                <Link href={page.href} key={page.label}>
                  <Button
                    sx={{
                      color: 'white',
                      fontWeight: pathname === page.href ? 700 : 400,
                      textDecoration: pathname === page.href ? 'underline' : 'none',
                    }}
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}
          </Box>
          {isAuthenticated && (
            <>
              <Tooltip title="Profile">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </Tooltip>
              <Tooltip title="Logout" sx={{ ml: 2 }}>
                <IconButton onClick={handleLogout} color="inherit">
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
