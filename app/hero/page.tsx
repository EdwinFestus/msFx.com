import BigButton from '@/components/BigButton'
import Button from '@/components/Button'


const Hero = () => {
  return (

    <section className='flex flex-col items-center justify-center container mx-auto h-full py-40  px-4  text-center'>

        <h1 className='text-xl font-bold uppercase font-heading leading-tight text-light-md pb-[.8rem] md:text-[4rem] md:max-w-5xl '>Master the Forex Markets with <span className='text-white-md'>MastermindFX!</span></h1>

        <p className='text-white text-center leading-normal text-sm   md:max-w-3xl font-normal'>Welcome to the world of limitless financial possibilities! Are you ready to harness the power of the foreign exchange market like a true master? <span className="hidden md:inline-block">Look no further than MastermindFX – your gateway to success in the dynamic world of forex trading!</span></p>
        
        <div className='flex items-center justify-center gap-4 mt-5'>
            <Button label='Learn more' bgColor='bg-light-md' textColor='text-base-md' />
            <Button label='Join us Now...' bgColor='bg-lightblue-md' textColor='text-base-md' />
        </div>
    </section>
  )
}

export default Hero 