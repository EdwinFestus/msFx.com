

const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}: {label: string, iconURL?: string, backgroundColor: string, textColor: string, borderColor: string, fullWidth?: string}) => {
    return (
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-sm md:text-md lg:text-xl font-bold leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full lg:rounded-md ${fullWidth && 'w-full'}`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        )}
      </button>
    )
  }
  
  export default Button