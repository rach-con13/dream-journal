import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_CHANNELS } from '../../lib/apolloClient/Functions/channel';
import Channel from '../channel/channel';

const Channels = () => {
  const [selected, setSelected] = useState(null);
  const { loading, error, data } = useQuery(GET_CHANNELS);

  if (loading) return 'Loading';
  if (error) return 'Error';

  const selectChannel = (e) => {
    let channelID = e.currentTarget.dataset.id;
    setSelected(channelID);
  };

  return (
    <>
      <div className="w-10/12 mx-auto mt-8">
        <h4 className="text-base font-bold ">Pinned Channels</h4>
        {data.channels.map((channel) => {
          const isSelected = channel.id === selected ? true : false;

          if (channel.pinned)
            return (
              <Channel
                onClick={selectChannel}
                selected={isSelected}
                id={channel.id}
                key={channel.id}
                color="bg-gray-500"
                title={channel.title}
              />
            );
        })}
      </div>
      <div className="w-10/12 mx-auto mt-4">
        <h4 className="text-base font-bold">Channels</h4>
        {data.channels.map((channel) => {
          const isSelected = channel.id === selected ? true : false;

          if (!channel.pinned)
            return (
              <Channel
                onClick={selectChannel}
                selected={isSelected}
                id={channel.id}
                key={channel.id}
                color="bg-gray-500"
                title={channel.title}
              />
            );
        })}
      </div>
      <div className="w-10/12 mx-auto mt-4">
        <h4 className="text-base font-bold">Recently Opened</h4>
      </div>
    </>
  );
};

export default Channels;
