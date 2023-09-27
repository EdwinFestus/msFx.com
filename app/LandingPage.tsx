import React from 'react'

function LandingPage() {
    return (
        <div>

            {/* <!-- Navigation --> */}
            <nav className="bg-gray-900 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-xl font-bold">Logo</a>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">About</a></li>
                        <li><a href="#" className="hover:text-gray-400">Services</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* <!-- Hero Section --> */}
            <header className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to our landing page</h1>
                    <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Get Started</a>
                </div>
            </header>

            {/* <!-- Features Section --> */}
            <section className="bg-white py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-200 p-6 rounded">
                            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="bg-gray-200 p-6 rounded">
                            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="bg-gray-200 p-6 rounded">
                            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Testimonials Section --> */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded">
                            <p className="text-gray-700">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                            <p className="text-gray-600">- John Doe</p>
                        </div>
                        <div className="bg-white p-6 rounded">
                            <p className="text-gray-700">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                            <p className="text-gray-600">- Jane Smith</p>
                        </div>
                        <div className="bg-white p-6 rounded">
                            <p className="text-gray-700">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                            <p className="text-gray-600">- Mike Johnson</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Footer Section --> */}
            <footer className="bg-gray-900 text-white py-10">
                <div className="container mx-auto text-center">
                    <p>&copy; 2022 Your Company. All rights reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default LandingPage