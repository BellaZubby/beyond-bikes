import useMediaQuery from "@/Hooks/useMediaQuery";
import logo from "@/assets/bblogo.png";


type Props = {}

const Navbar = (props: Props) => {
    const flexBetween ="flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <nav>
        {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full py-5 bg-white`}>
                <div className={`${flexBetween} w-5/6 mx-auto`}>
                {/* logo */}
                <div className="w-full">
                    <img src= {logo} alt="desktop-logo" className="w-38"/>
                </div>
                {/* menu items */}
                    <div className={`${flexBetween} gap-6 text-[10px] w-full`}>
                        <a href="" className=" hover:text-primary-100">BIKES</a>
                        <a href="" className=" hover:text-primary-100">CLOTHING</a>
                        <a href="" className=" hover:text-primary-100">HELMETS</a>
                        <a href="" className=" hover:text-primary-100">ACCESSORIES</a>
                        <a href="" className=" hover:text-primary-100">COMPONENTS</a>
                        <a href="" className=" hover:text-primary-100">SALE</a>
                        <a href="" className=" hover:text-primary-100">BRANDS</a>
                        <a href="" className=" hover:text-primary-100">SCOOTERS</a>
                        <a href="" className=" hover:text-primary-100">CYCLE SCHEMES</a>
                        <a href="" className=" hover:text-primary-100">SERVICES</a>
                    </div>

                </div>
        </div>) : ("")
        }
    </nav>
  )
}

export default Navbar