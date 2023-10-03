
import React from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { AboutCard } from '@/components/AboutCard'

const AboutHero = () => {
  return (
    <section className='flex flex-col  container mx-auto h-full py-52 w-full items-center text-center  px-4 md:h-[70vh] text-white relative'>
       
    <div className=''>
        <h3 className='text-3xl text-white font-bold uppercase mb-5 tracking-widest' >Who we are</h3>
        <p className='text-md text-gray-400 max-w-xl'>We are the market makers with years of experience and dedications, we flow with the directional bias of the finacial markets</p>
        <div>
          <div className='flex space-x-5 items-center justify-center mt-20'>
            <a href="">
             <FaFacebook className='text-2xl text-lightblue-md hover:text-gray-100'/>
            </a>
            <a href="">
             <FaGithub className='text-2xl text-lightblue-md hover:text-gray-100'/>
            </a>
            <a href="">
             <FaInstagram className='text-2xl text-lightblue-md hover:text-gray-100'/>
            </a>
            <a href="">
             <FaEnvelope className='text-2xl text-lightblue-md hover:text-gray-100'/>
            </a>
          </div>
        </div>
    </div>
    

    <div className=' space-x-6 absolute bottom-[-3rem] hidden lg:flex'>
      <AboutCard heading='Pass a Prop Firm Challenge' text='Surpass the 99% of traders who fail, subcribe now..' link='/billing' />
      <AboutCard heading='Master Technical Analysis' text='We help you develop your own strategy' link='/billing' />
      <AboutCard heading='Trading Psycology Expert' text='Master your emotion, Master the market' link='/billing' />   
    </div>
 </section>
  )
}

export default AboutHero