
const Button = ({ text, action = () => { }, isFullWidth = true }) => {
    return (
        <button
            onClick={action}
            className={`px-6 py-3 bg-coral hover:bg-blue transition-all ease-in-out duration-300 uppercase font-semibold text-md font-raleway text-white tracking-wider ${isFullWidth ? `w-[230px]` : ''}`}>
            {text}
        </button>
    )
}

export default Button
