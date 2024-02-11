import facebook from "@/assets/footerFacebook.svg"
import twitter from "@/assets/footerTwitter.svg"
import instagram from "@/assets/footerInstagram.svg"
import gmail from "@/assets/footerGoogle.svg"
import youtube from "@/assets/footerYoutube.svg"
import pinterest from "@/assets/footerPinterest.svg"



const Socials = () => {
  return (
    <div>
        <div className='bg-black text-gray-500 w-full'>
            {/* company dropdown */}
            <div className='w-5/6 mx-auto pt-6'>
                <div className='flex flex-col'>
                    <h1 className='text-sm text-white font-robotoCondensed'>JOIN US</h1>
                    {/* SOCIAL ICONS */}
                    <div className="flex mt-6 gap-4 w-6">
                        <img src={facebook} alt='facebook'/>
                        <img src={twitter} alt='twitter'/>
                        <img src={instagram} alt='instagram'/>
                        <img src={gmail} alt='gmail'/>
                        <img src={youtube} alt='youtube'/>
                        <img src={pinterest} alt='pinterest'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Socials