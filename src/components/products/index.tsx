import React from 'react'
import bicycleIcon from '@/assets/bicycle-icon.svg'
import './product.css'
import Bicycle from './Bicycle'
import { BicycleType } from '@/shared/types'
import img1 from '@/assets/stump-jumper.png'
import img2 from '@/assets/roubaix-comp.png'
import ActionBtn from '@/shared/ActionBtn'


const items: Array<BicycleType> = [
    {
        image: img1,
        name: 'Stumpjumper Alloy',
        price: 1899.00,
    },
    {
        image: img2,
        name: 'Roubaix Comp-SRAM Rival',
        price: 5000.00,

    },
    {
        image: img2,
        name: 'Roubaix Comp-SRAM Rival',
        price: 5000.00,
    },
    {
        image: img1,
        name: 'Stumpjumper Alloy',
        price: 1899.00,
    },
    {
        image: img2,
        name: 'Roubaix Comp-SRAM Rival',
        price: 5000.00,
    },
    {
        image: img2,
        name: 'Roubaix Comp-SRAM Rival',
        price: 5000.00,
    },

    
];

type Props = {}

const Product = (props: Props) => {
  return (
    <div>
        <div className="flex flex-col items-center justify-between mt-12">
            <div>
                <img src={bicycleIcon} alt='bicycleIcon' className="w-6 mb-3"/>
            </div>
            <div>
                <h1 className="font-bold text-xl product">OUR PRODUCTS</h1>
            </div>
            <div className="w-8 h-[0.5px] bg-gradient-to-r from-secondary-100 to-secondary-200"></div>
        </div>
        {/* next section */}
        <div className='flex items-center justify-center gap-6 text-[16px] mt-6 main py-6 sm:gap-9'>
            <button className='active:bg-secondary-100 hover:bg-secondary-100 p-2 hover:text-white'>
                Just Added
            </button>
            <button className='hover:bg-secondary-100 p-2 hover:text-white active:bg-secondary-100'>
                Popular
            </button>
            <button className='hover:bg-secondary-100 p-2 hover:text-white active:bg-secondary-100'>
                Special
            </button>
        </div>
        {/* bicycle gallery */}
        <div className=" w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
            {items.map((item: BicycleType) => (
            <Bicycle
            image={item.image}
            name={item.name}
            price={item.price}
        />
       ))}
       </div> 
       <div className='text-center mt-5'>
       <ActionBtn>VIEW ALL PRODUCTS</ActionBtn>
       </div>
    </div>
  )
}

export default Product