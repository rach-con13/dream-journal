import React from 'react'
import {CgProfile} from "react-icons/cg";
import {AiOutlineSetting} from "react-icons/ai";
import {FiBook} from "react-icons/fi";
import {IoMdNotificationsOutline} from "react-icons/Io";
export default function SettingBar(props) {
    

    return (
        <div className="bg-extradark">
            <div  className="px-4 mt-4">
                <p  className="block text-light text-center text-2xl">
                  <CgProfile />
                </p>
                <div className="mt-8 text">
                <p  className="block text-center text-2xl">
                        <AiOutlineSetting />
                </p>
                <p  className="  text-center text-2xl mt-2">
                <FiBook />
                </p>
                <p  className="  text-center text-2xl mt-2">
                 
                       <IoMdNotificationsOutline />
                </p>
                 
                </div>
            </div>
        </div>
    )
}
