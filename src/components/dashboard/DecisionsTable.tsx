'use client';
import React, { useMemo, useState } from 'react';

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
  Button,
} from '@mui/material';
import { getStatusColor, getCategoryColor, getComplexityColor, formatDate } from '@/lib/utils';
import DecisionInfoModal from './DecisionInfoModal';

type Props = {
  decisions: Decision[];
};

const DecisionsTable = ({ decisions }: Props) => {
  const [detailsIdToShow, setDetailsIdToShow] = useState<number | null>(null);

  const selectedDecision = useMemo(
    () => decisions.find((decision) => decision.id === detailsIdToShow) || null,
    [decisions, detailsIdToShow],
  );

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
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {decisions.map((decision, index) => (
              <TableRow
                key={decision.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? 'background.paper' : 'action.hover',
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
                    <Box component="span" sx={{ color: 'text.secondary' }}>
                      -
                    </Box>
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
                  {decision.cognitiveBiases || (
                    <Box component="span" sx={{ color: 'text.secondary' }}>
                      -
                    </Box>
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
                  {decision.missedAlternatives || (
                    <Box component="span" sx={{ color: 'text.secondary' }}>
                      -
                    </Box>
                  )}
                </TableCell>
                <TableCell>
                  {decision.complexityScore ? (
                    <Chip
                      label={decision.complexityScore}
                      color={getComplexityColor(decision.complexityScore)}
                      variant="outlined"
                      size="small"
                      sx={{ textTransform: 'capitalize' }}
                    />
                  ) : (
                    <Box component="span" sx={{ color: 'text.secondary' }}>
                      -
                    </Box>
                  )}
                </TableCell>
                <TableCell
                  sx={{
                    minWidth: 120,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {formatDate(decision.createdAt)}
                </TableCell>
                <TableCell
                  sx={{
                    minWidth: 120,
                    textAlign: 'center',
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => {
                      setDetailsIdToShow(decision.id);
                    }}
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DecisionInfoModal decision={selectedDecision} onClose={() => setDetailsIdToShow(null)} />
    </>
  );
};

export default DecisionsTable;
