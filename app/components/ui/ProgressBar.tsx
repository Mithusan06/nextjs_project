interface ProgressBarProps {
  percentage: number;
  className?: string;
}

export function ProgressBar({ percentage, className = '' }: ProgressBarProps) {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className={`w-full bg-gray-100 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className="bg-gradient-to-r from-[#FF5CD5] to-[#FF3DB8] h-full rounded-full transition-all duration-300"
        style={{ width: `${clampedPercentage}%` }}
      />
    </div>
  );
}
