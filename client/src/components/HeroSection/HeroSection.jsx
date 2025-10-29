import SplitText from "../utils/SplitText.jsx";
import TextType from '../utils/TextType.jsx';


  const HeroSection = () => {
    return (
      <section 
      className='w-screen h-screen'
      >
        <div className="flex mt-20 justify-around items-center h-[80%] w-full">

          <div className="">
            <h1 className='font-pops font-normal text-3xl/[70px]'>Welcome To<br />
            <SplitText
            text="Watchex"
            className="font-oleo text-8xl"
            delay={200}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
  /></h1>

            <p className='font-pops font-light mt-2 ml-2 min-h-[50px]'>
            <TextType 
              text={["Experience timeless craftsmanship and unmatched luxury, \n designed to elevate every moment of your life.", "Crafted with unparalleled precision and refined elegance, \n to complement every chapter of your journey.", "Meticulously designed with sophistication and grace, \n to enhance every experience in your life."]}
              typingSpeed={65}
              pauseDuration={1800}
              showCursor={true}
              cursorCharacter="|"
              textColors={['#222222']}
            /></p>
          </div>
          </div>
        </section>
    )
  }

  export default HeroSection