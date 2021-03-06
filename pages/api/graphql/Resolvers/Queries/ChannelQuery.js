import Channel from '../../../Models/channel';
import connectToDatabase from '../../../mongo.config';
import { getChannel, getChannels } from '../../Functions/channelFunctions';

const ChannelQuery = {
  channels: async (_, args) => {
    const db = connectToDatabase();
    try {
      const allChannels = await getChannels();
      return allChannels;
    } catch (err) {
      return { err: err };
    }
  },
  channel: async (_, args) => {
    try {
      const db = connectToDatabase();

      const singleChannel = await Channel.findOne({ _id: args.id }).populate(
        'entries'
      );
      

      return singleChannel;
    } catch (err) {
      return err;
    }
  },
};

export default ChannelQuery;
