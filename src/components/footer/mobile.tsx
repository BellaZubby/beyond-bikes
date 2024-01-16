import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import payment from "@/assets/payment_methods 1.png"
import useMediaQuery from '@/Hooks/useMediaQuery'
import Purchase from './purchase'
import Product from './product'
import FooterContact from './footerContact'
import Socials from './socials'

const Mobile = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <div className='bg-black'>
        <div className='bg-black text-gray-500 w-full'>
            {/* company dropdown */}
            <div className='w-5/6 mx-auto pt-6'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-sm text-white footer-first'>COMPANY</h1>
                    <ChevronDownIcon 
                    className='w-4 font-thin cursor-pointer'
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    />
                </div>
            </div>
        </div>
                {/* For dropdown */}

                {!isAboveMediumScreens && isMenuToggled && (
            <div className='bg-black'>
                {/* menu items on mobile */}
                <div className= 'flex flex-col gap-2 text-sm text-gray-500 w-5/6 mx-auto'>
                             {/* menu list */}
                    <p className="text-xs font-thin mb-2 mt-4 footer-second">About Us</p>
                    <p className="text-xs font-thin mb-2 footer-second">Store</p>
                    <p className="text-xs font-thin mb-2 footer-second">Shop</p>
                    <p className="text-xs font-thin mb-2 footer-second">Contact</p>
                    <p className="text-xs font-thin footer-second">FAQ</p>
                </div>
            </div>
        )}
        {/* FOR PURCHASE */}
        <Purchase/>
        <Product/>
        <FooterContact/>
        <Socials/>
        <hr className="w-5/6 mx-auto mt-9"></hr>
        <img src={payment} alt='payment-method' className='mt-6 w-5/6 mx-auto'/>
        <p className='text-gray-500 text-[10px] w-5/6 mx-auto py-5 footer-second'>© 2023 Powered by <a href='https://push.bike/' target="_blank" className='text-primary-100'>PushRetail</a>. All Rights Reserved</p>
    </div>
  )
}

export default Mobile