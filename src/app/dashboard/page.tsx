import React from 'react';
import { Container } from '@mui/material';

import ProtectedRoute from '@/components/ProtectedRoute';
import DecisionsTable from '@/components/dashboard/DecisionsTable';
import { ApiClient } from '@/lib/api';

const DashboardPage = async () => {
  const decisions = await ApiClient.getDecisions();

  return (
    <ProtectedRoute>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <DecisionsTable decisions={decisions} />
      </Container>
    </ProtectedRoute>
  );
};

export default DashboardPage;
