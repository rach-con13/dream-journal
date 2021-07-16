import Channel from '../../../Models/channel';
import { addChannel, updateChannel } from '../../Functions/channelFunctions';

const ChannelMutation = {
  createChannel: async (root, { title, pinned }) => {
    try {
      let newChannel = await addChannel(title);
      return newChannel;
    } catch (err) {
      return { err: err };
    }
  },
  deleteChannel: async (root, { id }) => {
    try {
      let deleteChannel = await Channel.findByIdAndDelete({ _id: id });
      return deleteChannel;
    } catch (err) {
      return { err: err };
    }
  },
  updateChannel: async (root, { id, title }) => {
    try {
      let updateChannel = await Channel.findByIdAndUpdate(
        { _id: id },
        { title }
      );
      updateChannel.save();
      return updateChannel;
    } catch (err) {
      return { err: err };
    }
  },
};

export default ChannelMutation;
