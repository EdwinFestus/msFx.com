

import WhyUs from '@/app/hero/WhyUs/WhyUs'
import Hero from '@/app/hero/page'
import About from './hero/AboutUs/About'

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
      <section className='px-10 md:px-24'>
        <WhyUs />
      </section>
      <section className='p-24'>
        <About />
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
