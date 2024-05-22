import React from 'react'
import Sidebar from "./sidebar"
import Feed from './feed'
import { Outlet } from 'react-router-dom'
import Test from './test'

const Body = () => {
  return (
   <>
    <div className='flex'>
 
  <Outlet/>
   </div>
   
   </> 
  )
}

export default Body