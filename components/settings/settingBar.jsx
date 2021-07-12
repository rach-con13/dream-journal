import React from 'react'
import {CgProfile} from "react-icons/cg";
import {AiOutlineSetting} from "react-icons/ai";
import {FiBook} from "react-icons/fi";
import {IoMdNotificationsOutline} from "react-icons/Io";
export default function SettingBar(props) {
    

    return (
        <div  className="h-screen bg-secondary text-secondary-superlight">
            <div  className="px-4 mt-4">
                <p  className="block text-2xl text-center">
                  <CgProfile />
                </p>
                <div className="mt-8 text">
                <p  className="block text-2xl text-center">
                        <AiOutlineSetting />
                </p>
                <p  className="mt-2 text-2xl text-center ">
                <FiBook />
                </p>
                <p  className="mt-2 text-2xl text-center ">
                 
                       <IoMdNotificationsOutline />
                </p>
                 
                </div>
            </div>
        </div>
    )
}
