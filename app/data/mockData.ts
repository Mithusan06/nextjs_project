import { Customer, Booking, Reward, LoyaltyProgress } from '@/app/types/dashboard';

export const mockCustomer: Customer = {
  id: '1',
  name: 'Sarah Johnson',
  loyaltyTier: 'Gold',
  totalPoints: 2450,
};

export const mockCurrentBooking: Booking = {
  id: 'b1',
  serviceName: 'Premium Spa Treatment',
  date: 'Jan 15, 2026',
  time: '2:30 PM',
  status: 'Upcoming',
};

export const mockPastBookings: Booking[] = [
  {
    id: 'b2',
    serviceName: 'Massage Therapy',
    date: 'Dec 28, 2025',
    time: '11:00 AM',
    status: 'Completed',
  },
  {
    id: 'b3',
    serviceName: 'Deluxe Room',
    date: 'Dec 15, 2025',
    time: '3:00 PM',
    status: 'Completed',
  },
  {
    id: 'b4',
    serviceName: 'Facial Treatment',
    date: 'Nov 22, 2025',
    time: '10:30 AM',
    status: 'Completed',
  },
  {
    id: 'b5',
    serviceName: 'Hair Styling',
    date: 'Nov 8, 2025',
    time: '1:00 PM',
    status: 'Completed',
  },
];

export const mockRewards: Reward[] = [
  {
    id: 'r1',
    name: '500 Bonus Points',
    pointsEarned: 500,
    dateReceived: 'Dec 28, 2025',
  },
  {
    id: 'r2',
    name: 'Welcome Bonus',
    pointsEarned: 200,
    dateReceived: 'Nov 1, 2025',
  },
  {
    id: 'r3',
    name: 'Birthday Reward',
    pointsEarned: 300,
    dateReceived: 'Oct 15, 2025',
  },
];

export const mockLoyaltyProgress: LoyaltyProgress = {
  currentPoints: 2450,
  nextTierPoints: 5000,
  nextTierName: 'Platinum',
  progressPercentage: 49,
};
