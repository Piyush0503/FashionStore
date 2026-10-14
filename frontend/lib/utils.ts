import { Category, OrderStatus, ReturnReason, ReturnStatus } from './types';

// Format price in Indian Rupees
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

// Format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

// Format date with time
export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

// Category display names
export const getCategoryDisplay = (category: Category): string => {
  const categoryMap: Record<Category, string> = {
    KURTIS: 'Kurtis',
    DRESSES: 'Dresses',
    COORD_SETS: 'Co-ord Sets',
  };
  return categoryMap[category] || category;
};

// Order status display
export const getOrderStatusDisplay = (status: OrderStatus): string => {
  const statusMap: Record<OrderStatus, string> = {
    PENDING_PAYMENT: 'Pending Payment',
    PROCESSING: 'Processing',
    SHIPPED: 'Shipped',
    DELIVERED: 'Delivered',
    CANCELLED: 'Cancelled',
    RETURN_PENDING: 'Return Pending',
    RETURNED: 'Returned',
  };
  return statusMap[status] || status;
};

// Return reason display
export const getReturnReasonDisplay = (reason: ReturnReason): string => {
  const reasonMap: Record<ReturnReason, string> = {
    SIZE_TOO_SMALL: 'Size too small',
    SIZE_TOO_LARGE: 'Size too large',
    QUALITY_ISSUE: 'Quality issue',
    WRONG_ITEM_RECEIVED: 'Wrong item received',
    CHANGED_MIND: 'Changed my mind',
    OTHER: 'Other',
  };
  return reasonMap[reason] || reason;
};

// Return status display
export const getReturnStatusDisplay = (status: ReturnStatus): string => {
  const statusMap: Record<ReturnStatus, string> = {
    PENDING: 'Pending',
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
    COMPLETED: 'Completed',
  };
  return statusMap[status] || status;
};

// Get status badge color
export const getStatusBadgeClass = (status: OrderStatus | ReturnStatus): string => {
  const statusColors: Record<string, string> = {
    PENDING_PAYMENT: 'bg-yellow text-ink',
    PROCESSING: 'bg-yellow text-ink',
    SHIPPED: 'bg-lilac text-ink',
    DELIVERED: 'bg-mint text-ink',
    CANCELLED: 'bg-pink text-cream',
    RETURN_PENDING: 'bg-yellow text-ink',
    RETURNED: 'bg-lilac text-ink',
    PENDING: 'bg-yellow text-ink',
    APPROVED: 'bg-mint text-ink',
    REJECTED: 'bg-pink text-cream',
    COMPLETED: 'bg-mint text-ink',
  };
  return statusColors[status] || 'bg-cream text-ink';
};

// Calculate discount percentage
export const getDiscountPercentage = (price: number, compareAtPrice: number): number => {
  if (!compareAtPrice || compareAtPrice <= price) return 0;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
};

// Check if order is eligible for return (within 7 days)
export const isReturnEligible = (deliveredAt: string): boolean => {
  const deliveryDate = new Date(deliveredAt);
  const currentDate = new Date();
  const daysDifference = Math.floor(
    (currentDate.getTime() - deliveryDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  return daysDifference <= 7;
};

// Truncate text
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone (10 digits)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
};

// Validate pin code (6 digits)
export const isValidPinCode = (pinCode: string): boolean => {
  const pinCodeRegex = /^[0-9]{6}$/;
  return pinCodeRegex.test(pinCode);
};

// Generate order number
export const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  return `ORD${timestamp}${random}`;
};

// Generate return number
export const generateReturnNumber = (): string => {
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  return `RET${timestamp}${random}`;
};

// Indian states
export const indianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];
