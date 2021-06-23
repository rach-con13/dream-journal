import React from 'react'
import SidebarEntry from "./sidebarEntry";
export default function Sidebar(props) {
    

    return (
       <div className="col-span-3 bg-blue-900">
           <header className="border-b  border-blue-700 border-solid">
               <div className="mx-auto w-10/12 py-3">
                   <p className="text-lg text-gray-200 font-bold ">Dreamer</p>
               </div>
           </header>
           <div className="mx-auto w-10/12 mt-6">
               <p className="text-base text-gray-300 ">Entries</p>
               <div className="">
                    <SidebarEntry />
                    <SidebarEntry />
               </div>
           </div>
       </div>
    )
}
