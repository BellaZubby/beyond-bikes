import TopBar from "@/components/home/topbar";
import Navbar from "./components/home/topbar/menu";
import HeroSection from "./components/hero";
import Trending from "./components/trending";
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
     </div>
    </>
  )
}

export default App
