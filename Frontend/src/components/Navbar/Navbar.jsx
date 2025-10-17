import React from 'react'


const Navbar = () => {
  return (

    <div className="navbar flex justify-between items-center absolute top-0 left-[50%] translate-x-[-50%] backdrop-blur-[15px] bg-transparent bg-[linear-gradient(120deg,rgba(255,255,255,0.4),rgba(255,255,255,0.4))] rounded-bl-[20px] rounded-br-[20px] m-auto h-16 w-[96vw] shadow-[0_1px_6px_rgba(0,0,0,0.04)]">

    <div className="logo flex gap-4 items-center justify-between h-auto w-auto">
            <span className='font-oleo text-3xl font-black mt-1 ml-10 text-[#0A0A0A]'>Watchex</span>
        </div>
            <ul className='flex gap-4 mr-10 text-[#1E1E1E]'>
                <li>Products</li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
    </div>
  )
}

export default Navbar