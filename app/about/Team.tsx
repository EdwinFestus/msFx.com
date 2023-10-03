import TeamImg from '@/components/TeamImg'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Team() {
    return (
        <div className='text-white py-32 md:pb-52 container mx-auto px-4 flex justify-center flex-col items-center'>
            <div className='text-center mb-14 md:max-w-xl md:mr-16'>
                <p className='text-lightblue-md text-sm tracking-widest'>Team</p>
                <h2 className='text-gray-200 text-3xl font-bold mb-5 mt-3 uppercase tracking-widest'>Meet The Team</h2>
                <p className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ab porro dolorem. Dicta consectetur ipsam placeat laborum assumenda? Natus, quidem.</p>
            </div>

            <div className='spce-y-10 md:flex md:space-x-10'>
                {/* <TeamImg image='/images/portrait2.jpg' name='Prof Angello' profession='Web Developer' linkedin='#' facebook='#' twitter='#' instagram='#' /> */}
                {/* <TeamImg image='/images/portraitformal.jpg' name='Prof Angello' profession='Web Developer' linkedin='#' facebook='#' twitter='#' instagram='#' /> */}
                <div className='mb-10'>
                    <TeamImg image='/images/portrait1.jpg' name='Prof Angello' profession='Web Developer' linkedin='#' facebook='#' twitter='#' instagram='#' />
                </div>
                <div className='mb-10'>
                    <TeamImg image='/images/portrait1.jpg' name='Prof Angello' profession='Web Developer' linkedin='#' facebook='#' twitter='#' instagram='#' />
                </div>
                <div className='mb-10'>
                    <TeamImg image='/images/portrait1.jpg' name='Prof Angello' profession='Web Developer' linkedin='#' facebook='#' twitter='#' instagram='#' />
                </div>
                <div className='mb-10'>
                    <TeamImg image='/images/portrait1.jpg' name='Prof Angello' profession='Web Developer' linkedin='#' facebook='#' twitter='#' instagram='#' />
                </div>
               
            </div>
            
        </div>
    )
}

export default Team