import Channel from '../../../Models/channel';
import User from '../../../Models/user';
import connectToDatabase from '../../../mongo.config';
import { addChannel, updateChannel } from '../../Functions/channelFunctions';

const ChannelMutation = {
  createChannel: async (root, { authID, title }) => {
    let db = connectToDatabase();
    try {
      let newChannel = await addChannel(authID, title);
      console.log(newChannel);
      // add channel to current user

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
