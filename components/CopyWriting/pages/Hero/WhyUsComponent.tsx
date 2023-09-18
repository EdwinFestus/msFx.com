import React from "react"
import Image from "next/image"

const WhyUsComponent = ({ icon, title, text } : {icon: string, title: string, text:string}) => {
    return (
        <div className='flex items-start space-y-5 flex-col  mt-10'>
            <div className=""> 
                <Image
                    src={icon}
                    alt='icon'
                    width={50}
                    height={50}
                    objectFit="contain"
                    className=''
                />
            </div>
            
            <h3 className="font-heading text-xl font-bold">{title}</h3>
            <p className="text-md">{text}</p>
        </div>
    )
}

export default WhyUsComponent