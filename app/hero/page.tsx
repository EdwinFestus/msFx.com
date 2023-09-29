
const Hero = () => {
  return (

    <section className='flex flex-col items-center justify-center container mx-auto h-full py-40  px-4  text-center md:h-[70vh]'>

        <h1 className='text-3xl font-bold mb-4 text-light-md uppercase'>Master the Forex Markets with <span className='text-white-md'>MastermindFX!</span></h1>

        <p className='text-gray-300 mb-8 text-base'>Welcome to the world of limitless financial possibilities! Are you ready to harness the power of the foreign exchange market like a true master? <span className="hidden md:inline-block">Look no further than MastermindFX – your gateway to success in the dynamic world of forex trading!</span></p>
        
        <div  className='flex space-x-5'>
          <a href="#" className=" hover:bg-cyan-500 bg-cyan-700 text-light-md py-2 font-semibold px-4 rounded">Learn More</a>
          <a href="#" className="bg-red-500 hover:bg-red-400  py-2 font-semibold px-4 text-white rounded">Get Started</a>
        </div>
    </section>
  )
}

export default Hero 