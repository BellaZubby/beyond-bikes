import bicycleIcon from '@/assets/bicycle-icon.svg'
import './product.css'
import Bicycle from './Bicycle'
import { BicycleType } from '@/shared/types'
import img1 from '@/assets/stump-jumper.png'
import img2 from '@/assets/roubaix-comp.png'
import ActionBtn from '@/shared/ActionBtn'
import ProductCarousel from './productCarousel'
import NewBadge from './NewBadge'
import SalesBadge from './SalesBadge'

const items: Array<BicycleType> = [
    {
        image: img1,
        name: 'Stumpjumper Alloy',
        price: 1899.00,
        carousel: <ProductCarousel bgColor={''} />,
        tag: <NewBadge />,
    },
    {
        image: img2,
        name: 'Roubaix Comp-SRAM Rival',
        price: 5000.00,
        carousel: <ProductCarousel bgColor={''} />,
        tag: <NewBadge />
    },
    {
        image: img2,
        name: 'Roubaix Comp-SRAM Rival',
        price: 5000.00,
        saleTag: <SalesBadge />
    },
    {
        image: img1,
        name: 'Stumpjumper Alloy',
        price: 1899.00,
        tag: <NewBadge />
    },
    {
        image: img2,
        name: 'Roubaix Comp-SRAM Rival',
        price: 5000.00,
        carousel: <ProductCarousel bgColor={''} />
    },
    {
        image: img2,
        name: 'Roubaix Comp-SRAM Rival',
        price: 5000.00,
        saleTag: <SalesBadge />
    },


];

const Product = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-between mt-12">
                <div>
                    <img src={bicycleIcon} alt='bicycleIcon' className="w-6 mb-3" />
                </div>
                <div>
                    <h1 className="font-bold text-xl font-robotoCondensed">OUR PRODUCTS</h1>
                </div>
                <div className="w-8 h-[0.5px] bg-gradient-to-r from-secondary-100 to-secondary-200"></div>
            </div>
            {/* next section */}
            <div className='flex items-center justify-center gap-6 text-[16px] mt-6 p-5 sm:gap-9'>
                <button className='w-28 font-semibold border-none active:bg-secondary-100 hover:bg-secondary-100 p-2 hover:text-white'>
                    Just Added
                </button>
                <button className='w-28 font-semibold border-none hover:bg-secondary-100 p-2 hover:text-white active:bg-secondary-100'>
                    Popular
                </button>
                <button className=' w-28 font-semibold border-none hover:bg-secondary-100 p-2 hover:text-white active:bg-secondary-100'>
                    Special
                </button>
            </div>
            {/* bicycle gallery */}
            <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
                {items.map((item: BicycleType, i) => (
                    <Bicycle
                        key={i}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        carousel={item.carousel}
                        tag={item.tag}
                        saleTag={item.saleTag}
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