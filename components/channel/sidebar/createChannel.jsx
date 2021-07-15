import { useMutation } from '@apollo/client'
import React from 'react'
import { CREATE_CHANNEL } from '../../../lib/apolloClient/Functions/channel'

export default function CreateChannel(props) {
    const [createChannel,{data}] = useMutation(CREATE_CHANNEL);

    const createNewChannel = () => {
        createChannel({variables:{title:"Untitled",pinned:false}});
        console.log(data);
    }

    return (
        <>
        <div className="py-4 mx-auto bg-primary-dark">
          <div onClick={createNewChannel}  className="w-10/12 mx-auto">
            <p className="text-base font-bold">New Channel</p>
          </div>
        </div>
        </>
    )
}
