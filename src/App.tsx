import Trending from "./components/trending";
import Product from "./components/products";
import Delivery from "./components/delivery";
import Discount from "./components/discount";
import Bar from "./components/Bar";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Heroslide from "./components/heroslide";
import SponsorSlide from "./components/SponsorsSlider/sponsorSlide";
import OverlayRiding from "./components/Overlay/Riding";

function App() {
  return (
    <>
      <div className='app'>
        <Bar />
        <Heroslide />
        <Trending />
        <Product />
        <SponsorSlide />
        <OverlayRiding />
        <Delivery icon={""} title={""} subtitle={""} />
        <Discount />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
