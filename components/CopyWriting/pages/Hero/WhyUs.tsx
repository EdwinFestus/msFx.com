import React from 'react'
import WhyUsComponent from './WhyUsComponent'
import { FaBook } from 'react-icons/fa'

const WhyUs = () => {
  return (
    <section className='flex items-center flex-col py-5 font-text container-fluid mx-auto'>
        <h2 className='text-5xl font-heading font-bold uppercase text-center w-full py-[5rem]'>Why Choose MastermindFX?</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
            <WhyUsComponent 
              icon={'/icons/expertsupport.png'} 
              title='Expertise That Counts' 
              text="With years of experience in the forex industry, our team of experts has honed their skills to perfection. We're here to guide you through the complex world of currency trading, offering insights that truly matter.
              " />

            <WhyUsComponent 
              icon={'/icons/robotic-hand.png'} 
              title='Cutting-Edge Technology' 
              text="At MastermindFX, we provide you with state-of-the-art trading tools and platforms, ensuring you have the edge you need to navigate the forex markets effectively." />
            <WhyUsComponent 
              icon={'/icons/risk-management.png'} 
              title='Risk Management' 
              text="Your financial security is our top priority. We offer robust risk management strategies to protect your capital while maximizing your potential returns." />
            <WhyUsComponent 
              icon={'/icons/book.png'} 
              title='Educational Resources' 
              text="Whether you're a seasoned trader or just starting, we have a treasure trove of educational resources, webinars, and tutorials to help you build your forex trading expertise." />
            <WhyUsComponent 
              icon={'/icons/technical-support.png'} 
              title='Client-Centric Approach' 
              text="Your success is our success. We work closely with you to understand your goals and provide tailored solutions that align with your unique trading objectives." />

            <WhyUsComponent 
              icon={'/icons/expert.png'} 
              title='Expert Guidance' 
              text="Learn from seasoned traders who have successfully navigated the forex market. Our team of mentors provides personalized support and guidance to help you achieve your financial goals." />

        </div>
    </section>
  )
}

export default WhyUs