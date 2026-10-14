// User types
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'CUSTOMER' | 'ADMIN';
  createdAt: string;
  updatedAt: string;
}

// Product types
export type Category = 'KURTIS' | 'DRESSES' | 'COORD_SETS';
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface ProductVariant {
  id: number;
  size: Size;
  stock: number;
}

export interface Product {
  id: number;
  name: string;
  sku: string;
  category: Category;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  tags: string[];
  variants: ProductVariant[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

// Address types
export interface Address {
  id?: number;
  name?: string;
  phone?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pinCode: string;
  isDefault?: boolean;
}

// Order types
export type OrderStatus = 
  | 'PENDING_PAYMENT' 
  | 'PROCESSING' 
  | 'SHIPPED' 
  | 'DELIVERED' 
  | 'CANCELLED' 
  | 'RETURN_PENDING' 
  | 'RETURNED';

export type PaymentMethod = 'UPI' | 'CARD' | 'NET_BANKING' | 'COD';
export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';

export interface OrderItem {
  id: number;
  product: Product;
  size: Size;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface Order {
  id: number;
  orderNumber: string;
  user?: User;
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
  shippingAddress: Address;
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  total: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  paymentTransactionId?: string;
  createdAt: string;
  updatedAt: string;
  shippedAt?: string;
  deliveredAt?: string;
}

// Return types
export type ReturnReason =
  | 'SIZE_TOO_SMALL'
  | 'SIZE_TOO_LARGE'
  | 'QUALITY_ISSUE'
  | 'WRONG_ITEM_RECEIVED'
  | 'CHANGED_MIND'
  | 'OTHER';

export type ReturnStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'COMPLETED';

export interface ReturnRequest {
  id: number;
  returnNumber: string;
  order: Order;
  orderItem: OrderItem;
  reason: ReturnReason;
  comments: string;
  photos: string[];
  status: ReturnStatus;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
  approvedAt?: string;
  rejectedAt?: string;
  completedAt?: string;
}

// Cart types
export interface CartItem {
  product: Product;
  size: Size;
  quantity: number;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

// Auth types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
