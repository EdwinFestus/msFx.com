

const Button = ({label, imgUrl, textColor, bgColor}: {label:string, imgUrl?:string, textColor?:string, bgColor?:string }) => {
  return (
    <div className='flex gap-5 '>
        <button className={`inline-block py-2 px-4 font-bold text-sm   text-center ${bgColor ? `${textColor} ${bgColor}`:"bg-red-md text-white"} rounded-none`}>
            {label}

            {imgUrl && (
                <div>
                    <img 
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