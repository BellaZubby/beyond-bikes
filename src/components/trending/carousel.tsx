import React from 'react';
import Slider from 'react-slick';
import "./slick.css";
import './Prev-Next.css'
import bgImg2 from "@/assets/bike-helmet.png"
import bgImg3 from "@/assets/city-bike.png"
import ActionBtn from '@/shared/ActionBtn';
import { onClickType } from '@/shared/types';

// leftarrow
const PrevArrow: React.FC<onClickType> = ({ onClick }) => {
    return (
        <div
            className="slick-arrow slick-Prev prevarrow"
            onClick={onClick}>
        </div>);
};

//  for nextArrow
const NextArrow: React.FC<onClickType> = ({ onClick }) => {
    return (<div
        className="slick-arrow slick-Next nextarrow"
        onClick={onClick}></div>);
};

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    };

    return (
        <div>
            <Slider {...settings} className='md:hidden sm:block mt-6'>
                {/* FIRST */}
                <div className='w-[350px] bg-[url("@/assets/mountain-bike.png")] bg-cover relative text-white h-[350px]'>
                    <div className='h-[350px] bg-gradient-to-l from-secondary-300 to-gray-200'>
                        <div className='py-28 pl-10 w-[80%] md:w-[50%]'>
                            <h1 className='mb-6 text-3xl font-bold'>MOUNTAIN BIKES</h1>
                            <ActionBtn>SHOP NOW</ActionBtn>
                        </div>
                    </div>
                </div>
                {/* SECOND */}
                <div className='bg-[url("@/assets/bike-helmet.png")] bg-cover relative text-white h-[350px]'
                    style={{ backgroundImage: `url(${bgImg2})` }}>
                    <div className='h-[350px] bg-gradient-to-l from-secondary-300 to-gray-200'>
                        <div className='py-28 pl-10 w-[80%] md:w-[50%]'>
                            <h1 className='mb-6 text-3xl font-bold'>BIKE HELMET</h1>
                            <ActionBtn>SHOP NOW</ActionBtn>
                        </div>
                    </div>
                </div>
                {/* THIRD */}
                <div className=' bg-[url("@/assets/city-bike.png")] bg-cover relative text-white h-[350px]'
                    style={{ backgroundImage: `url(${bgImg3})` }}>
                    <div className='h-[350px] bg-gradient-to-l from-secondary-300 to-gray-200'>
                        <div className='py-28 pl-10 w-[80%] md:w-[50%]'>
                            <h1 className='mb-6 text-3xl font-bold'>CITY BICYCLES</h1>
                            <ActionBtn>SHOP NOW</ActionBtn>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel