import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import React from 'react'

const ProductInfo = () => {
    return (
        <div>
            <h1 className='text-4xl text-[#1C1D1D]'>Title</h1>
            <p className='text-lg'><span className='text-[#1C1D1D] line-through mr-4'>Price</span> <span className='text-[#D70101]'>Discounted Price</span></p>
            <p className='text-xs text-[#1C1D1D] mb-8 mt-4'>Tax included. Shipping calculated at checkout.</p>
            <hr />
            <h2>SIZE</h2>
            <Toggle aria-label="Toggle italic">
                S
            </Toggle>
            <p>Customer satisfaction guarantee</p>
            <p>Notice: All orders placed after 10th June will be dispatched and delivered after Eid.</p>
            <p>In stock, ready to ship</p>
            <Button>Buy it now</Button>

        </div>
    )
}

export default ProductInfo