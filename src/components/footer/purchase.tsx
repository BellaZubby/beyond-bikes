import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import useMediaQuery from '@/Hooks/useMediaQuery'

type Props = {}

const Purchase = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <div>
        <div className='bg-black text-gray-500 w-full'>
            {/* company dropdown */}
            <div className='w-5/6 mx-auto pt-6'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-sm text-white footer-first'>THE PURCHASE</h1>
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
                    <p className="text-xs font-thin mb-2 mt-4 footer-second">My Cart</p>
                    <p className="text-xs font-thin mb-2 footer-second">My Account</p>
                    <p className="text-xs font-thin mb-2 footer-second">Login/Register</p>
                    <p className="text-xs font-thin mb-2 footer-second">Terms & Conditions</p>
                    <p className="text-xs font-thin footer-second">Privacy Policy</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default Purchase