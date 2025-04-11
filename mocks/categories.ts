import {
  PhoneIcon,
  ComputerIcon,
  SmartWatchIcon,
  CameraIcon,
  HeadphoneIcon,
  GamepadIcon,
} from '@/components/icons';
import { NavCategory } from '@/types/categories';

/**
 * Navigation categories configuration
 */
export const NAV_CATEGORIES: NavCategory[] = [
  {
    name: "Woman's Fashion",
    href: '/products/all?category=womens-fashion',
    hasSubmenu: true,
    subCategories: [
      {
        name: 'Dresses',
        href: '/products/all?category=womens-fashion&subCategory=dresses',
      },
      {
        name: 'Tops',
        href: '/products/all?category=womens-fashion&subCategory=tops',
      },
      {
        name: 'Shoes',
        href: '/products/all?category=womens-fashion&subCategory=shoes',
      },
      {
        name: 'Accessories',
        href: '/products/all?category=womens-fashion&subCategory=accessories',
      },
    ],
  },
  {
    name: "Men's Fashion",
    href: '/products/all?category=mens-fashion',
    hasSubmenu: true,
    subCategories: [
      {
        name: 'Shirts',
        href: '/products/all?category=mens-fashion&subCategory=shirts',
      },
      {
        name: 'Pants',
        href: '/products/all?category=mens-fashion&subCategory=pants',
      },
      {
        name: 'Shoes',
        href: '/products/all?category=mens-fashion&subCategory=shoes',
      },
      {
        name: 'Accessories',
        href: '/products/all?category=mens-fashion&subCategory=accessories',
      },
    ],
  },
  { name: 'Electronics', href: '/products/all?category=electronics' },
  { name: 'Home & Lifestyle', href: '/products/all?category=home-&-lifestyle' },
  { name: 'Medicine', href: '/products/all?category=medicine' },
  { name: 'Sports & Outdoor', href: '/products/all?category=sports-&-outdoor' },
  { name: "Baby's & Toys", href: '/products/all?category=babies-&-toys' },
  { name: 'Groceries & Pets', href: '/products/all?category=groceries-&-pets' },
  { name: 'Health & Beauty', href: '/products/all?category=health-&-beauty' },
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
