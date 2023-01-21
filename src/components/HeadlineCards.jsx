import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* cards */}
      <div className='rounded-xl relative '>
        {/* overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 p-4'>Sun's Out, Bogo's Out</p>
          <p className='px-2'>Through 8/26</p>
            <button className='border-orange-500 bg-orange-500 font-bold text-black mx-6 absolute bottom-4'>Order Now!</button>
          </div>
          <img className='max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl' alt='/' src='https://media.istockphoto.com/id/1206323252/photo/two-big-hamburgers-on-white.jpg?s=612x612&w=0&k=20&c=V8pA1lGECoAT3KtqItlSpZCZrUnD6uU_rWyvZ5ekWOY='/>
      </div>
      {/* cards */}
      <div className='rounded-xl relative '>
        {/* overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 p-4'>New Restaurant's</p>
          <p className='px-2'>Added Daily</p>
            <button className='border-orange-500 bg-orange-500 font-bold text-black mx-6 absolute bottom-4'>Order Now!</button>
          </div>
          <img className='max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl' alt='/' src='https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
      </div>
      {/* cards */}
      <div className='rounded-xl relative '>
        {/* overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 p-4'>We Deliver Desserts Too</p>
          <p className='px-2'>Tasty Treats</p>
            <button className='border-orange-500 bg-orange-500 font-bold text-black mx-6 absolute bottom-4'>Order Now!</button>
          </div>
          <img className='max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl' alt='/' src='https://images.pexels.com/photos/7190365/pexels-photo-7190365.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
      </div>
    </div>
  )
}

export default HeadlineCards
