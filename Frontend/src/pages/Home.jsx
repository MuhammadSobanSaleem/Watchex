import {useState, useEffect} from 'react'
import HeroSection from '../components/HeroSection/HeroSection.jsx';
import ProductsSection from '../components/ProductsSection/ProductsSection.jsx';

import productBg1 from '../assets/images/Lucid_Realism_a_cinematic_photo_of_Ultrarealistic_luxury_watch_0.jpg'
import productBg2 from '../assets/images/Lucid_Realism_cinematic_photo_closeup_of_Ultrarealistic_luxury_1.jpg'
import heroImage from "../assets/images/Lucid_Realism_a_cinematic_photo_of_Ultrarealistic_luxury_watch_1.jpg"

import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'


const backendUrl = import.meta.env.VITE_BACKEND_URL;



const Home = () => {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
    const fetchData = async () => {
      try {
        // First fetch
        const res1 = await fetch(`${backendUrl}/products/luxury`);
        const text1 = await res1.text();
        let data1;
        try {
          data1 = JSON.parse(text1);
        } catch {
          throw new Error("Invalid JSON in /products/luxury response");
        }
        setData1(data1);

        // Second fetch
        const res2 = await fetch(`${backendUrl}/products/premium`);
        const text2 = await res2.text();
        let data2;
        try {
          data2 = JSON.parse(text2);
        } catch {
          throw new Error("Invalid JSON in /products/premium response");
        }
        setData2(data2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }finally{
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar/>
      <div className='bg-[#F8F9FA] h-screen w-screen bg-cover bg-no-repeat ' 
    style={{backgroundImage: `url(${heroImage})`,
    backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className='backdrop-blur-[15px] bg-[linear-gradient(120deg,rgba(255,255,255,0.3),rgba(0,0,0,0.2))] border border-white/20 shadow-lg text-center'>

      
        <HeroSection/>
        </div>
        </div>

      <ProductsSection 
            category="Premium"
            bgImage={productBg1}
            products={data1}
            loading={loading}
            />
        <ProductsSection 
            category="Luxury"
            bgImage={productBg2}
            products={data2}
            loading={loading}
            />

        <Footer />
    </>
  )
}

export default Home