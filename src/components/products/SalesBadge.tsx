import React from 'react'
import './product.css'

type Props = {}

const SalesBadge = (props: Props) => {
  return (
    <>
    <div className ='badge flex bg-[#111111] w-[130px] h-[24px] absolute top-0 left-0'>
        <div className='red'><span className='text-white font-bold'>SALE</span></div>
        <div className='black'><span>20% OFF</span></div>
    </div>
    </>
  )
}

export default SalesBadge