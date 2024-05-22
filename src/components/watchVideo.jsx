import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../contantApi/youtubeApi';
import axios from 'axios';
import { useEffect } from 'react';
import Avatar from 'react-avatar';
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { RiDownloadLine } from "react-icons/ri";
import LeftVideo from './leftVideo';




const WatchVideo = () => {


    const [SearchParams] = useSearchParams();
    const videoId = SearchParams.get('v');



    const [single, setSingleVideo] = useState("");

    const getSingleVideo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)


            setSingleVideo(res?.data?.items[0]);
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getSingleVideo()
    }, [single]);


    return (
        <>

            <div className='ml-24 '>
                <div className='mt-20'>
                    <iframe className='rounded-2xl'
                        width="907"
                        height="510"
                        src={`https://www.youtube.com/embed/EVK5p48OSeI?autoplay=1`}
                        title=""
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen">
                    </iframe>
                </div>
                <div className='mt-3'>
                    <h1 className='text-xl font-bold'>{single?.snippet?.title}</h1>
                    <div className=' flex mt-3 justify-between'>
                        <div className='flex justify-items-center justify-center'>
                            <Avatar className="cursor-pointer " src="https://wallpapers.com/images/featured/anonymous-pictures-j89s1ratkktsm42d.jpg" size={42} round={true} />
                            <p className='p-2 font-bold'>{single?.snippet?.channelTitle}</p>
                            <button className='bg-black text-white w-24 rounded-3xl h-8 p-1 text-base font-semibold ml-6 mt-1'>Subscribe</button>
                        </div>
                        <div>
                            <button className='mr-2 bg-gray-100 w-24 h-9 rounded-3xl  '> <AiOutlineLike className='size-6 ml-4 ' />
                                <p className='-mt-6 ml-4'>like</p>
                            </button>

                            <button className='mr-2 bg-gray-100 w-24 h-9 rounded-3xl  '> <  RiShareForwardLine className='size-6 ml-2 ' />
                                <p className='-mt-6 ml-4'>Share</p>
                            </button>

                            <button className='mr-2 bg-gray-100 w-[130px] h-9 rounded-3xl  '> <RiDownloadLine className='size-5 ml-4 ' />
                                <p className='-mt-6 ml-6'>Download</p>
                            </button>
                        </div>
                    </div>


                </div>

            </div>

            <LeftVideo />

        </>

    )
}

export default WatchVideo


//${videoId}