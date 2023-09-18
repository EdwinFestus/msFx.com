import BigButton from '@/components/BigButton'
import Button from '@/components/Button'


const Hero = () => {
  return (

    <section className=' max-container mx-auto flex flex-col 
    justify-center items-center md:items-center  lg:items-start w-full   
    min-h-screen space-y-6 md:space-y-8 lg:space-y-[2.5rem]'>

        <h1 className='text-3xl text-center md:text-4xl lg:text-5xl lg:text-start  font-bold md:max-w-5xl uppercase font-heading leading-normal md:leading-tight lg:leading-tight text-light-md'>Master the Forex Markets with <span className='text-lightblue-md'>MastermindFX!</span></h1>

        <p className='text-center lg:text-start text-sm lg:text-xl eading-normal md:max-w-2xl  lg:max-w-3xl font-normal text-light-md '>Welcome to the world of limitless financial possibilities! Are you ready to harness the power of the foreign exchange market like a true master? Look no further than MastermindFX – your gateway to success in the dynamic world of forex trading!</p>
        
        <div className='flex items-center justify-center lg:justify-start w-full gap-14'>
            <Button label='Learn more' backgroundColor='bg-light-md' textColor='text-base-md'  borderColor='bg-base-md' />
            <Button label='Join us Now...' backgroundColor='bg-lightblue-md'  textColor='text-base-md' borderColor='bg-base-md'/>
        </div>
    </section>
  )
}

export default Hero 