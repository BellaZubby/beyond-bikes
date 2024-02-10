import {useState} from 'react'
import './product.css';
import image1 from '@/assets/brown.svg'
import image2 from '@/assets/blue.svg'
import image3 from '@/assets/indigo.svg'
import image4 from '@/assets/orange.svg'
import {productCarouselType } from '@/shared/types'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

type Props = {
    bgColor: string;
}
const datas: Array<productCarouselType> = [
    {
        bgColor: image1

    },
    {
        bgColor: image2

    },
    {
        bgColor: image3

    },
    {
        bgColor: image4

    },
]


const ProductCarousel = ({}:Props) => {

    const[currentState, setCurrentState] =useState(1)

    const goToPrev = () => {
        setCurrentState(currentState - 1)
    }

    const goToNext = () => {
        setCurrentState(currentState + 1)
    }

        
  return (
    <>
    <div className='flex items-center justify-center gap-1'>
        <span className='w-5 text-[#606060]'><ChevronLeftIcon key={currentState} onClick={()=> goToPrev()}/></span>
            {datas.map((data: productCarouselType, index) => (
        <div key={index}>
            <img 
            src={data.bgColor} 
            className={currentState === index + 1 ? "active" : "dot"}
            />
        </div>
       ))}
       <span className='w-5 text-[#606060]'><ChevronRightIcon key={currentState} onClick={()=> goToNext()}/></span>
    </div>
    </>
  )
}

export default ProductCarousel