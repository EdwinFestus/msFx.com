import React from 'react'
import { FaForward, FaArrowRight } from 'react-icons/fa'

export const AboutCard = ({heading, text, link}:{heading: string,text: string, link: string }) => {
  return (
    <div  className=' py-9 px-16 w-35  rounded-sm  bg-gradient-to-t from-gray-900 to-gray-600 shadow-sm leading-loose transition-all'> 
        <h3 className='text-md text-gray-100 font-semibold leading-tight mb-3 uppercase'>{heading}</h3>
        <p className='text-sm text-gray-400'>{text}</p>
        <a href={link} className="text-sm  text-gray-300 underline flex justify-center items-center mt-5 hover:text-lightblue-md">Visit now ... <FaArrowRight className='ml-3'/></a>
    </div>
  )
}
