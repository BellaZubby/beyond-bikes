import React from 'react'
import img1 from '@/assets/brushes.png'
import ActionBtn from '@/shared/ActionBtn'


type Props = {}

const Discount = (props: Props) => {
  return (
    <section>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-16 mt-16 w-5/6 mx-auto'>
            {/* left */}
            <div className='px-12 py-4 md:px-3 md:py-1 flex items-center justify-center bg-gradient-to-l from-secondary-100 to-secondary-200 md:w-[33%] w-full'>
                <div>
                    <h1 className=' text-white mb-2'>MAKE HER SHINE</h1>
                    <p className='text-xs text-white mb-6'>Complete Clean Kit</p>
                    <button  className='bg-black px-2 py-2 text-white text-sm'>SHOP NOW</button>
                </div>
                <img src={img1} alt='photo'/>
            </div>
            {/* right */}
            <div className=' flex flex-col items-center justify-center bg-gradient-to-l from-secondary-300 to-gray-200 md:w-[33%] w-full py-9'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-xs'>Get up to</p>
                    <h1 className='text-white mb-6'>30% DISCOUNT</h1>
                    <ActionBtn>VIEW DETAILS</ActionBtn>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discount