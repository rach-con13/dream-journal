import { gql, useQuery } from '@apollo/client';
import React from 'react'
import SidebarEntry from "./sidebarEntry";

const USERS = gql`
 query getUsers {
    users {
        id
        username
        password
        email
    }
 }
`;

export default function Sidebar(props) {
    // const {loading,error,data} = useQuery(USERS);

    // if(loading) return <p>Loading...</p>
    // if (error) return <p>Error</p>

    // console.log(data);

    return (
       <div className="col-span-3 bg-superlight">
       
            <header >
               <div className="mx-auto w-10/12 py-3">
                   <p className="text-lg text-extradark font-bold ">Dreamer</p>
               </div>
           </header>
           <div className="mx-auto w-10/12 mt-6">
               <p className="text-base text-text font-bold">Entries</p>
               <div className="text-text">
                    <SidebarEntry />
                    <SidebarEntry />
               </div>
           </div> 
       </div>
    )
}
