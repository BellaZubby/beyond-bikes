import React from 'react'

type Props = {
  image: string;
  name: string;
  price: number;
  index: number

}

const Bicycle= ({image, name, price, index} : Props) => {
  return (
    <div>
      <div className='mt-12 flex flex-col items-center justify-center border ml-3 h-[350px]'>
          <img src={image} alt='bicycle' className='bg-slate-100 w-full p-6 h-[210px]'/>
          <div className='my-3 flex flex-col items-center justify-center pb-3'>
            <h4 className='text-slate-400 text-sm'>SPECIALIZED</h4>
            <p className='font-bold mt-2'>{name}</p>
            <h4 className='text-[10px] text-primary-300 mt-2'>IN STOCK</h4>
            <p className='text-sm text-secondary-200 mt-2'>£{price}</p> 
          </div>
        </div>
      </div>
  )
}

export default Bicycle;