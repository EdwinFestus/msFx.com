

import WhyUs from '@/app/hero/WhyUs/WhyUs'
import Hero from '@/app/hero/page'
import About from './hero/AboutUs/About'
import Testimonial from './testimonial/Testimonial'
import CallToAction from './call-to-action/CallToAction'
import Faq from './faq/Faq'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="w-full font-text px-0 m-0 bg-gray-50">
      
      <section className="w-full px-5 relative">
        <Image
          src={'/images/carlos.jpg'}
          alt='about-us image'
          layout='fill'
          objectFit='cover'
          className=' absolute inset-0 bg-top'
        />
        <div className='absolute inset-0 bg-gradient-to-tr from-base-md to-base-md   opacity-90' ></div>


        <Hero />

      </section>
      <section className='px-4 md:px-24 '>
        <WhyUs />
      </section>
      <section className='px-4 md:px-24'>
        <About />
      </section>
      <section className='bg-gray-100 py-20 px-8 md:px-24'>
        <Testimonial />
      </section>
      <section className='p4'>
        <CallToAction />
      </section>
      <section className='p4'>
        <Faq />
      </section>
    </main>
  )
}
