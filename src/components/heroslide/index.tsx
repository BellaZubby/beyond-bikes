import React, { useEffect, useState } from 'react'
import image1 from '@/assets/hero-image.png'
import image2 from '@/assets/heroimg2.jpeg'
import image3 from '@/assets/image3.webp'
import './heroslide.css'
import { heroslideType } from '@/shared/types'
import ActionBtn from '@/shared/ActionBtn'

// define for carousel
const imageSlide: Array<heroslideType> = [
    {
        bgImg: image1,
    },
    {
        bgImg: image2,
    },
    {
        bgImg: image3,
    },
];

const Heroslide = () => {
    
    const[currentState, setCurrentState] =useState(0)

     useEffect(()=>{
         const timer = setTimeout(()=>{
             if(currentState===2) {
                 setCurrentState(0)
            }else {
                 setCurrentState(currentState+1)
             }

         }, 3000)
        
         return ()=> clearTimeout(timer)
     }, [currentState])

    const bgImageStyle = {
        backgroundImage:`url(${imageSlide[currentState].bgImg})`,
        backgroundPosition:'center',
        backgroundSize: 'cover',
    }
    const moveDot = (index: React.SetStateAction<number>) => {
        setCurrentState(index)
    }
 return (
    <>
            <div style={bgImageStyle} className='hero border-none h-[490px] w-full relative text-white mt-16 md:mt-28'>
                {/* others */}
                <div className='behind-hero w-full h-[490px] bg-secondary-300'>
                    <div className='py-28 w-[80%] md:w-[50%] pl-9 md:pl-32'>
                        <h1 className=' text-[28px] md:text-[55px] font-bold title'>NEWBIES FROM </h1>
                        <h1 className='text-[28px] md:text-[55px] font-bold title'>TREK & SPECIALIZED</h1>
                        <p className='mb-5 text-[10px] md:text-[12px] font-light md:w-[280px] paragraph'>Looking for a bicycle that's custom made for your needs, hi-tech, and long-lasting?</p>
                        <ActionBtn>VIEW THE RANGE</ActionBtn>
                    
                            <div className='absolute 2xs:left-28 flex items-center justify-center md:flex-col md:left-[1100px] md:bottom-[250px] sm:left-72'>
                            {
                                imageSlide.map((_item, index) => (
                                <span key={index} onClick={() => {moveDot(index)}} className={currentState === index ? 'current mt-16 w-5 h-5 text-[40px] ml-6 cursor-pointer md:w-[20px] md:h-[20px] md:mt-5': 'non-current mt-16 w-[10px] h-[10px] text-[40px] ml-6 cursor-pointer md:w-[15px] md:h-[15px] md:mt-5' }></span>
                                ))
                            }
                            </div>
                    </div>
                </div>
            </div>

    </>
  )
}   
export default Heroslide
