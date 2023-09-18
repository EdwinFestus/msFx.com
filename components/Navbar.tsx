"use client"
import { FaBars } from 'react-icons/fa'


function Navbar() {
    return (

        <section className=' fixed w-full py-5 sm:px-10 z-40 font-heading' >
            <nav className='container-fluid relative flex items-center justify-between w-ful mx-auto px-4 md:px-0'>
                <div className='flex-1'>
                    <h3 className='text-xl text-white font-bold leading-normal uppercase'>MastermindFx</h3>
                </div>
                <div className='flex space-x-20 items-center'>
                    <ul className='hidden gap-7 sm:hidden lg:flex'>
                        <li className='text-md  text-gray-50 leading-normal'>
                            <a href="/" className='font-semibold'>Home</a>
                        </li>
                        <li className='text-md  text-gray-50 leading-normal'>
                            <a href="/about" className='font-semibold'>About</a>
                        </li>
                        <li className='text-md  text-gray-50 leading-normal'>
                            <a href="/services" className='font-semibold'>Services</a>
                        </li>
                        <li className='text-md  text-gray-50 leading-normal'>
                            <a href="/billing" className='font-semibold'>Billing</a>
                        </li>
                        <li className='text-md  text-gray-50 leading-normal'>
                            <a href="/contact" className='font-semibold'>Contact</a>
                        </li>
                    </ul>
                    <div className='bg-lightblue-md py-2.5 px-10 rounded-full'>
                        <a href='/login' className='text-md text-base-md font-bold'> Login</a>
                    </div>
                </div>
                <div className='block  sm:block lg:hidden'>
                    <button className='text-2xl'><FaBars color='white' /></button>
                </div>
            </nav>
        </section>

    )
}

export default Navbar