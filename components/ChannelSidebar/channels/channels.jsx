import { useQuery } from '@apollo/client';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/userContext';
import { GET_CHANNELS } from '../../../lib/apolloClient/Functions/channel';
import { GET_USER_CHANNELS } from '../../../lib/apolloClient/Functions/user';
import Firebase from '../../../lib/firebase/firebase.config';
import Channel from '../channel/channel';
import ChannelsSection from './channelsSection';

const Channels = () => {
  const [selected, setSelected] = useState(null);

  const selectChannel = (e) => {
    let channelID = e.currentTarget.dataset.id;
    setSelected(channelID);
  };

  return (
    <>
      <div className="w-10/12 mx-auto mt-8">
        <h4 className="text-base font-bold ">Pinned Channels</h4>
        <ChannelsSection pinned={true} />
      </div>
      <div className="w-10/12 mx-auto mt-4">
        <h4 className="text-base font-bold">Channels</h4>
        <ChannelsSection pinned={false} />
      </div>
      <div className="w-10/12 mx-auto mt-4">
        <h4 className="text-base font-bold">Recently Opened</h4>
      </div>
    </>
  );
};

export default Channels;
