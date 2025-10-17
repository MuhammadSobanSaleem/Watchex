import { useEffect, useState } from 'react';
import './App.css'
const backendUrl = import.meta.env.VITE_BACKEND_URL;
// Components
import Navbar from './components/Navbar/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import ProductsSection from './components/ProductsSection/ProductsSection.jsx'
import Footer from './components/Footer/Footer.jsx'
// Images
import heroImage from "./assets/images/Lucid_Realism_a_cinematic_photo_of_Ultrarealistic_luxury_watch_1.jpg"
import productBg1 from './assets/images/Lucid_Realism_a_cinematic_photo_of_Ultrarealistic_luxury_watch_0.jpg'
import productBg2 from './assets/images/Lucid_Realism_cinematic_photo_closeup_of_Ultrarealistic_luxury_1.jpg'

function App() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
    useEffect(() => {
    const fetchData = async () => {
      try {
        // First fetch
        const res1 = await fetch(`${backendUrl}/products/luxury`);
        const data1 = await res1.json();
        setData1(data1);

        // Second fetch
        const res2 = await fetch(`${backendUrl}/products/premium`);
        const data2 = await res2.json();
        setData2(data2);        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    <div className='relative bg-[#F8F9FA] h-screen w-screen bg-cover bg-no-repeat ' 
    style={{backgroundImage: `url(${heroImage})`}}>
      <div className='absolute inset-0 backdrop-blur-[15px] bg-[linear-gradient(120deg,rgba(255,255,255,0.3),rgba(0,0,0,0.2))] border border-white/20 shadow-lg text-center max-w-[100%]'>

      <Navbar/>
      <HeroSection/>
      </div>
    </div>
      <ProductsSection 
      category="Premium"
      bgImage={productBg1}
      products={data1}
      />
      <ProductsSection 
      category="Luxury"
      bgImage={productBg2}
      products={data2}
      />

    <Footer/>
   </>
  )
}

export default App
