import ActionBtn from '@/shared/ActionBtn'
import "./hero.css";
import React from 'react'

// import heroImage from "@/assets/hero-image.png";

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section>
        <div className='main bg-[url("@/assets/hero-image.png")] bg-center bg-cover h-[450px] w-full relative text-white mt-16 md:mt-0'>
            <div className=' behind-main w-full h-[450px] bg-secondary-300'>
                <div className='py-28 pl-10 w-[80%] md:w-[50%]'>
                    <h1 className=' text-[28px] md:text-[55px] font-bold'>NEWBIES FROM </h1>
                    <h1 className='text-[28px] md:text-[55px] font-bold'>TREK & SPECIALIZED</h1>
                    <p className='mb-5 text-[10px] md:text-[12px] font-light'>Looking for a bicycle that's custom made for your needs, hi-tech, and long-lasting?</p>
                    <ActionBtn>VIEW THE RANGE</ActionBtn>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection;