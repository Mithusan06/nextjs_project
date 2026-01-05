'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { PaymentHistory } from '@/app/types/booking';
import { mockPaymentHistory } from '@/app/data/paymentData';
import { Card, CardContent } from '@/app/components/ui/Card';
import { PaymentStatusBadge } from '@/app/components/ui/PaymentStatusBadge';

export default function PaymentHistoryPage() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'completed' | 'refunded'>('all');

  const filteredPayments = mockPaymentHistory.filter((payment) => {
    if (selectedFilter === 'all') return true;
    return payment.status === selectedFilter;
  });

  const totalSpent = mockPaymentHistory
    .filter((p) => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'card':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        );
      case 'wallet':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
          </svg>
        );
      case 'bank':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="mx-auto max-w-2xl px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-xl font-bold text-gray-900">Payment History</h1>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-2xl px-4 py-6 pb-6">
        <div className="space-y-5">
          {/* Summary Card */}
          <Card className="border border-gray-100 bg-gradient-to-br from-[#FF5CD5] to-[#FF3DB8]">
            <CardContent className="py-6">
              <div className="text-white">
                <p className="text-sm text-white/80 mb-1">Total Spent</p>
                <p className="text-4xl font-bold mb-1">${totalSpent.toFixed(2)}</p>
                <p className="text-sm text-white/70">{mockPaymentHistory.length} transactions</p>
              </div>
            </CardContent>
          </Card>

          {/* Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                selectedFilter === 'all'
                  ? 'bg-[#FF5CD5] text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              All Payments
            </button>
            <button
              onClick={() => setSelectedFilter('completed')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                selectedFilter === 'completed'
                  ? 'bg-[#FF5CD5] text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setSelectedFilter('refunded')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                selectedFilter === 'refunded'
                  ? 'bg-[#FF5CD5] text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              Refunded
            </button>
          </div>

          {/* Payment List */}
          <div className="space-y-3">
            {filteredPayments.length === 0 ? (
              <Card className="border border-gray-100">
                <CardContent>
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-50 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">No payments found</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              filteredPayments.map((payment) => (
                <Card key={payment.id} className="border border-gray-100 hover:shadow-md transition-shadow">
                  <CardContent>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{payment.serviceName}</h3>
                          <PaymentStatusBadge status={payment.status} />
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{payment.date}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="text-gray-400">{getPaymentMethodIcon(payment.paymentMethod)}</span>
                          {payment.paymentMethod === 'card' && payment.cardLastFour ? (
                            <span>•••• {payment.cardLastFour}</span>
                          ) : (
                            <span className="capitalize">{payment.paymentMethod}</span>
                          )}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-2xl font-bold text-gray-900">${payment.amount.toFixed(2)}</p>
                        <p className="text-xs text-gray-500 mt-1">{payment.transactionId}</p>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2 pt-3 border-t border-gray-100">
                      <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        View Receipt
                      </button>
                      {payment.status === 'completed' && (
                        <button className="flex-1 px-3 py-2 text-sm font-medium text-[#FF5CD5] bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                          Book Again
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
