import logo from "@/assets/bblogo.png";
import facebook from "@/assets/facebook.svg"
import twitter from "@/assets/twitter.svg"
import instagram from "@/assets/instagram.svg"
import gmail from "@/assets/gmail.svg"
import youtube from "@/assets/youtube.svg"
import pinterest from "@/assets/pinterest.svg"
import payment from "@/assets/payment_methods 1.png"
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/16/solid';
import useMediaQuery from "@/Hooks/useMediaQuery";
import Mobile from "./mobile";
import "./footer.css"





const Footer = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:768px)")
  return (
    <section>

        {isAboveMediumScreens ? (
        <div className='bg-black w-full pt-9'>
            <div className='w-5/6 mx-auto flex text-gray-500 gap-16'>
                {/* section one */}
                <div className="basis-1/6 text-xs">
                    <img src= {logo} alt="desktop-logo" className="w-38 bg-gray-600 p-2 rounded mb-12"/>
                    <span className='flex items-center justify-center gap-1 mb-5 footer-second font-semibold'><MapPinIcon className='w-6'/> Chromiun Co, 25 Silicon Road, London D04 89GR</span>
                    <div className='flex items-center mb-6 gap-1'>
                       <div><PhoneIcon className='w-4'/></div>
                       <div><p className="text-white footer-second font-semibold">+27 34 66 2455-198</p>
                        <p className="footer-second font-semibold">Mon - Fri 8:00 to 19:00</p>
                        </div>
                    </div>
                    <span className='flex items-center gap-1 footer-second font-semibold'><EnvelopeIcon className='w-4'/>example@example.com</span>
                </div>
                {/* section two */}
                <div className="basis-1/6 mt-12">
                    <h1 className="text-sm font-bold mb-4 text-white footer-first">COMPANY</h1>
                    <p className="text-xs font-thin mb-2 footer-second">About Us</p>
                    <p className="text-xs font-thin mb-2 footer-second">Store</p>
                    <p className="text-xs font-thin mb-2 footer-second">Shop</p>
                    <p className="text-xs font-thin mb-2 footer-second">Contact</p>
                    <p className="text-xs font-thin footer-second">FAQ</p>
                </div>
                {/* section three */}
                <div className="basis-1/4 mt-12">
                    <h1 className="text-sm font-bold mb-4 text-white footer-first">THE PURCHASE</h1>
                    <p className="text-xs font-thin mb-2 footer-second">My Cart</p>
                    <p className="text-xs font-thin mb-2 footer-second">My Account</p>
                    <p className="text-xs font-thin mb-2 footer-second">Login/Register</p>
                    <p className="text-xs font-thin mb-2 footer-second">Terms & Conditions</p>
                    <p className="text-xs font-thin footer-second">Privacy Policy</p>
                </div>
                {/* section four */}
                <div className="basis-1/6 mt-12">
                    <h1 className="text-sm font-bold mb-4 text-white footer-first">JOIN US</h1>
                    <div className="flex items-center justify-center gap-4 w-3">
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
                    <p className="footer-second">© 2023 Powered by <a href='https://push.bike/' target="_blank" className='text-primary-100'>PushRetail</a>. All Rights Reserved</p>
                    <img src={payment} alt='payment-method'/>
                </div>
        </div>) : (
            <Mobile/>
        )}
    </section>
  )
}

export default Footer