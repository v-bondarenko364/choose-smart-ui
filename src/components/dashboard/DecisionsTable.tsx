'use client';
import React, { useMemo, useState, useEffect } from 'react';

import type { Decision } from '@/store/types';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Box,
} from '@mui/material';
import { getStatusColor, getCategoryColor, getComplexityColor, formatDate } from '@/lib/utils';

import DecisionInfoModal from './DecisionInfoModal';
import { ApiClient } from '@/lib/api';

type Props = {
  decisions: Decision[];
};

const DecisionsTable = ({ decisions }: Props) => {
  const [localDecisions, setLocalDecisions] = useState<Decision[]>(decisions);
  const [detailsIdToShow, setDetailsIdToShow] = useState<number | null>(null);

  useEffect(() => {
    setLocalDecisions(decisions);
  }, [decisions]);

  const selectedDecision = useMemo(
    () => localDecisions.find((decision) => decision.id === detailsIdToShow) || null,
    [localDecisions, detailsIdToShow],
  );

  const onCloseDetailsModal = () => {
    setDetailsIdToShow(null);
  };

  const setDecisionToProcessing = (decisionId: number) => {
    setLocalDecisions((prevDecisions) =>
      prevDecisions.map((decision) =>
        decision.id === decisionId
          ? {
              ...decision,
              status: 'processing',
              errorMessage: null,
              cognitiveBiases: null,
              missedAlternatives: null,
              decisionCategory: null,
              complexityScore: null,
            }
          : decision,
      ),
    );
  };

  const onRegenerateDecision = async () => {
    if (!detailsIdToShow) return;
    setDetailsIdToShow(null);
    setDecisionToProcessing(detailsIdToShow);

    try {
      const updatedDecision = await ApiClient.regenerateDecision(detailsIdToShow);

      setLocalDecisions((prevDecisions) =>
        prevDecisions.map((decision) =>
          decision.id === detailsIdToShow ? updatedDecision : decision,
        ),
      );
    } catch (error) {
      console.error(error);
      setLocalDecisions((prevDecisions) =>
        prevDecisions.map((decision) =>
          decision.id === detailsIdToShow
            ? {
                ...decision,
                status: 'failed',
                errorMessage: (error as Error).message || 'Failed to regenerate decision',
                cognitiveBiases: null,
                missedAlternatives: null,
                decisionCategory: null,
                complexityScore: null,
              }
            : decision,
        ),
      );
    }
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: '80vh',
          overflow: 'auto',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Table
          stickyHeader
          sx={{
            '& .MuiTableCell-root': {
              borderBottom: '1px solid rgba(224, 224, 224, 1)',
            },
            '& .MuiTableHead .MuiTableCell-root': {
              borderBottom: 'none',
              borderRight: 'none',
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  textAlign: 'center',
                  border: 'none',
                  '&:not(:last-child)': {
                    borderRight: 'none',
                  },
                }}
              >
                Situation
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  textAlign: 'center',
                  border: 'none',
                  '&:not(:last-child)': {
                    borderRight: 'none',
                  },
                }}
              >
                Decision
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  textAlign: 'center',
                  border: 'none',
                  '&:not(:last-child)': {
                    borderRight: 'none',
                  },
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  textAlign: 'center',
                  border: 'none',
                  '&:not(:last-child)': {
                    borderRight: 'none',
                  },
                }}
              >
                Category
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  textAlign: 'center',
                  border: 'none',
                  '&:not(:last-child)': {
                    borderRight: 'none',
                  },
                }}
              >
                Cognitive Biases
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  textAlign: 'center',
                  border: 'none',
                  '&:not(:last-child)': {
                    borderRight: 'none',
                  },
                }}
              >
                Missed Alternatives
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  textAlign: 'center',
                  border: 'none',
                  '&:not(:last-child)': {
                    borderRight: 'none',
                  },
                }}
              >
                Complexity
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  minWidth: 200,
                  textAlign: 'center',
                  border: 'none',
                  '&:not(:last-child)': {
                    borderRight: 'none',
                  },
                }}
              >
                Error Message
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  minWidth: 120,
                  textAlign: 'center',
                  border: 'none',
                  '&:not(:last-child)': {
                    borderRight: 'none',
                  },
                }}
              >
                Created
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {localDecisions.map((decision, index) => (
              <TableRow
                key={decision.id}
                onClick={() => {
                  setDetailsIdToShow(decision.id);
                }}
                sx={{
                  backgroundColor: index % 2 === 0 ? 'background.paper' : 'action.hover',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'action.selected',
                  },
                }}
              >
                <TableCell
                  sx={{
                    maxWidth: 300,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {decision.situation}
                </TableCell>
                <TableCell
                  sx={{
                    maxWidth: 300,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {decision.decision}
                </TableCell>
                <TableCell>
                  <Chip
                    label={decision.status}
                    color={getStatusColor(decision.status)}
                    size="small"
                    sx={{ textTransform: 'capitalize' }}
                  />
                </TableCell>
                <TableCell>
                  {decision.decisionCategory ? (
                    <Chip
                      label={decision.decisionCategory}
                      color={getCategoryColor(decision.decisionCategory)}
                      size="small"
                      sx={{ textTransform: 'capitalize' }}
                    />
                  ) : (
                    '-'
                  )}
                </TableCell>
                <TableCell
                  sx={{
                    maxWidth: 200,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {decision.cognitiveBiases || '-'}
                </TableCell>
                <TableCell
                  sx={{
                    maxWidth: 200,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {decision.missedAlternatives || '-'}
                </TableCell>
                <TableCell>
                  {decision.complexityScore ? (
                    <Chip
                      label={decision.complexityScore}
                      color={getComplexityColor(decision.complexityScore)}
                      size="small"
                      sx={{ textTransform: 'capitalize' }}
                    />
                  ) : (
                    '-'
                  )}
                </TableCell>
                <TableCell
                  sx={{
                    maxWidth: 200,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Box
                    component="span"
                    sx={{ color: decision.errorMessage ? 'error.main' : 'text.secondary' }}
                  >
                    {decision.errorMessage || '-'}
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    minWidth: 120,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {formatDate(decision.createdAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DecisionInfoModal
        decision={selectedDecision}
        onClose={onCloseDetailsModal}
        onRegenerate={onRegenerateDecision}
      />
    </>
  );
};

export default DecisionsTable;
