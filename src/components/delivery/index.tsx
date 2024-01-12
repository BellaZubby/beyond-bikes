import React from 'react'
import { TruckIcon, ArrowPathIcon, GiftIcon, CreditCardIcon} from '@heroicons/react/16/solid'

type Props = {}

const Delivery = (props: Props) => {
  return (
    <section>
        <div className='flex flex-col md:flex-row items-center justify-center gap-16 mt-16'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
                <TruckIcon className='text-secondary-100 w-9'/>
                <div className='flex flex-col items-center justify-center sm:block'>
                    <h1 className='text-gray-400 text-sm font-bold'>FREE DELIVERY</h1>
                    <p className='text-gray-500 text-xs'>Worldwide from $75</p>
                </div>
            </div>
            {/* second item */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
                <ArrowPathIcon className='text-secondary-100 w-9'/>
                <div className='flex flex-col items-center justify-center'>
                    <h1  className='text-gray-400 text-sm font-bold'>EASY RETURNS</h1>
                    <p  className='text-gray-500 text-xs'>365 days for free returns</p>
                </div>
            </div>
            {/* third item */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
                <CreditCardIcon className='text-secondary-100 w-9'/>
                <div className='flex flex-col items-center justify-center'>
                    <h1  className='text-gray-400 text-sm font-bold'>COMFORT PAYMENTS</h1>
                    <p  className='text-gray-500 text-xs'>Credit Cards Available</p>
                </div>
            </div>
            {/* fourth item */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
                <GiftIcon className='text-secondary-100 w-9'/>
                <div className='flex flex-col items-center justify-center'>
                    <h1  className='text-gray-400 text-sm font-bold'>FREE GIFTS</h1>
                    <p  className='text-gray-500 text-xs'>Get gifts and discounts</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Delivery