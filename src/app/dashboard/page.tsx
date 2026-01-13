import React from 'react';
import { Container } from '@mui/material';

import ProtectedRoute from '@/components/ProtectedRoute';
import DecisionsTable from '@/components/dashboard/DecisionsTable';
import { ApiClient } from '@/lib/api';
import { Decision } from '@/store/types';

const DashboardPage = async () => {
  let decisions: Decision[] = [];
  try {
    decisions = await ApiClient.getDecisions();
  } catch (error) {
    console.error(error);
  }

  return (
    <ProtectedRoute>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <DecisionsTable decisions={decisions} />
      </Container>
    </ProtectedRoute>
  );
};

export default DashboardPage;
