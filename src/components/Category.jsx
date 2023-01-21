import React from 'react'
import {categories} from '../data/data'

const Category = () => {

    console.log(categories)
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      {/* category */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((category, index) => (
             <div key={index} className='bg-gray-100 flex px-4 rounded-lg justify-between items-center'> 
                <h2 className='font-bold sm:text-xl'>{category.name}</h2>
                <img src={category.image} alt={category.name}
                    className='w-20'                
                />
             </div>   
        ) 
        )}
      </div>
    </div>
  )
}

export default Category
