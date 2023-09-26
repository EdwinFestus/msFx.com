"use client"
import { FaBars } from 'react-icons/fa'


function Navbar() {
    return (

        <section className='' >
            <nav className="fixed w-full z-50 bg-transparent bg-gray-900 text-white ">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <a href="#" className="text-lg font-bold text-white uppercase">MastermindFx</a>
                        <button className="lg:hidden focus:outline-none" id="mobile-menu-button">
                            <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                                <path
                                    d="M4 6h16M4 12h16M4 18h16"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </button>
                        <div className="hidden lg:flex" id="desktop-menu">
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md font-bold">Home</a>
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        
        </section>

    )
}

export default Navbar



