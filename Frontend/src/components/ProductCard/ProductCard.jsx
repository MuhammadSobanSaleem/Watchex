import React from 'react'

const ProductCard = ({imageURl, title, description, price}) => {
return (
    <div className='relative h-[476px] w-70 bg-transparent rounded-2xl shadow-lg'>

            <div className='absolute inset-0 flex flex-col gap-1 p-2 backdrop-blur-[10px]  bg-[linear-gradient(120deg,rgba(255,255,255,0.2),rgba(255,255,255,0.1))] rounded-2xl max-w-[100%] shadow-lg'>
                <div className="">

                <img className='rounded-2xl w-[100%] aspect-square' src={imageURl} alt={title} />
                <div className='p-2'>

                    <h2 className='text-3xl font-pops font-semibold text-[#000000]'><span className='text-[25px] font-oleo text-neutral-900'>Watchex</span><br />{title}</h2>

                    <p className='text-neutral-800 '>{description}</p>

                    <div className="flex justify-between items-center mt-4 absolute bottom-4 left-[50%] translate-x-[-50%] w-[90%]">

                        <span className='font-bold text-[22px] text-gray-800'>${price}</span>
                        <button className='w-[60%] p-1 backdrop-blur-[10px]  bg-[linear-gradient(120deg,rgba(255,255,255,0.2),rgba(255,255,255,0.1))] rounded-2xl border-[1.5px] border-white/10 shadow-lg font-pops text-[15px] hover:backdrop-opacity-40 transition-all duration-600 cursor-pointer'>Buy Now</button>

                    </div>
                    </div>
                </div>
            </div>
    </div>
)
}

export default ProductCard