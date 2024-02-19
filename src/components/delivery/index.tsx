import icon1 from '@/assets/truck-fast.svg'
import icon2 from '@/assets/returns-2.svg'
import icon3 from '@/assets/empty-wallet.svg'
import icon4 from '@/assets/box.svg'
import { deliveryType } from '@/shared/types'

type Props = {
    icon: string;
    title: string;
    subtitle: string;
}
const items: Array<deliveryType> = [
    {
        icon: icon1,
        title: 'FREE DELIVERY',
        subtitle: 'Worldwide from $75'
    },
    {
        icon: icon2,
        title: 'EASY RETURNS',
        subtitle: '365 days for free returns'
    },
    {
        icon: icon3,
        title: 'COMFORT PAYMENTS',
        subtitle: 'Credit Cards Available'
    },
    {
        icon: icon4,
        title: 'FREE GIFTS',
        subtitle: 'Get gifts and discounts'
    },

]
const Delivery = ({ }: Props) => {
    return (
        <section>
            <div className='flex flex-col md:flex-row items-center justify-center my-16'>
                {items.map((item: deliveryType, i) => (
                    <div key={i} className='flex flex-col md:flex-row items-center justify-center gap-16 md:mt-9'>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
                            <img src={item.icon} className='text-secondary-100 w-9' />
                            <div className='flex flex-col items-center justify-center sm:block'>
                                <h1 className='font-Roboto text-gray-400 text-sm font-bold'>{item.title}</h1>
                                <p className='text-gray-500 text-xs font-robotoCondensed'>{item.subtitle}</p>
                            </div>
                        </div>
                        <div />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Delivery