import React from "react"
import Image from "next/image"

const WhyUsComponent = ({ icon, title, text } : {icon: string, title: string, text:string}) => {
    return (
        <div className='flex items-start space-y-4 flex-col  md:mt-5 bg-white shadow-2xl px-6 py-10 rounded-none w-full' >
            <div className=""> 
                <Image
                    src={icon}
                    alt='icon'
                    width={25}
                    height={25}
                    objectFit="contain"
                    className=''
                />
            </div>
            
            <h3 className="font-heading text-md font-bold uppercase">{title}</h3>
            <p className="text-sm">{text}</p>
        </div>
    )
}

export default WhyUsComponent