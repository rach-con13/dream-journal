import { gql, useQuery } from '@apollo/client';
import React from 'react'
import SidebarEntry from "./sidebarEntry";
import ChannelBar from "../channel/channelBar";
import ChannelEntriesBar from '../channel/channelEntriesBar';
import ChannelSettings from '../channel/channelSetting';
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
       <div className="h-full transition-all bg-primary-superdark">
            <ChannelBar toggle={props.toggle} />
       </div>
    )
}
