import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoBell } from "react-icons/go";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { GoSearch } from "react-icons/go";
import {useDispatch} from "react-redux"
import { toggleSidebar } from "../utils/appslice";



const Navbar = () => {
 
    const dispatch = useDispatch();

const toggleHandler = () =>{
  dispatch(toggleSidebar());
}


    return (
        <div className="flex justify-center items-center w-[100%] bg-white fixed">
            <div className="flex w-[100%] justify-between items-center px-5 py-1 mt-3  " >
                <div className="flex items-center">
                    <GiHamburgerMenu size={23} onClick={toggleHandler} className="cursor-pointer"/>
                    <img className="px-2" width={"115px"} src="https://imgs.search.brave.com/JmEbFqErYArCvFLIxe9ntlhA1yCSR8XM1xT0WrbvCug/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NjUwMTI1/NXlvdXR1YmUtbG9n/by1wbmcucG5n" alt="yt_logo" />
                </div>
                <div className="flex w-[40%] items-center" >
                    <div className="w-[90%]  h-10 ">
                        <input type="text"  placeholder="search" className=" w-full pl-5 rounded-l-3xl  h-10  border-gray-400 border outline-blue-600" />
                    </div>
                    <button className=" h-10  rounded-r-3xl bg-gray-200 border border-gery-400 border-l-0 " >
                    <GoSearch className="size-5 w-16 " />
                    </button>
                </div>
                <div className="flex items-center gap-6">
                    <GoBell  className="size-6 cursor-pointer"/>
                    <CiVideoOn className="size-6 cursor-pointer" />
                    <Avatar  className="cursor-pointer"src="https://wallpapers.com/images/featured/anonymous-pictures-j89s1ratkktsm42d.jpg" size={35} round={true} />
                </div>
            </div>
        </div>
    )
}


export default Navbar;