// Database types
export interface Service {
  id: string
  title: string
  description: string
  price: number
  createdAt: Date
  updatedAt: Date
}

export interface PageContent {
  id: string
  page: 'home' | 'about' | 'contacts'
  section: string
  content: string
  createdAt: Date
  updatedAt: Date
}

export interface AdminUser {
  id: string
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export interface Order {
  id: string
  name: string
  email: string
  projectDescription: string
  budget: string
  status: 'pending' | 'completed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

// Form types
export interface OrderFormData {
  name: string
  email: string
  projectDescription: string
  budget: string
}

export interface LoginFormData {
  username: string
  password: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
}

// Navigation types
export interface NavItem {
  href: string
  icon: string
  label: string
}