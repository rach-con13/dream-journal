import { useQuery } from '@apollo/client';
import React from 'react';
import WithSelected from '../../../hooks/withSelected';
import { GET_CHANNELS } from '../../../lib/apolloClient/Functions/channel';
import ChannelItem from '../channelItem/channelItem';

export default function Channels(props) {
  const {selected,setSelected} = WithSelected();
  const {loading,error,data} = useQuery(GET_CHANNELS);

  if(loading) return 'Loading';
  if(error) return 'Error';


  const selectChannel = (e) => {
    let channelID = e.currentTarget.dataset.id;
    setSelected(channelID);
}
  
  return (
    <>
   
      <div className="w-10/12 mx-auto mt-8">
        <h4 className="text-base font-bold ">Pinned Channels</h4>
        <ChannelItem color="bg-red-500" name="Language Learning" />
        <ChannelItem color="bg-blue-500" name="Toastmasters" />
      </div>
      <div className="w-10/12 mx-auto mt-4">
        <h4 className="text-base font-bold">Channels</h4>
        {data.channels.map(channel => {
          const isSelected = channel.id === selected ? true : false;
          return <ChannelItem onClick={selectChannel} selected={isSelected} id={channel.id} key={channel.id} color='bg-gray-500' name={channel.title} />
        })}
      </div>
      <div className="w-10/12 mx-auto mt-4">
        <h4 className="text-base font-bold">Recently Opened</h4>
        <ChannelItem color="bg-red-500" name="Language Learning" />
      </div>
    </>
  );
}
