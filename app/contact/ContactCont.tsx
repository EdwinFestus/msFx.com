import React from 'react'

function ContactCont() {
  return (
    <div>
        <div className="py-32 md:py-52 container mx-auto ">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ background: `url('/images/call-care.jpg') center/cover` }}></div>
                    <div className="w-full p-8 lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-700 text-center uppercase">Contact Us</h2>
                        <p className='pt-5 mb-10 text-gray-700 text-base text-center'>Please try send us message regarding anything you would like us to help you with. </p>
                        
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                        </div>
                        {/* <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="number" />
                        </div> */}
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                            </div>
                            <textarea className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none h-32"  />
                        </div>
                        <div className="mt-8">
                            <button className="bg-red-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-600">Submit</button>
                        </div>
                       
                    </div>
                </div>



               <div className="socials flex space-x-10 items-center justify-center mt-20">
                    <a href="https://t.me/mastermindfx001" className='text-3xl hover:scale-110' target='_blank' >
                        <FaTelegram />
                    </a>
                    <a href="https://wa.me/message/NED252S2GZANE1" className='text-3xl hover:scale-110' target='_blank' >
                        <FaWhatsapp />
                    </a>
                    <a href="tel:07030198377" className='text-3xl hover:scale-110' target='_blank'  >
                        <FaPhoneAlt />
                    </a>
                </div>
            </div>
    </div>
  )
}

export default ContactCont
