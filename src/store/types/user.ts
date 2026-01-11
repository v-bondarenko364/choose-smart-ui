export type RegSource = 'GOOGLE' | 'APPLE';

type Character = {
  id: number;
  name: string;
  description: string;
  introImage: string;
  avatarImage: string;
};

export enum SubscriptionType {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

export enum SubscriptionStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
}

export type User = {
  id: number;
  email: string;
  name: string | null;
  characterId: number | null;
  characterReflection: string | null;
  onboardingCompleted: boolean;
  tourCompleted: boolean;
  focusArea: number | null;
  insightStyle: number | null;
  regSource: `${RegSource}`;
  character: Character | null;
  subscription: {
    lastPaymentDate: Date | null;
    subscriptionType: SubscriptionType;
    subscriptionStatus: SubscriptionStatus;
    freeTrialEndDate: Date;
  } | null;
};

export type UserActivity = {
  id: number;
  type: string;
  moodTagId: number | null;
  note: string | null;
  questId: number | null;
  baseEmoji: number | null;
};

export type UserActivityForDay = {
  id: number;
  type: string;
  moodTagId: number | null;
  note: string | null;
  questId: number | null;
  baseEmoji: number | null;
  updatedAt: string;
};

export type UserActivityResponse = {
  userActivity: UserActivity;
  isStatUpdated: boolean;
};
