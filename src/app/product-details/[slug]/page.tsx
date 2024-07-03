'use client'
import React, { useState } from 'react'
import CarouselPlugin from './Caresoul';
import ProductInfo from './ProductInfo';
import { Button } from '@/components/ui/button';
import ReviewForm from './ReviewForm';

const page = () => {
  const [isReviewAdded, setIsReviewAdded] = useState(false);
  return (
    <main className="px-24 py-2">
      <div className='flex justify-start gap-16'>
        <div className='flex-2'>
          <CarouselPlugin />
        </div>
        <div className='flex-2'>
          <ProductInfo />
        </div>
      </div>
      <div className='mt-4 border p-8'>
        <h2>Customer Reviews</h2>
        <div className='flex justify-between items-center'>
          <p>Be the first to write a review</p>
          <Button onClick={() => setIsReviewAdded(!isReviewAdded)}>{isReviewAdded ? "Cancle Review" : "Add Review"}</Button>

        </div>
        {
          isReviewAdded && <ReviewForm />
        }
      </div>
    </main>
  )
}

export default page;