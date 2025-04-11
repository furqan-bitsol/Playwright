import {
  PhoneIcon,
  ComputerIcon,
  SmartWatchIcon,
  CameraIcon,
  HeadphoneIcon,
  GamepadIcon,
} from '@/components/icons';

/**
 * Navigation categories configuration
 */
export const NAV_CATEGORIES = [
  {
    name: "Woman's Fashion",
    href: '/category/womens-fashion',
    hasSubmenu: true,
    subCategories: [
      { name: 'Dresses', href: '/category/womens-fashion/dresses' },
      { name: 'Tops', href: '/category/womens-fashion/tops' },
      { name: 'Shoes', href: '/category/womens-fashion/shoes' },
      { name: 'Accessories', href: '/category/womens-fashion/accessories' },
    ],
  },
  {
    name: "Men's Fashion",
    href: '/category/mens-fashion',
    hasSubmenu: true,
    subCategories: [
      { name: 'Shirts', href: '/category/mens-fashion/shirts' },
      { name: 'Pants', href: '/category/mens-fashion/pants' },
      { name: 'Shoes', href: '/category/mens-fashion/shoes' },
      { name: 'Accessories', href: '/category/mens-fashion/accessories' },
    ],
  },
  { name: 'Electronics', href: '/category/electronics' },
  { name: 'Home & Lifestyle', href: '/category/home-lifestyle' },
  { name: 'Medicine', href: '/category/medicine' },
  { name: 'Sports & Outdoor', href: '/category/sports-outdoor' },
  { name: "Baby's & Toys", href: '/category/babies-toys' },
  { name: 'Groceries & Pets', href: '/category/groceries-pets' },
  { name: 'Health & Beauty', href: '/category/health-beauty' },
] as const;

/**
 * Category interface with icon component
 */
export interface Category {
  Icon: React.ComponentType<{ className?: string; color?: string }>;
  name: string;
}

export const CATEGORIES: Category[] = [
  {
    Icon: PhoneIcon,
    name: 'Phones',
  },
  {
    Icon: ComputerIcon,
    name: 'Computers',
  },
  {
    Icon: SmartWatchIcon,
    name: 'SmartWatch',
  },
  {
    Icon: CameraIcon,
    name: 'Camera',
  },
  {
    Icon: HeadphoneIcon,
    name: 'HeadPhones',
  },
  {
    Icon: GamepadIcon,
    name: 'Gaming',
  },
];
