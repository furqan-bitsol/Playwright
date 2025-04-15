'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart, Minus, Plus } from 'lucide-react';
import { StarIcon } from '@/components/icons';
import { cn } from '@/lib/utils'; // Utility for conditional classNames
import { Product } from '@/types/products'; // Import the Product type
import { addToCart } from '@/store/cartSlice'; // Import the Redux action

interface ProductInfoProps {
  product: Product; // Define the prop type
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const dispatch = useDispatch(); // Redux dispatch
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0].size : null
  );

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes && product.sizes.length > 0) {
      alert('Please select a size before adding to the cart.');
      return;
    }

    const cartItem = {
      _id: product.id, // Use product ID as the unique identifier
      title: product.title,
      price: product.price,
      quantity,
      subtotal: product.price * quantity,
      image: product.image,
      size: selectedSize ?? undefined, // Ensure size is string or undefined
    };

    dispatch(addToCart(cartItem)); // Dispatch the action to add the item to the cart
    alert('Item added to cart successfully!');
  };

  return (
    <div className='ml-5 w-[36%] max-md:ml-0 max-md:w-full'>
      <Card className='flex flex-col items-start w-full max-md:mt-10 p-6'>
        {/* Product Title */}
        <h2 className='text-2xl font-semibold tracking-wider leading-none text-black'>
          {product.title}
        </h2>

        {/* Product Rating and Stock Status */}
        <div className='flex gap-4 items-start mt-4 text-sm'>
          <div className='flex gap-2 items-start text-black'>
            {/* Rating using StarIcon */}
            <div className='flex'>
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={cn('w-4 h-4', {
                    'text-yellow-400': index < product.rating,
                    'text-gray-300': index >= product.rating,
                  })}
                />
              ))}
            </div>
            <span className='opacity-50'>({product.reviewCount} Reviews)</span>
          </div>
          <div className='flex gap-4 items-center text-green-500'>
            <Separator orientation='vertical' className='h-4' />
            <span className='self-stretch my-auto opacity-60'>
              {product.stockStatus}
            </span>
          </div>
        </div>

        {/* Product Price */}
        <div className='mt-4 text-2xl tracking-wider leading-none text-black'>
          ${product.price.toFixed(2)}
        </div>
        {product.originalPrice && (
          <div className='text-sm text-gray-500 line-through'>
            ${product.originalPrice.toFixed(2)}
          </div>
        )}

        {/* Product Description */}
        <p className='mt-6 text-sm leading-5 text-black'>
          {product.description}
        </p>

        <Separator className='my-6' />

        {/* Product Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className='flex gap-6 items-start'>
            <span className='text-xl tracking-wide leading-none text-black'>
              Colours:
            </span>
            <div className='flex gap-2'>
              {product.colors.map((color) => (
                <Button
                  key={color}
                  variant='outline'
                  className='w-5 h-5 p-0 rounded-full'
                  style={{ backgroundColor: color }} // Use inline styles for dynamic colors
                  aria-label={`Select ${color} color`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Product Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className='flex gap-6 items-center mt-6 whitespace-nowrap'>
            <span className='text-xl tracking-wide leading-none text-black'>
              Size:
            </span>
            <div className='flex gap-4 flex-wrap'>
              {product.sizes.map((size) => (
                <Button
                  key={size.size}
                  variant={size.size === selectedSize ? 'default' : 'outline'}
                  className={`w-8 h-8 p-0 ${
                    size.size === selectedSize
                      ? 'bg-red-500 hover:bg-red-600'
                      : ''
                  }`}
                  onClick={() => setSelectedSize(size.size)} // Update selected size on click
                  aria-label={`Select size ${size.size}`}
                >
                  {size.size}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity and Actions */}
        <div className='flex gap-4 self-stretch mt-6 w-full'>
          <div className='flex items-center gap-2'>
            <Button
              variant='outline'
              size='icon'
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label='Decrease quantity'
            >
              <Minus className='h-4 w-4' />
            </Button>
            <span className='w-20 text-center'>{quantity}</span>
            <Button
              variant='outline'
              size='icon'
              onClick={() => setQuantity(quantity + 1)}
              aria-label='Increase quantity'
            >
              <Plus className='h-4 w-4' />
            </Button>
          </div>
          <Button
            className='bg-red-500 hover:bg-red-600'
            onClick={handleAddToCart} // Add item to cart on click
            aria-label='Add item to cart'
          >
            Buy Now
          </Button>
          <Button variant='outline' size='icon'>
            <Heart className='h-4 w-4' />
          </Button>
        </div>

        {/* Delivery and Return Information */}
        <Card className='mt-10 w-full p-6'>
          <div className='flex gap-4 items-center'>
            <div>
              <h3 className='text-base font-medium'>Free Delivery</h3>
              <Button
                variant='link'
                className='h-auto p-0 text-xs leading-5 w-full overflow-hidden text-ellipsis text-wrap'
              >
                Enter your postal code for Delivery Availability
              </Button>
            </div>
          </div>
          <Separator className='my-4' />
          <div className='flex gap-4 items-center'>
            <div>
              <h3 className='text-base font-medium'>Return Delivery</h3>
              <p className='text-xs leading-5'>
                Free 30 Days Delivery Returns.{' '}
                <Button variant='link' className='h-auto p-0 text-xs'>
                  Details
                </Button>
              </p>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};
