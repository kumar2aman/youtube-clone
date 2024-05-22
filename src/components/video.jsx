import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_KEY } from '../contantApi/youtubeApi';
import { BASE_URL } from '../contantApi/youtubeApi';
import VideoCard from './videocard';
import { Link } from 'react-router-dom';

const Video = () => {

    const [video, setVideo] = useState([]);

    const fetchYoutubeVideos = async () => {
        {
            const res = await axios.get(BASE_URL);
            
            setVideo(res?.data?.items)
        } 

    }

    useEffect(() => {
        fetchYoutubeVideos()
    }, [])




    return (
        <div className='grid grid-cols-3 gap-4'>
          {
            video.map((items)=>{
              return(
                <Link to={`/watch?v=${items.id}`} key={items.id}>
                 <VideoCard  items={items}/>
                </Link>
              )
              
               
          })
          }
           
           


        </div>

    )
}

export default Video;
