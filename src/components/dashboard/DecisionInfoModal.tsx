import { Decision } from '@/store/types';
import React from 'react';
import {
  Chip,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Divider,
} from '@mui/material';
import { getCategoryColor, getStatusColor, getComplexityColor, formatDate } from '@/lib/utils';

type Props = {
  decision: Decision | null;
  onClose: () => void;
};

const DecisionInfoModal = ({ decision, onClose }: Props) => (
  <Dialog open={!!decision} onClose={onClose} maxWidth="md" fullWidth>
    <DialogTitle>
      <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
        Decision Details
      </Typography>
    </DialogTitle>
    <DialogContent>
      {decision && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 1 }}>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}
            >
              Situation
            </Typography>
            <Typography variant="body1">{decision.situation}</Typography>
          </Box>

          <Divider />

          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}
            >
              Decision
            </Typography>
            <Typography variant="body1">{decision.decision}</Typography>
          </Box>

          {decision.reasoning && (
            <>
              <Divider />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}
                >
                  Reasoning
                </Typography>
                <Typography variant="body1">{decision.reasoning}</Typography>
              </Box>
            </>
          )}

          <Divider />

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}
              >
                Status
              </Typography>
              <Chip
                label={decision.status}
                color={getStatusColor(decision.status)}
                size="small"
                sx={{ textTransform: 'capitalize' }}
              />
            </Box>

            <Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}
              >
                Category
              </Typography>
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
            </Box>

            <Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}
              >
                Complexity
              </Typography>
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
            </Box>
          </Box>

          <Divider />

          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}
            >
              Cognitive Biases
            </Typography>
            <Typography variant="body1">
              {decision.cognitiveBiases || (
                <Box component="span" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                  No cognitive biases identified
                </Box>
              )}
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}
            >
              Missed Alternatives
            </Typography>
            <Typography variant="body1">
              {decision.missedAlternatives || (
                <Box component="span" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                  No missed alternatives identified
                </Box>
              )}
            </Typography>
          </Box>

          {decision.errorMessage && (
            <>
              <Divider />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, mb: 1, color: 'error.main' }}
                >
                  Error Message
                </Typography>
                <Typography variant="body1" sx={{ color: 'error.main' }}>
                  {decision.errorMessage}
                </Typography>
              </Box>
            </>
          )}

          <Divider />

          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}
            >
              Created At
            </Typography>
            <Typography variant="body1">{formatDate(decision.createdAt)}</Typography>
          </Box>
        </Box>
      )}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} variant="contained">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default DecisionInfoModal;
