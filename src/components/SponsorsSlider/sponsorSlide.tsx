import Slider from 'react-slick';
import img1 from '@/assets/cannondale.png'
import img2 from '@/assets/specialized.png'
import img3 from '@/assets/giant.png'
import img4 from '@/assets/fuji.png'
import img5 from '@/assets/trek.png'
import img6 from '@/assets/cervelo.png'
import img7 from '@/assets/kona.png'
import './sponsorSlickTheme.css'
import { sponsorLogoType } from '@/shared/types';
import './sponsorSlide.css'


type Props = {}
const sponsorLogo: Array<sponsorLogoType> = [
  {
    logo: img1
  },
  {
    logo: img2
  },
  {
    logo: img3
  },
  {
    logo: img4
  },
  {
    logo: img5
  },
  {
    logo: img6
  },
  {
    logo: img7
  },
  {
    logo: img3
  }
]

const SponsorSlide = ({}: Props) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    swipeToSlide: true,
    afterChange: function(index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <section className='w-full'>
    <div className='flex items-center justify-center mt-16'>
        <Slider {...settings} className='w-[700px]'>
             {sponsorLogo.map((item:sponsorLogoType, i)=> ( 
                 <img key={i} src={item.logo} alt='image'/>
             ))}
        </Slider>
    </div>
</section>
  )
}

export default SponsorSlide