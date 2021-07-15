import Channel from '../../Models/channel';
import connectToDatabase from '../../mongo.config';

export const getChannels = async () => {
  const db = await connectToDatabase();
  try {
    const allChannels = await Channel.find({});
    console.log(allChannels);
    return allChannels;
  } catch (err) {
    return err;
  }
};

export const getChannel = async (id) => {
  const db = await connectToDatabase();
  try {
    const singleChannel = await Channel.find({ _id: id });
    return singleChannel;
  } catch (err) {
    return err;
  }
};

export const addChannel = async (title) => {
  try {
    const newChannel = new Channel({ title, pinned: false });
    newChannel.save();
    return newChannel;
  } catch (err) {
    return { err: err };
  }
};

export const deleteChannel = async (id) => {
  const db = await connectToDatabase();
  try {
    const deleteChannel = await Channel.findById({ _id: id });
    deleteChannel.save();
    return { id: 'fish', title: 'this is a dog' };
  } catch (err) {
    console.log(err);
    return err;
  }
};
