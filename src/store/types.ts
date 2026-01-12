export type LoginVendorPayload = {
  token: string;
};

export type User = {
  id: number;
  email: string;
  name: string | null;
};

export type Decision = {
  id: number;
  situation: string;
  decision: string;
  reasoning?: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  errorMessage: string | null;
  decisionCategory: 'emotional' | 'strategic' | 'impulsive' | 'rational' | 'intuitive';
  cognitiveBiases: string;
  missedAlternatives: string;
  complexityScore: 'low' | 'medium' | 'high';
  createdAt: string;
};

export type CreateDecisionPayload = Pick<Decision, 'situation' | 'decision' | 'reasoning'>;
