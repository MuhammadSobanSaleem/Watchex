import bgImage from '../../assets/images/nano-banana-2025-10-17T07-21-48.png'

const Footer = () => {
  return (
    <div className="relative h-45 w-[1280px] bg-contain bg-no-repeat"
    style={{backgroundImage: `url(${bgImage})`}}>

        <div className='absolute inset-0 backdrop-blur-[12px] bg-[linear-gradient(120deg,rgba(255,255,255,0.18),rgba(0,0,0,0.2))] border border-white/20 shadow-lg text-center max-w-[100%] flex flex-col justify-center items-center gap-2'>
            <h3 className='font-pops'><span className='font-oleo text-2xl'>Watchex</span>&nbsp; &copy;<br /> Copyright, All rights reserved.</h3>
            <p className='font-pops'>Designed and developed by <span className='font-medium'>Muhammad Soban</span></p>
        </div>
    </div>
  )
}

export default Footer