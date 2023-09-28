import React from 'react'
import Image from 'next/image'

function CardTestimonial({ imgUrl, text, name }: { imgUrl?: string, text: string, name: string }) {
    return (
            

        <div className="bg-white shadow-md rounded-lg p-4 ">
            <div>
            {
                imgUrl && (
                    <div className='rounded-full mb-5'>
                        <Image 
                            src={imgUrl}
                            height={160}
                            width={160}
                            alt={name}
                            objectFit='contain'
                            className='w-20 h-20 rounded-full mb-4'
                        />
                    </div>
                )
            }
            </div>
            <p className="text-gray-700 text-base mb-2">"{text}"</p>
            <p className="text-lg text-gray-600 font-heading font-semibold capitalize">- {name}</p>
        </div>


    )
}

export default CardTestimonial