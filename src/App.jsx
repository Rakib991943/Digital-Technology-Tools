import { Suspense, useState } from 'react'
import './App.css'
import Carts from './Components/Carts/Carts'
import Footer from './Components/Footer/Footer'
import GetStrated from './Components/GetStared/GetStrated'
import HeroSection from './Components/HeroSection/HeroSection'
import Banner from './Components/Navbar/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'

function App() {
  const fetchDegitalToolData = async () => {
    const res = await fetch("/data.json");
    return res.json();
  }

  const [buyItem, setBuyItem] = useState([]);
  const datas = fetchDegitalToolData();

  return (
    <>
      <Navbar buyItem={buyItem}></Navbar>
      <Banner></Banner>
      <Suspense>
        <Carts datas={datas}  buyItem={buyItem} setBuyItem={setBuyItem}></Carts>
      </Suspense>
      <GetStrated></GetStrated>
      <Pricing></Pricing>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </>
  )
}

export default App
