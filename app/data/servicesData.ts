import { Service, TimeSlot } from '@/app/types/booking';

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Premium Spa Treatment',
    description: 'Luxurious full-body spa experience with aromatherapy',
    duration: '90 min',
    price: 120,
    category: 'spa',
    popular: true,
  },
  {
    id: '2',
    name: 'Deep Tissue Massage',
    description: 'Therapeutic massage focusing on muscle tension relief',
    duration: '60 min',
    price: 85,
    category: 'massage',
    popular: true,
  },
  {
    id: '3',
    name: 'Signature Facial',
    description: 'Rejuvenating facial with premium skincare products',
    duration: '75 min',
    price: 95,
    category: 'facial',
  },
  {
    id: '4',
    name: 'Hair Styling & Treatment',
    description: 'Professional styling with nourishing hair treatment',
    duration: '120 min',
    price: 110,
    category: 'hair',
    popular: true,
  },
  {
    id: '5',
    name: 'Manicure & Pedicure',
    description: 'Complete nail care with gel polish option',
    duration: '90 min',
    price: 75,
    category: 'nails',
  },
  {
    id: '6',
    name: 'Hot Stone Massage',
    description: 'Relaxing massage using heated stones',
    duration: '75 min',
    price: 100,
    category: 'massage',
  },
];

export const mockTimeSlots: TimeSlot[] = [
  { id: '1', time: '9:00 AM', available: true },
  { id: '2', time: '10:00 AM', available: true },
  { id: '3', time: '11:00 AM', available: false },
  { id: '4', time: '12:00 PM', available: true },
  { id: '5', time: '1:00 PM', available: true },
  { id: '6', time: '2:00 PM', available: false },
  { id: '7', time: '3:00 PM', available: true },
  { id: '8', time: '4:00 PM', available: true },
  { id: '9', time: '5:00 PM', available: true },
  { id: '10', time: '6:00 PM', available: false },
];
