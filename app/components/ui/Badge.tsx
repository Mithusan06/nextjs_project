import { LoyaltyTier } from '@/app/types/dashboard';

interface BadgeProps {
  tier: LoyaltyTier;
}

const tierColors: Record<LoyaltyTier, string> = {
  Bronze: 'bg-amber-100 text-amber-700 border-amber-200',
  Silver: 'bg-gray-100 text-gray-700 border-gray-300',
  Gold: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  Platinum: 'bg-purple-100 text-purple-800 border-purple-300',
};

export function Badge({ tier }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${tierColors[tier]}`}>
      {tier}
    </span>
  );
}
