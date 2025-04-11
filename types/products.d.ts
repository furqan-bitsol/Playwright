export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number; // Optional for products without discounts
  discount?: number; // Optional if no discount is applied
  rating: number;
  reviewCount: number;
}
