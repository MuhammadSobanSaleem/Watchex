import React from 'react'

const ProductCard = ({imageURl, title, description, price}) => {
return (
    <div className='relative h-[446px] w-64  rounded-2xl shadow-lg'>

            <div className='absolute inset-0 flex flex-col gap-1 p-2 backdrop-blur-[6px]  bg-[linear-gradient(120deg,rgba(217,217,217,0.4),rgba(217,217,217,0.5))] rounded-2xl max-w-[100%] border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'>
                <div className="">

                <img className='rounded-2xl w-[100%] aspect-square' src={imageURl} alt={title} />
                <div className='p-2 flex flex-col gap-2 justify-center items-center h-[150px] w-full'>

                    <h2 className='text-3xl font-pops font-semibold text-[#000000]'><span className='text-[25px] font-oleo text-neutral-900'>Watchex</span><br />{title}</h2>

                    <p className='text-neutral-800 '>{description}</p>

                    <div className="flex justify-between items-center mt-4 absolute bottom-4 left-[50%] translate-x-[-50%] w-[90%]">

                        <span className='font-bold text-[22px] text-gray-800'>${price}</span>
                        <button
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full gap-4
                                    bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
                                    hover:bg-white/20 transition-all duration-300 hover:shadow-cyan-500/40
                                    hover:scale-105 active:scale-95"
                        >
                        {/* Neon glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 
                                        opacity-0 group-hover:opacity-100 blur-md transition duration-300"></div>

                        {/* Cart Icon */}
                        <i className="fa-solid fa-cart-shopping" style={{ color: '#ffffff' }}></i>
                        </button>

                    </div>
                    </div>
                </div>
            </div>
    </div>
)
}

export default ProductCard