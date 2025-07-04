import { Product, CartItem, User,  Review } from '@/types';

// Mock product data
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    description: 'Premium cotton t-shirt with a comfortable fit. Perfect for everyday wear.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop',
    ],
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    stock: 50,
    rating: 4.5,
    reviews: 123,
    isNew: false,
    isFeatured: true,
    tags: ['cotton', 'casual', 'basic'],
  },
  {
    id: '2',
    name: 'Denim Jacket',
    description: 'Vintage-style denim jacket with a modern twist. Durable and stylish.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    ],
    category: 'jackets',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black', 'Light Blue'],
    stock: 25,
    rating: 4.8,
    reviews: 89,
    isNew: true,
    isFeatured: true,
    tags: ['denim', 'jacket', 'vintage'],
  },
  {
    id: '3',
    name: 'Slim Fit Jeans',
    description: 'Comfortable slim fit jeans made from premium denim. Perfect for any occasion.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=600&fit=crop',
    ],
    category: 'bottoms',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Dark Blue', 'Light Blue', 'Black'],
    stock: 30,
    rating: 4.3,
    reviews: 156,
    isNew: false,
    isFeatured: false,
    tags: ['jeans', 'slim', 'denim'],
  },
  {
    id: '4',
    name: 'Floral Summer Dress',
    description: 'Beautiful floral dress perfect for summer occasions. Light and breathable fabric.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop',
    ],
    category: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Pink', 'Floral Blue', 'Floral Yellow'],
    stock: 20,
    rating: 4.7,
    reviews: 67,
    isNew: true,
    isFeatured: true,
    tags: ['dress', 'floral', 'summer'],
  },
  {
    id: '5',
    name: 'Athletic Sneakers',
    description: 'Comfortable athletic sneakers for everyday wear and light exercise.',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop',
    ],
    category: 'shoes',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Navy'],
    stock: 35,
    rating: 4.4,
    reviews: 234,
    isNew: false,
    isFeatured: false,
    tags: ['sneakers', 'athletic', 'comfortable'],
  },
  {
    id: '6',
    name: 'Leather Handbag',
    description: 'Elegant leather handbag with multiple compartments. Perfect for work or casual outings.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop',
    ],
    category: 'accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Tan'],
    stock: 15,
    rating: 4.6,
    reviews: 45,
    isNew: true,
    isFeatured: true,
    tags: ['handbag', 'leather', 'elegant'],
  },
];

// Mock user data
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'john@example.com',
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: '2',
    email: 'jane@example.com',
    name: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
  },
];

// Mock reviews data
export const mockReviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userId: '1',
    userName: 'John Doe',
    rating: 5,
    comment: 'Great quality t-shirt, very comfortable!',
    createdAt: new Date('2023-06-01'),
  },
  {
    id: '2',
    productId: '1',
    userId: '2',
    userName: 'Jane Smith',
    rating: 4,
    comment: 'Good fit, but could be a bit softer.',
    createdAt: new Date('2023-06-05'),
  },
  {
    id: '3',
    productId: '2',
    userId: '1',
    userName: 'John Doe',
    rating: 5,
    comment: 'Love this jacket! Perfect for fall weather.',
    createdAt: new Date('2023-06-10'),
  },
];

// Mock cart data
export const mockCartItems: CartItem[] = [
  {
    id: '1',
    productId: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    size: 'M',
    color: 'White',
    quantity: 2,
  },
  {
    id: '2',
    productId: '3',
    name: 'Slim Fit Jeans',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
    size: '32',
    color: 'Dark Blue',
    quantity: 1,
  },
];

// Categories
export const categories = [
  { id: 'all', name: 'All Products', count: mockProducts.length },
  { id: 'tops', name: 'Tops', count: mockProducts.filter(p => p.category === 'tops').length },
  { id: 'bottoms', name: 'Bottoms', count: mockProducts.filter(p => p.category === 'bottoms').length },
  { id: 'dresses', name: 'Dresses', count: mockProducts.filter(p => p.category === 'dresses').length },
  { id: 'jackets', name: 'Jackets', count: mockProducts.filter(p => p.category === 'jackets').length },
  { id: 'shoes', name: 'Shoes', count: mockProducts.filter(p => p.category === 'shoes').length },
  { id: 'accessories', name: 'Accessories', count: mockProducts.filter(p => p.category === 'accessories').length },
];

// Filter options
export const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', '28', '30', '32', '34', '36', '6', '7', '8', '9', '10', '11', '12'];
export const colorOptions = ['White', 'Black', 'Gray', 'Blue', 'Light Blue', 'Dark Blue', 'Navy', 'Brown', 'Tan', 'Pink', 'Yellow'];
export const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return mockProducts;
  return mockProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return mockProducts.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return mockProducts.filter(product => product.isNew);
};

export const getReviewsByProductId = (productId: string): Review[] => {
  return mockReviews.filter(review => review.productId === productId);
};
