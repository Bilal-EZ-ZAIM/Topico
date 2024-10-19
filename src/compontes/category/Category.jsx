import React from 'react'

const Category = () => {
  return (
    <div className='bg-white w-full md:w-1/3'>
        <ul>
            <li className='bg-white border-b p-[6px] text-xs cursor-pointer  font-bold'><i className="bi bi-list font-bold text-sm"></i> SHOP BY DEPARTMENT</li>
            <li className='nav-category'>All category</li>
            <li className='nav-category'>Best Seller Products</li>
            <li className='nav-category'>New Arrivals</li>
            <li className='nav-category'>Top 10 Differs</li>
            <li className='nav-category'>Phones & Tablets</li>
            <li className='nav-category'>Electornic & Digital</li>
            <li className='nav-category'>Fashion & Clothings</li>
            <li className='nav-category'>Jewelry & Watches</li>
            <li className='nav-category'>TV & Audio</li>
        </ul>
    </div>
  )
}

export default Category