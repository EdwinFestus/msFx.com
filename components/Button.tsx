import Image from 'next/image'

const Button = ({label, imgUrl, textColor, bgColor}: {label:string, imgUrl?:string, textColor?:string, bgColor?:string }) => {
  return (
    <div className='flex gap-5 '>
        <button className={`hover:bg-lightblue-md bg-cyan-400 text-base-md py-2 font-semibold px-4 rounded ${bgColor ? `${textColor} ${bgColor}`:"bg-red-md text-white"} rounded-none`}>
            {label}

            {imgUrl && (
                <div>
                    <Image 
                        src={imgUrl}
                        alt="button"
                        width={25}
                        height={25}
                        className='object-contain' />
                </div>
            )}
        </button>
    </div>
  )
}
  
  export default Button