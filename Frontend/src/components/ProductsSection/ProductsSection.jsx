import React from 'react'
import ProductCard from '../ProductCard/ProductCard'


const ProductsSection = ({category, bgImage, products}) => {
  return (
    <div className='relative h-[700px] w-screen m-auto flex gap-3 box-border bg-cover bg-no-repeat '
    style={{backgroundImage: `url(${bgImage})`}}>
        <div className='absolute inset-0 backdrop-blur-[12px] bg-[linear-gradient(120deg,rgba(255,255,255,0.3),rgba(0,0,0,0.2))] border border-white/20 shadow-lg text-center max-w-[100%]'>

        <h1 className='text-5xl font-pops [text-shadow:2px_2px_6px_rgba(0,0,0,0.2)] mt-8'><span className='text-4xl font-oleo'>Watchex</span> <br />{category}</h1>

            <div className=" mt-10 flex justify-center items-center gap-8">
                {products && products.map((product) => (
                <ProductCard
                key={product._id + product.title}
                imageURl={product.image}
                title={product.title}
                description={product.description}
                price={product.price.toLocaleString()}
                />
                ))}
            </div>

        </div>
    </div>
  )
}

export default ProductsSection