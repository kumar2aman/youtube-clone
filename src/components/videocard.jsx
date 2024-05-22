import React from "react";
import Avatar from "react-avatar";


const VideoCard = ({items}) => {


    
    return (
        <div className="w-[100%] cursor-pointer">
            <img className="size-64 w-full h-56 mt-10 rounded-xl" src= {items.snippet.thumbnails.medium.url} alt="ytvideo" />
            <div>
                <div className="flex mt-2">
                    <Avatar className="ml-1" src="https://wallpapers.com/images/featured/anonymous-pictures-j89s1ratkktsm42d.jpg" size={35} round={true} />
                    <div className="ml-6">
                        <h1 className="font-bold">{items.snippet.title}</h1>
                        <p className="text-sm text-gray-700">{items.snippet.channelTitle}</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default VideoCard