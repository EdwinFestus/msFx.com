import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

function TeamImg({image, profession, name,facebook, twitter, linkedin, instagram}: {image: string, profession: string, name: string, facebook:string, twitter:string, linkedin:string, instagram: string}) {
    return (
        <div className='flex flex-col items-start'>
            <Image
                src={image}
                alt='team image'
                width={300}
                height={300}
                quality={100}
                objectFit='cover'
                className='h-[300] mb-5'
            />
            <p className='text-sm m-0 p-0 leading-tight text-lightblue-md tracking-widest'>{profession}</p>
            <h3 className="text-xl font-semibold font-heading leading-loose">{name}</h3>

            <div className='flex space-x-5 lg:justify-center lg:text-center'>
                <a href={facebook}>
                    <FaFacebook className='text-2xl text-lightblue-md hover:text-gray-100' />
                </a>
                <a href={twitter}>
                    <FaTwitter className='text-2xl text-lightblue-md hover:text-gray-100' />
                </a>
                <a href={instagram}>
                    <FaInstagram className='text-2xl text-lightblue-md hover:text-gray-100' />
                </a>
                <a href={linkedin}>
                    <FaLinkedin className='text-2xl text-lightblue-md hover:text-gray-100' />
                </a>
            </div>
        </div>
    )
}

export default TeamImg