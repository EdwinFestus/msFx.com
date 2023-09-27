import React from 'react'
import CardTestimonial from './CardTestimonial'


function Testimonial() {
    return (
        <div className="container mx-auto ">
            <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <CardTestimonial 
                    text='It has been an amazing experience after all those years of dedication to learning and trying to make the pieces come together. You have solidified this for me.' 
                    name='John Doe' 
                    imgUrl='/images/Hero-city.jpg' />
                <CardTestimonial 
                    text='Well, the results speak for themselves. Before your course, I was lucky to win 3 out of 10 trades. Since learning your way of trading, I have made 15 trades and...' 
                    name='Jane Smith' 
                    imgUrl='/images/carlos.jpg' />
                <CardTestimonial 
                    text='I must say it has been a wonderful and rewarding experience to learn Price Action system and strategies from a real professional forex trader and great mentor.' 
                    name='nicola Tesla' 
                    imgUrl='/images/handshake.jpg' />
            </div>
        </div>
    )
}

export default Testimonial