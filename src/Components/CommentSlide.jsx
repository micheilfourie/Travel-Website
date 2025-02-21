
const CommentSlide = ({ profileImg, name, occupation, comment }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-6">

            <div className="w-30 h-30 rounded-full border-2 border-coral p-2">
                <div className="w-full h-full overflow-hidden bg-white rounded-full">
                    <img src={profileImg} alt="" className="w-full h-full object-cover" />
                </div>
            </div>

            <p className="text-xl max-w-[800px] text-center italic px-10 max-md:text-lg max-sm:px-4">{`" ${comment} "`}</p>

            <div className="w-[80%] max-w-[800px] flex flex-col justify-center items-center">

                <h3 className="font-bold text-2xl text-blue italic">{name}</h3>
                <p className="text-gray-500 text-sm italic">{occupation}</p>

            </div>

        </div>
    )
}

export default CommentSlide
