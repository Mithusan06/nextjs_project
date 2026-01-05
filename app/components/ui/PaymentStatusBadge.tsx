import { PaymentStatus } from '@/app/types/booking';

interface PaymentStatusBadgeProps {
  status: PaymentStatus;
}

const statusConfig: Record<PaymentStatus, { color: string; bgColor: string; label: string }> = {
  completed: {
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    label: 'Completed',
  },
  pending: {
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-50',
    label: 'Pending',
  },
  failed: {
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    label: 'Failed',
  },
  refunded: {
    color: 'text-gray-700',
    bgColor: 'bg-gray-100',
    label: 'Refunded',
  },
};

export function PaymentStatusBadge({ status }: PaymentStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bgColor} ${config.color}`}>
      {config.label}
    </span>
  );
}
