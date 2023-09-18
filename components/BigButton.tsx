

// using the constructive function in typscript to pass in props gives you an error of  "Binding element:'label' implicit has an 'any' type."
// To resolve this issue we have to construct a funtion and make it a contructive function using className or define it withing the construct



const BigButton = ({label, imgUrl, textColor, bgColor}: {label:string, imgUrl?:string, textColor?:string, bgColor?:string }) => {
  return (
    <div className='flex gap-5 '>
        <button className={`inline-block py-5 px-[2.5em] font-bold text-xl   text-center ${bgColor ? `${textColor} ${bgColor}`:"bg-red-md text-white"} rounded-lg`}>
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

export default BigButton