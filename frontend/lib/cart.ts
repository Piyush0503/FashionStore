import { CartItem, Product, Size } from './types';

const CART_STORAGE_KEY = 'fashion_store_cart';

export const cartUtils = {
  // Get cart from localStorage
  getCart: (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    const cartData = localStorage.getItem(CART_STORAGE_KEY);
    return cartData ? JSON.parse(cartData) : [];
  },

  // Save cart to localStorage
  saveCart: (cart: CartItem[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  },

  // Add item to cart
  addItem: (product: Product, size: Size, quantity = 1): CartItem[] => {
    const cart = cartUtils.getCart();
    const existingItemIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.size === size
    );

    if (existingItemIndex > -1) {
      // Update quantity if item already exists
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.push({ product, size, quantity });
    }

    cartUtils.saveCart(cart);
    return cart;
  },

  // Update item quantity
  updateQuantity: (productId: number, size: Size, quantity: number): CartItem[] => {
    const cart = cartUtils.getCart();
    const itemIndex = cart.findIndex(
      (item) => item.product.id === productId && item.size === size
    );

    if (itemIndex > -1) {
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        cart.splice(itemIndex, 1);
      } else {
        cart[itemIndex].quantity = quantity;
      }
    }

    cartUtils.saveCart(cart);
    return cart;
  },

  // Remove item from cart
  removeItem: (productId: number, size: Size): CartItem[] => {
    const cart = cartUtils.getCart().filter(
      (item) => !(item.product.id === productId && item.size === size)
    );
    cartUtils.saveCart(cart);
    return cart;
  },

  // Clear entire cart
  clearCart: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(CART_STORAGE_KEY);
  },

  // Get cart item count
  getItemCount: (): number => {
    const cart = cartUtils.getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
  },

  // Calculate cart subtotal
  getSubtotal: (): number => {
    const cart = cartUtils.getCart();
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  },

  // Calculate shipping cost
  getShippingCost: (subtotal: number): number => {
    return subtotal >= 999 ? 0 : 50; // Free shipping over ₹999
  },

  // Calculate total
  getTotal: (): number => {
    const subtotal = cartUtils.getSubtotal();
    const shipping = cartUtils.getShippingCost(subtotal);
    return subtotal + shipping;
  },

  // Check if product variant is in stock
  checkStock: (product: Product, size: Size, requestedQuantity: number): boolean => {
    const variant = product.variants.find((v) => v.size === size);
    return variant ? variant.stock >= requestedQuantity : false;
  },
};
