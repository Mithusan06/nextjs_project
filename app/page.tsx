import Link from 'next/link';
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
      <main className="mx-auto max-w-2xl px-4 py-6 pb-28">
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

      {/* Floating Book Now Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="mx-auto max-w-2xl px-4 py-4">
          <Link
            href="/booking"
            className="block w-full text-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-[#FF5CD5] to-[#FF3DB8] text-white shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-200 active:scale-95"
          >
            Book a New Service
          </Link>
        </div>
      </div>
    </div>
  );
}
