

const RecentPostCard = ({ image, heading, date, photographer, commentAmount }) => {

    const postInfo = `${date}  |  ${photographer}  |  ${commentAmount > 0 ? commentAmount + " comments" : "No comments"}`;

    return (
        <div className="h-full flex flex-col justify-start gap-4 bg-white text-dark w-full">

            <div>
                <img src={image} loading="lazy" alt="" className="w-full h-full object-cover" />
            </div>

            <h2 className="font-[800] text-2xl">{heading}</h2>
            <p className="text-sm text-gray-500 text-nowrap whitespace-pre">{postInfo}</p>

        </div>
    )
}

export default RecentPostCard
