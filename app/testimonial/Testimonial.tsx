import React from 'react'
import CardTestimonial from './CardTestimonial'


function Testimonial() {
    return (
        <div className="container mx-auto ">
            <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <CardTestimonial text='lorem afdlajfdnaf dalf nfa s' name='nicola Tesla' imgUrl='/images/handshake.jpg' />
                <CardTestimonial text='lorem afdlajfdnaf dalf nfa s' name='nicola Tesla' imgUrl='/images/handshake.jpg' />
                <CardTestimonial text='lorem afdlajfdnaf dalf nfa s' name='nicola Tesla' imgUrl='/images/handshake.jpg' />
            </div>
        </div>
    )
}

export default Testimonial