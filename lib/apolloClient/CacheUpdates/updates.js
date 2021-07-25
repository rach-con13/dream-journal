import { GET_CHANNELS } from '../Functions/channel';

export const UpdateChannelsAfterCreate = (cache, createChannel) => {
  const data = cache.readQuery({ query: GET_CHANNELS });
  if (data) {
    console.log(data);
    cache.writeQuery({
      query: GET_CHANNELS,
      data: { channels: data.channels.concat([createChannel]) },
    });
  }
};

export const UpdateCacheAfterDelete = (cache, { data }) => {
  // If this is for the public feed, do nothing

  let deletedID = data.deleteChannel.id;
  const { channels } = cache.readQuery({ query: GET_CHANNELS });
  const allChannels = channels.filter((channel) => channel.id !== deletedID);
  cache.writeQuery({
    query: GET_CHANNELS,
    data: { channels: allChannels },
  });
};

export const UpdateCacheAfterUpdate = (cache, { data }) => {
  const { channels } = cache.readQuery({ query: GET_CHANNELS });
  console.log(data);
  cache.writeQuery({
    query: GET_CHANNELS,
    data: { channels },
  });
};
