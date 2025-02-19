
const Button = ({ text, action = () => { }, isFullWidth = true, hoverNegative = false, maxWidth = false }) => {
    return (
        <button
            onClick={action}
            className={`px-6 py-4 bg-coral ${hoverNegative ? 'hover:bg-white hover:text-dark' : 'hover:bg-blue'} transition-all ease-in-out duration-100 uppercase font-semibold text-md font-raleway text-white tracking-wider cursor-pointer ${isFullWidth ? `w-[230px]` : ''} ${maxWidth ? 'w-full' : ''}`}>
            {text}
        </button>
    )
}

export default Button
