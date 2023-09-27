import React from 'react'
import Image from 'next/image'

function CardTestimonial({ imgUrl, text, name }: { imgUrl?: string, text: string, name: string }) {
    return (
            

        <div className="bg-white p-6 h-full rounded shadow-md">
            <div>
            {
                imgUrl && (
                    <div className='rounded-full mb-5'>
                        <Image 
                            src={imgUrl}
                            height={100}
                            width={100}
                            alt={name}
                            objectFit='cover'
                            className='rounded-full'
                        />
                    </div>
                )
            }
            </div>
            <p className="text-gray-700">"{text}"</p>
            <p className="text-gray-600 font-heading font-bold capitalize">- {name}</p>
        </div>


    )
}

export default CardTestimonial