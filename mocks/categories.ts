import {
  PhoneIcon,
  ComputerIcon,
  SmartWatchIcon,
  CameraIcon,
  HeadphoneIcon,
  GamepadIcon,
  DressIcon,
  ShirtIcon,
  HomeIcon,
  PillIcon,
  BabyIcon,
  AppleIcon,
  PawIcon,
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
    Icon: DressIcon,
    name: "Woman's Fashion",
  },
  {
    Icon: ShirtIcon,
    name: "Men's Fashion",
  },
  {
    Icon: ComputerIcon,
    name: 'Electronics',
  },
  {
    Icon: HomeIcon,
    name: 'Home & Lifestyle',
  },
  {
    Icon: PillIcon,
    name: 'Medicine',
  },
  {
    Icon: GamepadIcon,
    name: 'Sports & Outdoor',
  },
  {
    Icon: BabyIcon,
    name: "Baby's & Toys",
  },
  {
    Icon: AppleIcon,
    name: 'Groceries & Pets',
  },
  {
    Icon: PawIcon,
    name: 'Pets',
  },
  {
    Icon: HeadphoneIcon,
    name: 'Health & Beauty',
  },
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
