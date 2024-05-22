import React from 'react'

const ButtonList = () => {

const allButtons = ["All", "javascript", "Computer", "Mixes", "Music", "Gaming", "Headphones", "live", "superhero movies", "bollywood song", "News"]

  return (
    <div className=' mt-4'>
      {
        allButtons.map((value, index)=>(
            <button key={index} className='border-none rounded-lg  px-4 py-1 mr-3 mt-16  bg-gray-200 font-medium'>{value}</button>
        ))
      }
      
    </div>
  )
}

export default ButtonList;