import React from 'react';

import ProtectedRoute from '@/components/ProtectedRoute';
import { Box } from '@mui/material';

const RecordPage = () => {
  return (
    <ProtectedRoute>
      <Box sx={{ height: '150vh' }}>RecordPage</Box>
    </ProtectedRoute>
  );
};

export default RecordPage;
