import { CustomerProfile } from '@/app/components/sections/CustomerProfile';
import { CurrentBooking } from '@/app/components/sections/CurrentBooking';
import { PastBookings } from '@/app/components/sections/PastBookings';
import { LoyaltyRewards } from '@/app/components/sections/LoyaltyRewards';
import {
  mockCustomer,
  mockCurrentBooking,
  mockPastBookings,
  mockRewards,
  mockLoyaltyProgress,
} from '@/app/data/mockData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-2xl px-4 py-6 pb-20">
        <div className="space-y-5">
          {/* Customer Profile Section */}
          <CustomerProfile customer={mockCustomer} />

          {/* Current Booking Section */}
          <CurrentBooking booking={mockCurrentBooking} />

          {/* Past Bookings Section */}
          <PastBookings bookings={mockPastBookings} />

          {/* Loyalty & Rewards Section */}
          <LoyaltyRewards progress={mockLoyaltyProgress} rewards={mockRewards} />
        </div>
      </main>
    </div>
  );
}
