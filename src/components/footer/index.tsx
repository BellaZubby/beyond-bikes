import logo from "@/assets/whiteLogo.png";
import facebook from "@/assets/footerFacebook.svg"
import twitter from "@/assets/footerTwitter.svg"
import instagram from "@/assets/footerInstagram.svg"
import gmail from "@/assets/footerGoogle.svg"
import youtube from "@/assets/footerYoutube.svg"
import pinterest from "@/assets/footerPinterest.svg"
import payment from "@/assets/payment_methods 1.png"
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/16/solid';
import useMediaQuery from "@/Hooks/useMediaQuery";
import Mobile from "./mobile";





const Footer = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:768px)")
  return (
    <section>

        {isAboveMediumScreens ? (
        <div className='bg-black w-full pt-9'>
            <div className='w-5/6 mx-auto flex text-gray-500 gap-16'>
                {/* section one */}
                <div className="basis-1/6 text-xs">
                    <img src= {logo} alt="desktop-logo" className="w-38 p-2 rounded mb-12"/>
                    <span className='flex items-center justify-center gap-1 mb-5 font-Roboto font-semibold'><MapPinIcon className='w-6'/> Chromiun Co, 25 Silicon Road, London D04 89GR</span>
                    <div className='flex items-center mb-6 gap-1'>
                       <div><PhoneIcon className='w-4'/></div>
                       <div><p className="text-white font-Roboto font-semibold">+27 34 66 2455-198</p>
                        <p className="font-Roboto font-semibold">Mon - Fri 8:00 to 19:00</p>
                        </div>
                    </div>
                    <span className='flex items-center gap-1 font-Roboto font-semibold'><EnvelopeIcon className='w-4'/>example@example.com</span>
                </div>
                {/* section two */}
                <div className="basis-1/6 mt-12">
                    <h1 className="text-sm font-bold mb-4 text-white font-robotoCondensed">COMPANY</h1>
                    <p className="text-xs font-thin mb-2 font-Roboto">About Us</p>
                    <p className="text-xs font-thin mb-2 font-Roboto">Store</p>
                    <p className="text-xs font-thin mb-2 font-Roboto">Shop</p>
                    <p className="text-xs font-thin mb-2 font-Roboto">Contact</p>
                    <p className="text-xs font-thin font-Roboto">FAQ</p>
                </div>
                {/* section three */}
                <div className="basis-1/4 mt-12">
                    <h1 className="text-sm font-bold mb-4 text-white font-robotoCondensed">THE PURCHASE</h1>
                    <p className="text-xs font-thin mb-2 font-Roboto">My Cart</p>
                    <p className="text-xs font-thin mb-2 font-Roboto">My Account</p>
                    <p className="text-xs font-thin mb-2 font-Roboto">Login/Register</p>
                    <p className="text-xs font-thin mb-2 font-Roboto">Terms & Conditions</p>
                    <p className="text-xs font-thin font-Roboto">Privacy Policy</p>
                </div>
                {/* section four */}
                <div className="basis-1/6 mt-12">
                    <h1 className="text-sm font-bold mb-4 text-white font-robotoCondensed">JOIN US</h1>
                    <div className="flex items-center justify-center gap-4 w-6">
                        <img src={facebook} alt='facebook'/>
                        <img src={twitter} alt='twitter'/>
                        <img src={instagram} alt='instagram'/>
                        <img src={gmail} alt='gmail'/>
                        <img src={youtube} alt='youtube'/>
                        <img src={pinterest} alt='pinterest'/>
                    </div>
                </div>
            </div>
                <hr className="w-5/6 mx-auto mt-12 line"></hr>
                {/* copyright */}
                <div className="text-gray-500 text-xs flex items-center w-5/6 mx-auto justify-between py-6">
                    <p className="font-Roboto">© 2023 Powered by <a href='https://push.bike/' target="_blank" className='text-primary-100'>PushRetail</a>. All Rights Reserved</p>
                    <img src={payment} alt='payment-method'/>
                </div>
        </div>
        ) : (
            <Mobile/>
        )}
    </section>
  )
}

export default Footer