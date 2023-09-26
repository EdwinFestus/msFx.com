import React from 'react'

function CardTestimonial({imgUrl, text, name}: {imgUrl?:string, text: string, name: string}) {
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded">
                    <p className="text-gray-700">{text}</p>
                    <p className="text-gray-600">- {name}</p>
                </div>
                <div className="bg-white p-6 rounded">
                    <p className="text-gray-700">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                    <p className="text-gray-600 font-bold">- Jane Smith</p>
                </div>
                <div className="bg-white p-6 rounded">
                    <p className="text-gray-700">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                    <p className="text-gray-600">- Mike Johnson</p>
                </div>
            </div>
        </div>
    )
}

export default CardTestimonial