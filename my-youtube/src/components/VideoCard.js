import React from "react"

export const VideoCard = ({info}) =>{
    const {snippet, statistics} = info
    const {title, channelTitle, thumbnails }= snippet
    return (
        <div className="p-1 m-2 shadow-lg w-72">
            <img src={thumbnails.medium.url} className="rounded-lg" alt="Thumb-nail Img" />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li className="text-sm">{channelTitle}</li>
                <li className="text-sm">{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}



