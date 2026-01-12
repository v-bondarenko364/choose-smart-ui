'use client';

import React from 'react';
import { Snackbar as MuiSnackbar, Alert, AlertTitle, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';

type SnackbarVariant = 'info' | 'success' | 'warning' | 'error';

type SnackbarProps = {
  variant: SnackbarVariant;
  message: string;
  open: boolean;
  onClose?: () => void;
};

const variantConfig = {
  success: {
    icon: <CheckCircleIcon />,
    title: 'Success',
  },
  info: {
    icon: <InfoIcon />,
    title: 'Information',
  },
  warning: {
    icon: <WarningIcon />,
    title: 'Warning',
  },
  error: {
    icon: <ErrorIcon />,
    title: 'Error',
  },
};

const Snackbar = ({ variant, message, open, onClose }: SnackbarProps) => {
  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    if (onClose) {
      onClose();
    }
  };

  const config = variantConfig[variant];

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity={variant} onClose={handleClose} icon={config.icon}>
        <AlertTitle
          sx={{
            fontWeight: 600,
            mb: 0.5,
          }}
        >
          {config.title}
        </AlertTitle>
        <Box component="span" sx={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
          {message}
        </Box>
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
