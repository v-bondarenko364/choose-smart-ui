import type { Decision } from '@/store/types';

export const getStatusColor = (status: Decision['status']) => {
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
      return 'warning';
  }
};

export const getCategoryColor = (category: Decision['decisionCategory']) => {
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
      return 'secondary';
  }
};

export const getComplexityColor = (complexity: Decision['complexityScore']) => {
  switch (complexity) {
    case 'low':
      return 'success';
    case 'medium':
      return 'info';
    case 'high':
      return 'error';
    default:
      return 'success';
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
