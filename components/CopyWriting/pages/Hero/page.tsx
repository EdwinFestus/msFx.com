import Button from '@/components/Button'


const Hero = () => {
  return (
    <section className='flex-col container-fluid mx-auto space-y-[3rem] flex items-start justify-center  min-h-screen'>
        <h1 className='text-5xl md:text-[4rem] font-bold md:max-w-5xl uppercase font-heading leading-tight text-light-md'>Master the Forex Markets with <span className='text-lightblue-md'>MastermindFX!</span></h1>
        <p className='text-center md:text-start text-xl leading-normal max-w-xl md:max-w-3xl font-normal text-light-md'>Welcome to the world of limitless financial possibilities! Are you ready to harness the power of the foreign exchange market like a true master? Look no further than MastermindFX – your gateway to success in the dynamic world of forex trading!</p>
        
        <div className='flex items-start justify-center gap-14 mt-5'>
            <Button label='Learn more' bgColor='bg-light-md' textColor='text-base-md' />
            <Button label='Join us Now...' bgColor='bg-lightblue-md' textColor='text-base-md' />
        </div>
    </section>
  )
}

export default Hero 