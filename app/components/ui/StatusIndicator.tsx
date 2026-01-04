import { BookingStatus } from '@/app/types/dashboard';

interface StatusIndicatorProps {
  status: BookingStatus;
}

const statusConfig: Record<BookingStatus, { color: string; bgColor: string; label: string }> = {
  Upcoming: {
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    label: 'Upcoming',
  },
  Active: {
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    label: 'Active',
  },
  Completed: {
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    label: 'Completed',
  },
};

export function StatusIndicator({ status }: StatusIndicatorProps) {
  const config = statusConfig[status];

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${config.bgColor}`}>
      <div className={`w-2 h-2 rounded-full ${config.color.replace('text-', 'bg-')}`} />
      <span className={`text-sm font-medium ${config.color}`}>
        {config.label}
      </span>
    </div>
  );
}
