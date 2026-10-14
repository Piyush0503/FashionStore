const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

interface FetchOptions extends RequestInit {
  token?: string;
}

async function fetchApi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { token, ...fetchOptions } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // Merge any existing headers
  if (fetchOptions.headers) {
    Object.assign(headers, fetchOptions.headers);
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: 'An error occurred',
    }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// Auth API
export const authApi = {
  login: (email: string, password: string) =>
    fetchApi('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  register: (data: {
    name: string;
    email: string;
    phone: string;
    password: string;
  }) =>
    fetchApi('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  getCurrentUser: (token: string) =>
    fetchApi('/auth/me', { token }),
};

// Products API
export const productsApi = {
  getAll: (params?: {
    page?: number;
    size?: number;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    sort?: string;
  }) => {
    const queryParams = new URLSearchParams();
    if (params?.page !== undefined) queryParams.append('page', params.page.toString());
    if (params?.size) queryParams.append('size', params.size.toString());
    if (params?.category) queryParams.append('category', params.category);
    if (params?.minPrice) queryParams.append('minPrice', params.minPrice.toString());
    if (params?.maxPrice) queryParams.append('maxPrice', params.maxPrice.toString());
    if (params?.sort) queryParams.append('sort', params.sort);

    return fetchApi(`/products?${queryParams.toString()}`);
  },

  getById: (id: number) => fetchApi(`/products/${id}`),

  search: (query: string, page = 0, size = 12) =>
    fetchApi(`/products/search?query=${encodeURIComponent(query)}&page=${page}&size=${size}`),

  getFeatured: () => fetchApi('/products/featured'),
};

// Orders API
export const ordersApi = {
  create: (orderData: any, token?: string) =>
    fetchApi('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
      token,
    }),

  getById: (id: number, token?: string) =>
    fetchApi(`/orders/${id}`, { token }),

  getByOrderNumber: (orderNumber: string, token?: string) =>
    fetchApi(`/orders/number/${orderNumber}`, { token }),

  getUserOrders: (token: string, page = 0, size = 10) =>
    fetchApi(`/orders/user?page=${page}&size=${size}`, { token }),

  updateStatus: (id: number, status: string, token: string) =>
    fetchApi(`/orders/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
      token,
    }),
};

// Returns API
export const returnsApi = {
  create: (returnData: any, token: string) =>
    fetchApi('/returns', {
      method: 'POST',
      body: JSON.stringify(returnData),
      token,
    }),

  getAll: (params: { page?: number; size?: number; status?: string }, token: string) => {
    const queryParams = new URLSearchParams();
    if (params.page !== undefined) queryParams.append('page', params.page.toString());
    if (params.size) queryParams.append('size', params.size.toString());
    if (params.status) queryParams.append('status', params.status);

    return fetchApi(`/returns?${queryParams.toString()}`, { token });
  },

  getById: (id: number, token: string) =>
    fetchApi(`/returns/${id}`, { token }),

  updateStatus: (id: number, status: string, notes: string, token: string) =>
    fetchApi(`/returns/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, adminNotes: notes }),
      token,
    }),
};

// Admin Products API
export const adminProductsApi = {
  create: (productData: any, token: string) =>
    fetchApi('/admin/products', {
      method: 'POST',
      body: JSON.stringify(productData),
      token,
    }),

  update: (id: number, productData: any, token: string) =>
    fetchApi(`/admin/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
      token,
    }),

  delete: (id: number, token: string) =>
    fetchApi(`/admin/products/${id}`, {
      method: 'DELETE',
      token,
    }),

  toggleStatus: (id: number, token: string) =>
    fetchApi(`/admin/products/${id}/toggle`, {
      method: 'PATCH',
      token,
    }),
};

export default {
  auth: authApi,
  products: productsApi,
  orders: ordersApi,
  returns: returnsApi,
  adminProducts: adminProductsApi,
};
