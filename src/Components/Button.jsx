
const Button = ({ text, action = () => { }, isFullWidth = true, hoverNegative = false, bgNegative = false, maxWidth = false }) => {
    return (
        <button
            onClick={action}
            className={`${bgNegative ? 'bg-white text-coral p-0' : 'bg-coral text-white px-6 py-4'} ${hoverNegative ? 'hover:bg-white hover:text-coral' : 'hover:bg-blue'} transition-all ease-in-out duration-100 uppercase font-semibold text-md font-raleway tracking-wider cursor-pointer max-sm:text-sm ${isFullWidth ? `w-[230px]` : ''} ${maxWidth ? 'w-full' : ''}`}>
            {text}
        </button>
    )
}

export default Button
