import ProductCard from '../ProductCard/ProductCard'
import ScrollFloat from '../utils/ScrollFloat'
import SkeletonCard from '../SkeletonCard/SkeletonCard'


const ProductsSection = ({category, bgImage, products, loading}) => {
  return (
    <div className='relative h-[740px] w-screen m-auto flex gap-3 box-border bg-cover bg-no-repeat'
    style={{backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <div className='absolute inset-0 backdrop-blur-[8px] bg-[linear-gradient(120deg,rgba(255,255,255,0.2),rgba(0,0,0,0.2))] shadow-lg text-center max-w-[100%]'>

        <h1 className='text-5xl font-pops [text-shadow:2px_2px_6px_rgba(0,0,0,0.2)] mt-8'><span className='text-4xl font-oleo'>Watchex</span> <br />
          <ScrollFloat

            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=60%'
            stagger={0.03}
          

          >

            {category}

          </ScrollFloat></h1>

            <div className=" mt-10 flex justify-center items-center gap-10">
              {loading 
              ? Array(4).fill(null).map((_, index) => <SkeletonCard key={index} />)
              :
                products && products.map((product) => (
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