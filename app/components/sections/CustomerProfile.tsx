import Link from 'next/link';
import { Customer } from '@/app/types/dashboard';
import { Badge } from '@/app/components/ui/Badge';

interface CustomerProfileProps {
  customer: Customer;
}

export function CustomerProfile({ customer }: CustomerProfileProps) {
  return (
    <div className="bg-gradient-to-br from-[#FF5CD5] to-[#FF3DB8] rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-white/80 mb-1">Welcome back</p>
          <h1 className="text-2xl font-bold">{customer.name}</h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge tier={customer.loyaltyTier} />
          <Link
            href="/payment-history"
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Payments
          </Link>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">{customer.totalPoints.toLocaleString()}</span>
          <span className="text-sm text-white/80">points</span>
        </div>
        <p className="text-sm text-white/70 mt-1">Total loyalty points earned</p>
      </div>
    </div>
  );
}
