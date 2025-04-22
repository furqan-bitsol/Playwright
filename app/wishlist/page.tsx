'use client';
import { ProductCard } from '@/components/home/ProductCard';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { PRODUCTS } from '@/mocks/products';
import { RootState } from '@/store/store';
import { useDispatch } from 'react-redux';
import { clearWishlist } from '@/store/wishlistSlice';
import { addToCart } from '@/store/cartSlice';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import React from 'react';
import { useSelector } from 'react-redux';

const WishList = () => {
  // const { user, loading } = useAuth();
  // const router = useRouter();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.push('/login'); // Redirect to login if not authenticated
  //   }
  // }, [user, loading, router]);

  // if (loading) {
  //   return <p>Loading...</p>; // Show a loading state while checking auth
  // }

  // if (!user) {
  //   return null; // Prevent rendering if user is not authenticated
  // }

  const handleMoveAllToBag = () => {
    wishlistItems.forEach((item) => {
      dispatch(
        addToCart({
          ...item,
          _id: item.id, // Assuming `id` in Product corresponds to `_id` in CartItem
          quantity: 1, // Default quantity
          subtotal: item.price, // Assuming `price` exists in Product
        })
      );
    });
    dispatch(clearWishlist());
  };

  return (
    <MainLayout>
      <section className='w-full space-y-[80px]'>
        <Slider
          cardWidth={270}
          gap={30}
          className='mt-16 pb-4 max-md:mt-10'
          aria-label='Best selling products slider'
          showArrows={false} // Disable navigation arrows
          title={`WishList (${wishlistItems.length})`}
          isWishlist={true}
          rightContent={
            <Button
              variant='outline'
              className='text-base text-black h-14'
              onClick={handleMoveAllToBag}
              disabled={wishlistItems.length === 0} // Disable if wishlist is empty
            >
              Move All To Bag
            </Button>
          }
        >
          {wishlistItems.length > 0 ? (
            wishlistItems.map((product, index) => (
              <ProductCard
                key={`wishlist-${product.title}`}
                {...product}
                testid='wishlist'
                index={index}
              />
            ))
          ) : (
            <p>Your wishlist is empty.</p>
          )}
        </Slider>
        <Slider
          cardWidth={270}
          gap={30}
          className='mt-16 pb-4 max-md:mt-10'
          aria-label='Best selling products slider'
          showArrows={false} // Disable navigation arrows
          subtitle='Just For You'
          isWishlist={true}
          rightContent={
            <Button variant='outline' className='text-base text-black h-14'>
              See All
            </Button>
          }
        >
          {PRODUCTS.map((product, index) => {
            if (!product.discount) return null; // Skip if not best selling
            return (
              <ProductCard
                key={`for-you-${product.title}`}
                {...product}
                testid='for-you'
                index={index}
              />
            );
          })}
        </Slider>
      </section>
    </MainLayout>
  );
};

export default WishList;
