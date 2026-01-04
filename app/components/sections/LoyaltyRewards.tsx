import { Reward, LoyaltyProgress } from '@/app/types/dashboard';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/components/ui/Card';
import { ProgressBar } from '@/app/components/ui/ProgressBar';

interface LoyaltyRewardsProps {
  progress: LoyaltyProgress;
  rewards: Reward[];
}

export function LoyaltyRewards({ progress, rewards }: LoyaltyRewardsProps) {
  return (
    <Card className="border border-gray-100">
      <CardHeader>
        <CardTitle>Loyalty & Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Progress Section */}
          <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
            <div className="flex items-baseline justify-between mb-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">Current Points</p>
                <p className="text-2xl font-bold text-gray-900">
                  {progress.currentPoints.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Next Tier</p>
                <p className="text-lg font-semibold text-[#FF5CD5]">
                  {progress.nextTierName}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <ProgressBar percentage={progress.progressPercentage} />
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>{progress.currentPoints} pts</span>
                <span>{progress.nextTierPoints} pts</span>
              </div>
            </div>
          </div>

          {/* Rewards History */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Rewards History</h4>
            {rewards.length === 0 ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">No rewards yet</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {rewards.map((reward) => (
                  <div
                    key={reward.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#FF5CD5]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{reward.name}</p>
                        <p className="text-xs text-gray-500">{reward.dateReceived}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-[#FF5CD5]">
                        +{reward.pointsEarned}
                      </p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
