import React from 'react'




const Hero = () => {
  return (
    <div className='max-w-[1640x] mx-auto p-4 '>
        <div className='max-h-[500px] relative'>
             {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>The <span  className='font-bold text-orange-400 ' >Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Food <span className='font-bold text-orange-400' >Delivered</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ' alt='/'   />


        </div>
    </div>
  )
}

export default Hero
