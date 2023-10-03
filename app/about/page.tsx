"use client"
import React from 'react'
import Bio from './Bio'
import AboutHero from './AboutHero'
import Image from 'next/image'
import Team from './Team'
import MissionNVission from './MissionNVission'
import CallToAction from '../call-to-action/CallToAction'
import Testimonial from '../testimonial/Testimonial'


function AboutComp() {
  return (
    <>

      <section className='px-4 w-full bg-gradient-to-r from-base-md to-slate-800 bg-gradient relative' >
        <Image
          src={'/images/trading.jpg'}
          alt='about-us image'
          layout='fill'
          objectFit='cover'
          className=' absolute inset-0 bg-top'
        />
        <div className='absolute inset-0 bg-gradient-to-tr from-base-md to-base-md   opacity-90' ></div>
        <AboutHero />
      </section>

      <section className='bg-gradient-to-t from-gray-900 to-gray-600 px-4'>
        <Bio />
        <MissionNVission />
        <Team />
      </section>


      <section className='bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-emerald-800 via-teal-400 to-purple-500  px-8'>
          <Testimonial />
      </section>

      <section>
        <CallToAction />
      </section>

      {/* <section>
        Recent Blog Post Snapshop
      </section> */}

    </>
  )
}

export default AboutComp  