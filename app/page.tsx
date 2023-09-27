

import WhyUs from '@/app/hero/WhyUs/WhyUs'
import Hero from '@/app/hero/page'
import About from './hero/AboutUs/About'
import LandingPage from './LandingPage'
import Testimonial from './testimonial/Testimonial'

export default function Home() {
  return (
    <main className="w-full font-text px-0 m-0">
      
      <section className="w-full px-5" 
        style={{
          background: `url('images/HeroImg.png') no-repeat center/cover`
        }}
      >
        <Hero />

      </section>
      <section className='px-8 md:px-24'>
        <WhyUs />
      </section>
      <section className='px-8 md:px-24'>
        <About />
      </section>
      <section className='bg-gray-100 py-20 px-8 md:px-24'>
        <Testimonial />
      </section>
      <section className='p-24'>
        Taking Action
      </section>
      <section className='p-24'>
        Email Newsletter
      </section>

      
      <section className='p-24'>
        Email Newsletter
      </section>


    </main>
  )
}
