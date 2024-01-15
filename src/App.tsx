import HeroSection from "./components/hero";
import Trending from "./components/trending";
import Product from "./components/products";
import Sponsors from "./components/sponsors";
import Riding from "./components/riding";
import Delivery from "./components/delivery";
import Discount from "./components/discount";
import Bar from "./components/Bar";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {

  return (
    <>
     <div className='app'>
      <Bar/>
      <HeroSection/>
      <Trending/>
      <Product/>
      <Sponsors/>
      <Riding/>
      <Delivery/>
      <Discount/>
      <Contact/>
      <Footer/>
     </div>
    </>
  )
}

export default App
