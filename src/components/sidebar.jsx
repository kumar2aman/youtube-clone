import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuMusic2 } from "react-icons/lu";
import { TfiVideoClapper } from "react-icons/tfi";
import { CiStreamOn } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import { PiLightbulb } from "react-icons/pi";
import { useSelector } from 'react-redux';




const sidebarIcons1 = [{
    icon: <MdHomeFilled className='size-7' />,
    title: "home"
},
{
    icon: <SiYoutubeshorts className='size-6' />,
    title: "Short"
},

{
    icon: < MdOutlineSubscriptions className='size-6' />,
    title: "Subscriptions"
},
{
    icon: <FaFireAlt className='size-5' />,
    title: "Trending"
},
{
    icon: <LiaShoppingBagSolid className='size-5' />,
    title: "Shopping"
},
{
    icon: <LuMusic2 className='size-5' />,
    title: "Music"
},
{
    icon: <TfiVideoClapper className='size-5' />,
    title: "Flim"
},
{
    icon: <IoGameControllerOutline className='size-5' />,
    title: "Gaming"
},
{
    icon: <GiNewspaper className='size-5' />,
    title: "News"
},
{
    icon: <GiTrophyCup className='size-5' />,
    title: "Sport"
},
{
    icon: <PiLightbulb className='size-5' />,
    title: "Learning"
},
{
    icon: <PiLightbulb className='size-5' />,
    title: "Learning"
},
{
    icon: <PiLightbulb className='size-5' />,
    title: "Learning"
},
{
    icon: <PiLightbulb className='size-5' />,
    title: "Learning"
},
{
    icon: <PiLightbulb className='size-5' />,
    title: "Learning"
},
{
    icon: <PiLightbulb className='size-5' />,
    title: "Learning"
},
{
    icon: <PiLightbulb className='size-5' />,
    title: "Learning"
},
{
    icon: <PiLightbulb className='size-5' />,
    title: "Learning"
}


]
const Sidebar = () => {

      const open = useSelector((store) => store.app.open);

    return (
        

            <div className='h-[calc(100vh-4rem)]  w-auto overflow-y-scroll overflow-x-hidden mt-16 fixed bg-white '>

                {
                    sidebarIcons1.map((value) => {
                        return (
                            <div key={Math.random()} className='flex gap-6 ml-4 m-4'>
                                {value.icon}
                                <p className={`${open ? "" : 'hidden'}`}>{value.title}</p>
                            </div>

                        )
                    })
                }

              
                
            </div>



        

    )
}


export default Sidebar;