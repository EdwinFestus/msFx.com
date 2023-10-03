import React from 'react'
import Image from "next/image"

function Icon({icon}: {icon:string}) {
  return (
    <div>
        <div className=' p-5'>
                    <Image 
                        src={icon}
                        height={25}
                        alt='Logo'
                        width={25}
                        quality={100}
                        className='text-white bg-white rounded'
                    />
                </div>
    </div>
  )
}

export default Icon