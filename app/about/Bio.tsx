import React from 'react'
import { Fa500Px, FaFacebook, FaGoogleDrive } from 'react-icons/fa'
import Image from 'next/image'
import Icon from '@/components/Icon'

export const Bio = () => {
    return (
        <section className='pt-32 md:pt-52 container mx-auto px-4   '>

            <div className='md:flex '>
                <div className='text-center mb-14 md:max-w-sm md:mr-16 md:text-start'>
                    <p className='text-lightblue-md text-sm tracking-widest'>Briefing</p>
                    <h2 className='text-gray-200 text-3xl font-bold mb-5 mt-3 uppercase tracking-widest'>Our Story</h2>
                    <p className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ab porro dolorem. Dicta consectetur ipsam placeat laborum assumenda? Natus, quidem.</p>
                </div>
                <div className='text-gray-400'>
                    <p className='text-base mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima omnis in temporibus non necessitatibus unde. Reiciendis saepe quaerat distinctio quisquam exercitationem eaque quos nemo enim magnam. Sapiente, voluptate officiis.</p>
                    <p className='text-base mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima omnis in temporibus non necessitatibus unde. Reiciendis saepe quaerat distinctio quisquam exercitationem eaque quos nemo enim magnam. Sapiente, voluptate officiis.</p>
                    <p className='text-base mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima omnis in temporibus non necessitatibus unde. Reiciendis saepe quaerat distinctio quisquam exercitationem eaque quos nemo enim magnam. Sapiente, voluptate officiis.</p>
                    
                </div>
            </div>

        </section>
    )
}


export default Bio