'use client';

import React, { useState } from 'react';

import ProtectedRoute from '@/components/ProtectedRoute';
import { Box, TextField, Button, Container, Typography } from '@mui/material';
import { useAppDispatch } from '@/store';
import { createDecision } from '@/store/slices/general';
import Snackbar from '@/components/Snackbar';

const MAX_SITUATION_LENGTH = 500;
const MAX_DECISION_LENGTH = 250;
const MAX_REASONING_LENGTH = 250;

const RecordPage = () => {
  const dispatch = useAppDispatch();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [situation, setSituation] = useState('');
  const [decision, setDecision] = useState('');
  const [reasoning, setReasoning] = useState('');
  const [errors, setErrors] = useState<{
    situation?: string;
    decision?: string;
  }>({});

  const clearForm = () => {
    setSituation('');
    setDecision('');
    setReasoning('');
    setErrors({});
  };

  const handleSubmit = async () => {
    const newErrors: { situation?: string; decision?: string } = {};

    if (!situation.trim()) {
      newErrors.situation = 'This field is required';
    }

    if (!decision.trim()) {
      newErrors.decision = 'This field is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      await dispatch(createDecision({ situation, decision, reasoning }));

      setOpenSnackbar(true);
      clearForm();
    }
  };

  return (
    <ProtectedRoute>
      <Snackbar
        open={openSnackbar}
        message="Your decision is being processed..."
        variant="info"
        onClose={() => setOpenSnackbar(false)}
      />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Record Decision
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              Describe the situation or context where you had to make a decision.
            </Typography>
            <TextField
              placeholder="e.g., I received two job offers - one from a startup with higher pay but less stability, and one from an established company with better benefits and work-life balance"
              multiline
              rows={5}
              value={situation}
              onChange={(e) => {
                if (e.target.value.length <= MAX_SITUATION_LENGTH) {
                  setSituation(e.target.value);
                  if (errors.situation) {
                    setErrors({ ...errors, situation: undefined });
                  }
                }
              }}
              error={!!errors.situation}
              helperText={
                errors.situation || `${situation.length}/${MAX_SITUATION_LENGTH} characters`
              }
              required
              fullWidth
            />
          </Box>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              Enter the decision you made in this situation.
            </Typography>
            <TextField
              placeholder="e.g., I decided to accept the job offer at the established company"
              multiline
              rows={5}
              value={decision}
              onChange={(e) => {
                if (e.target.value.length <= MAX_DECISION_LENGTH) {
                  setDecision(e.target.value);
                  if (errors.decision) {
                    setErrors({ ...errors, decision: undefined });
                  }
                }
              }}
              error={!!errors.decision}
              helperText={errors.decision || `${decision.length}/${MAX_DECISION_LENGTH} characters`}
              required
              fullWidth
            />
          </Box>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              Optionally explain your reasoning behind this decision.
            </Typography>
            <TextField
              placeholder="e.g., I prioritized long-term stability and work-life balance over immediate financial gain, as I value job security and time with family"
              multiline
              rows={4}
              value={reasoning}
              onChange={(e) => {
                if (e.target.value.length <= MAX_REASONING_LENGTH) {
                  setReasoning(e.target.value);
                }
              }}
              helperText={`${reasoning.length}/${MAX_REASONING_LENGTH} characters`}
              fullWidth
            />
          </Box>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: 250,
              position: 'sticky',
              bottom: 20,
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </ProtectedRoute>
  );
};

export default RecordPage;
