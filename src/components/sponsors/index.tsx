import img1 from '@/assets/cannondale.png'
import img2 from '@/assets/specialized.png'
import img3 from '@/assets/giant.png'
import img4 from '@/assets/fuji.png'
import img5 from '@/assets/trek.png'
import img6 from '@/assets/cervelo.png'
import img7 from '@/assets/kona.png'
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/16/solid'



const Sponsors = () => {
  return (
    <section>
        <div className='w-5/6 mx-auto flex items-center justify-center gap-6 mt-16'>
            <a href='#'><ChevronLeftIcon className='w-6 text-slate-400 border rounded'/></a>
            <img src={img1} alt='image' className='w-24'/>
            <img src={img2} alt='image' className='w-24'/>
            <img src={img3} alt='image' className='w-24'/>
            <img src={img4} alt='image' className='w-24'/>
            <img src={img5} alt='image' className='w-24'/>
            <img src={img6} alt='image' className='w-24'/>
            <img src={img7} alt='image' className='w-24'/>
            <a href='#'><ChevronRightIcon className='w-6 text-slate-400 border rounded'/></a>
        </div>
    </section>
  )
}

export default Sponsors