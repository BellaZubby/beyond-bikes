import TopBar from "@/components/home/topbar";
import Navbar from "./components/home/topbar/menu";
import HeroSection from "./components/hero";
import Trending from "./components/trending";
import Product from "./components/products";
import Sponsors from "./components/sponsors";
import Riding from "./components/riding";
import Delivery from "./components/delivery";
import Discount from "./components/discount";
// import Mobile from "./components/trending/mobile";


function App() {

  return (
    <>
     <div className='app'>
      <TopBar/>
      <Navbar/>
      <HeroSection/>
      <Trending/>
      {/* <Mobile/> */}
      <Product/>
      <Sponsors/>
      <Riding/>
      <Delivery/>
      <Discount/>
     </div>
    </>
  )
}

export default App
