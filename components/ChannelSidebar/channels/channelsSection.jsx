import { useQuery } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { GET_USER_CHANNELS } from '../../../lib/apolloClient/Functions/user';
import Channel from '../channel/channel';
import PropTypes from 'prop-types';
import { UserContext } from '../../../contexts/userContext';

export default function ChannelsSection({ pinned }) {
  const { data, loading, error, selectedChannel, setSelected } =
    useContext(UserContext);

  const selectChannel = (e) => {
    let channelID = e.currentTarget.dataset.id;
    setSelected(channelID);
  };

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      {data?.user?.channels.map((channel) => {
        let getChannels = pinned ? channel.pinned : !channel.pinned;

        let isSelected = channel.id == selectedChannel ? true : false;

        if (getChannels) {
          return (
            <Channel
              id={channel.id}
              color="bg-gray-500"
              onClick={selectChannel}
              selected={isSelected}
              title={channel.title}
            />
          );
        }
      })}
    </>
  );
}
ChannelsSection.propTypes = {
  pinned: PropTypes.bool,
};
