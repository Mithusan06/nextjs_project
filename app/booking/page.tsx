'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Service, TimeSlot } from '@/app/types/booking';
import { mockServices, mockTimeSlots } from '@/app/data/servicesData';
import { Card } from '@/app/components/ui/Card';
import { Button } from '@/app/components/ui/Button';

export default function BookingPage() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [notes, setNotes] = useState<string>('');

  const handleContinue = () => {
    if (!selectedService || !selectedDate || !selectedTime) {
      alert('Please select a service, date, and time');
      return;
    }

    const bookingData = {
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      date: selectedDate,
      timeSlot: selectedTime.time,
      price: selectedService.price,
      notes,
    };

    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    router.push('/payment');
  };

  const today = new Date().toISOString().split('T')[0];

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
            <h1 className="text-xl font-bold text-gray-900">Book a Service</h1>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-2xl px-4 py-6 pb-24">
        <div className="space-y-6">
          {/* Service Selection */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Select a Service</h2>
            <div className="space-y-3">
              {mockServices.map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all ${
                    selectedService?.id === service.id
                      ? 'border-2 border-[#FF5CD5] shadow-lg'
                      : 'border border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        {service.popular && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-pink-100 text-[#FF5CD5] rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {service.duration}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end ml-4">
                      <span className="text-2xl font-bold text-gray-900">${service.price}</span>
                      {selectedService?.id === service.id && (
                        <svg className="w-6 h-6 text-[#FF5CD5] mt-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          {selectedService && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Select Date</h2>
              <Card>
                <input
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FF5CD5] focus:outline-none transition-colors text-gray-900"
                />
              </Card>
            </div>
          )}

          {/* Time Selection */}
          {selectedService && selectedDate && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Select Time</h2>
              <div className="grid grid-cols-3 gap-3">
                {mockTimeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    disabled={!slot.available}
                    onClick={() => setSelectedTime(slot)}
                    className={`px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                      selectedTime?.id === slot.id
                        ? 'bg-gradient-to-r from-[#FF5CD5] to-[#FF3DB8] text-white shadow-lg'
                        : slot.available
                        ? 'bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-300'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Additional Notes */}
          {selectedService && selectedDate && selectedTime && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Additional Notes (Optional)</h2>
              <Card>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requests or preferences..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FF5CD5] focus:outline-none transition-colors text-gray-900 placeholder:text-gray-400 resize-none"
                />
              </Card>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Action Bar */}
      {selectedService && selectedDate && selectedTime && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="mx-auto max-w-2xl px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-2xl font-bold text-gray-900">${selectedService.price}</p>
              </div>
              <Button onClick={handleContinue} size="lg">
                Continue to Payment
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
