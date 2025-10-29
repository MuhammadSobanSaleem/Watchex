import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import watchPfp from '../../assets/images/watch-pfp-default.png';
import cartIcon from '../../assets/images/cart-glass-nobg.png';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(()=>{
    const fetchProfile = async () => {
      try {
        const res  = await fetch(`${backendUrl}/auth/profile`, {
          method: 'GET',
          credentials: 'include'
        })
        if (res.ok) {
          const data = await res.json()
          setUser(data.email)
        }

      } catch (error) {
        console.error('Error fetching profile:', error)
      }
    }
    fetchProfile()
  }, [])

  const handleLogout = async () => {
    try {
      const res = await fetch(`${backendUrl}/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      })
      if (res.ok) {
        setUser(null)
      }
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <div className={`navbar flex justify-between items-center transition-all 
      
    ${isScrolled 
      ? "fixed top-4 w-[90vw]  rounded-t-full rounded-b-full z-50 "
      : "absolute top-0 w-[96vw] rounded-b-[20px] rounded-t-[0px] z-50 "
    }
    left-1/2 translate-x-[-50%] backdrop-blur-[15px] bg-transparent bg-[linear-gradient(120deg,rgba(255,255,255,0.4),rgba(255,255,255,0.4))]  h-16 shadow-[0_1px_6px_rgba(0,0,0,0.04)] border border-white/20 `}>

    <div className="logo flex gap-4 items-center justify-between h-auto w-auto">
            <span className='font-oleo text-3xl font-black mt-1 ml-10 text-[#0A0A0A]'>Watchex</span>
        </div>
            <ul className='flex gap-6 items-center mr-10 text-[#1E1E1E] font-pops text-[14px]'>
                <li className='relative pt-[5px] pb-[5px] text-[15px] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-500 hover:after:scale-x-100'><Link to="/products">Products</Link></li>

                <li><Link to="/cart"><img src={cartIcon} alt="Cart" className="w-10 h-10" /></Link></li>
                {user 
                ? <li className="relative group">
                    <img src={watchPfp} alt="Profile" className="w-10 h-10 rounded-full cursor-pointer transition-all duration-300 hover:scale-105" />
                    <div className="absolute right-[-100%] top-11 mt-2 w-48 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 backdrop-blur-[6px] bg-[rgb(193,193,193)] rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-white/50">
                      <div className="p-4 flex flex-col items-center">
                        <img src={watchPfp} alt="Profile" className="w-16 h-16 rounded-full mb-2" />
                        <span className="text-[#484848] text-sm mb-2">{user}</span>
                        <hr className="w-full border-t border-gray-200 mb-2" />
                        <button 
                          onClick={handleLogout}
                          className="w-full text-[#1E1E1E] text-sm py-2 rounded-full border border-[#1E1E1E] hover:bg-black/10 transition-all duration-300 hover:cursor-pointer"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </li>
                : <ul className='flex gap-2'>
                    <li className='text-white rounded-3xl pt-1.5 pb-1.5 pl-3 pr-3 backdrop-blur-[15px] bg-transparent bg-[linear-gradient(120deg,rgba(0,0,0,0.9),rgba(0,0,0,0.7))] shadow-[0_1px_6px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-500' ><Link to="/signup">Sign Up</Link></li>

                    <li className='border-[#1F1F1F] border-[1.2px] rounded-3xl pt-1.5 pb-1.5 pl-3.5 pr-3.5 transition-all duration-500 hover:scale-105 '><Link to="/login">Login</Link></li>
                  </ul>
                }
                

            </ul>
    </div>
  )
}

export default Navbar