import { getChannel, getChannels } from '../../Functions/channelFunctions';

const ChannelQuery = {
  channels: async (_, args) => {
    try {
      const allChannels = await getChannels();
      return allChannels;
    } catch (err) {
      return { err: err };
    }
  },
  channel: async (_, args) => {
    try {
      const oneChannel = await getChannel(args.id);
      return oneChannel;
    } catch (err) {
      return { err: err };
    }
  },
};

export default ChannelQuery;
