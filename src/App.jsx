import './App.css'
import Footer from './Components/Footer/Footer'
import GetStrated from './Components/GetStared/GetStrated'
import HeroSection from './Components/HeroSection/HeroSection'
import Banner from './Components/Navbar/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'

function App() {


  return (
   <>
   <Navbar></Navbar>
    <Banner></Banner>
    <GetStrated></GetStrated>
    <Pricing></Pricing>
    <HeroSection></HeroSection>
    <Footer></Footer>
   </>
  )
}

export default App
