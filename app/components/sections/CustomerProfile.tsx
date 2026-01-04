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
        <div className="flex-shrink-0">
          <Badge tier={customer.loyaltyTier} />
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
