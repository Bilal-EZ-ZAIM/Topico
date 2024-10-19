import React from 'react'
import Filter from '../compontes/filter/Filter'
import Products from '../compontes/products/Products'

const AllProducts = () => {
  return (
    <div className='container py-5 md:w-[900px] mx-auto  sm:px-0 px-2 '>
        <div className='flex  flex-col py-5 font-bold'>
            <h2 className='md:text-3xl sm:text-2xl text-xl mb-4 text-yellow-500 text-center'>Experience the Future of Technology with Our Topico </h2>
            <p className='sm:text-sm text-xs  text-gray-500 text-center'>Find ecerything you need to transform your home info a smart connected space. Our Topice store</p>
            <p className='sm:text-sm text-xs  text-gray-500 text-center'>offers a wide range of devices to fit your needs</p>
        </div>
        <div className='flex  gap-4   justify-between flex-wrap'>
            <Filter/>
            <Products />
        </div>

    </div>
  )
}

export default AllProducts