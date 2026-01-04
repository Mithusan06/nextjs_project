export type LoyaltyTier = 'Bronze' | 'Silver' | 'Gold' | 'Platinum';

export type BookingStatus = 'Upcoming' | 'Active' | 'Completed';

export interface Customer {
  id: string;
  name: string;
  loyaltyTier: LoyaltyTier;
  totalPoints: number;
}

export interface Booking {
  id: string;
  serviceName: string;
  date: string;
  time: string;
  status: BookingStatus;
}

export interface Reward {
  id: string;
  name: string;
  pointsEarned: number;
  dateReceived: string;
}

export interface LoyaltyProgress {
  currentPoints: number;
  nextTierPoints: number;
  nextTierName: string;
  progressPercentage: number;
}
