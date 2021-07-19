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
  updateChannel: async (root, { id, title, pinned }) => {
    try {
      let updateChannel = await Channel.findByIdAndUpdate(
        { _id: id },
        { title, pinned }
      );

      updateChannel.save();
      console.log(updateChannel);
      return updateChannel;
    } catch (err) {
      return { err: err };
    }
  },
};

export default ChannelMutation;
