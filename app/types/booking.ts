export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: 'spa' | 'massage' | 'facial' | 'hair' | 'nails' | 'other';
  popular?: boolean;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface BookingForm {
  serviceId: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  price: number;
  notes?: string;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'wallet' | 'bank';
  name: string;
  lastFour?: string;
}

export interface PaymentForm {
  method: string;
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
  saveCard?: boolean;
}

export interface BookingSummary extends BookingForm {
  total: number;
  tax: number;
  subtotal: number;
}

export type PaymentStatus = 'completed' | 'pending' | 'failed' | 'refunded';

export interface PaymentHistory {
  id: string;
  transactionId: string;
  serviceName: string;
  date: string;
  amount: number;
  status: PaymentStatus;
  paymentMethod: 'card' | 'wallet' | 'bank';
  cardLastFour?: string;
}
