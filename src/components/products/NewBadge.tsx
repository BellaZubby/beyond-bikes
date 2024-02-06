import React from 'react'
import './product.css'

type Props = {}

const NewBadge = (props: Props) => {
  return (
    <>
    <div className ='badge bg-[#EE6400] w-[50px] h-[24px] absolute top-0 left-0'>
        <span className='ml-[5px] text-white'>NEW</span>
    </div>
    </>
  )
}

export default NewBadge