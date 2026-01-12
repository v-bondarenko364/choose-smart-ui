import React from 'react';

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

type Props = {
  decisions: Decision[];
};

const getStatusColor = (status: Decision['status']) => {
  switch (status) {
    case 'completed':
      return 'success';
    case 'processing':
      return 'info';
    case 'pending':
      return 'warning';
    case 'failed':
      return 'error';
    default:
      return 'default';
  }
};

const getCategoryColor = (category: Decision['decisionCategory']) => {
  switch (category) {
    case 'strategic':
      return 'primary';
    case 'rational':
      return 'info';
    case 'emotional':
      return 'error';
    case 'impulsive':
      return 'warning';
    case 'intuitive':
      return 'secondary';
    default:
      return 'default';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const DecisionsTable = ({ decisions }: Props) => {
  return (
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DecisionsTable;
