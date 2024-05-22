import React from 'react'
import LeftWatchVideo from './leftWatchVideo';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../contantApi/youtubeApi';
import { Link } from 'react-router-dom';

function LeftVideo() {


    const [leftVideo, setLeftVideo] = useState([]);

    const smallVideo = async () => {
        try {
            const res = await axios.get(BASE_URL);

            setLeftVideo(res?.data?.items)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        smallVideo()
    }, [])

    return (
        <div className='grid grid-flow-row mt-16'>
            {
                leftVideo.map((items) => {
                    return (
                        <Link to={`/watch?v=${items.id}`} key={items.id}>
                        < LeftWatchVideo  items={items}/>
                       </Link>


                    )


                })
            }
        </div>
    )
}

export default LeftVideo