
const Button = ({ text, action = () => { }, isFullWidth = true }) => {
    return (
        <button
            onClick={action}
            className={`px-6 py-3 bg-coral hover:bg-blue transition-all ease-in-out duration-100 uppercase font-semibold text-md font-raleway text-white tracking-wider cursor-pointer ${isFullWidth ? `w-[230px]` : ''}`}>
            {text}
        </button>
    )
}

export default Button
