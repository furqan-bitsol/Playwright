import { Product } from '@/types/products';

export const getProductsByType = (
  type: string,
  params: { category?: string; subCategory?: string }
): Product[] => {
  const allProducts: Product[] = [
    {
      id: '1',
      image: '/images/product1.jpg',
      title: 'Product 1',
      price: 100,
      originalPrice: 120,
      discount: 20,
      rating: 4.5,
      reviewCount: 10,
    },
    {
      id: '2',
      image: '/images/product2.jpg',
      title: 'Product 2',
      price: 200,
      originalPrice: 250,
      discount: 20,
      rating: 4.0,
      reviewCount: 8,
    },
    {
      id: '3',
      image: '/images/product3.jpg',
      title: 'Product 3',
      price: 300,
      rating: 5.0,
      reviewCount: 15,
    },
  ];

  switch (type) {
    case 'flash-sales':
      return allProducts.filter((_, index) => index < 2); // Mock flash sales
    case 'category':
      return allProducts.filter((product) => product.id === params.category); // Mock category filter
    case 'subcategory':
      return allProducts.filter((product) => product.id === params.subCategory); // Mock subcategory filter
    case 'best-selling':
      return allProducts.slice(0, 3); // Mock best-selling
    case 'all':
    default:
      return allProducts; // Return all products
  }
};
