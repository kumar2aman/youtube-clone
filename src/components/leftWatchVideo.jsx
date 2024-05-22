import React from 'react'
import { BASE_URL } from '../contantApi/youtubeApi';
import { useState, useEffect } from 'react';
import axios from 'axios';

function LeftWatchVideo({items}) {




  return (
    <div className='flex mt-4 cursor-pointer '>
      <div>
        <img className='w-[168px] h-[98px] ml-[24px] rounded-lg' src={items.snippet.thumbnails.medium.url} alt="" />

      </div>
      <div>
          <p className='w-44 ml-2 font-semibold text-sm'>{items?.snippet?.title}</p>
          <p className='w-44 ml-2 mt-2 text-sm'>{items.snippet.channelTitle}</p>
      </div>
    </div>

  )
}

export default LeftWatchVideo