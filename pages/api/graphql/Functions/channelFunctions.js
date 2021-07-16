import Channel from '../../Models/channel';
import connectToDatabase from '../../mongo.config';

export const getChannels = async () => {
  try {
    const allChannels = await Channel.find({});
    console.log(allChannels);
    return allChannels;
  } catch (err) {
    return err;
  }
};

export const getChannel = async (id) => {
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
  try {
    const deleteChannel = await Channel.findById({ _id: id });
    deleteChannel.save();
    return { id: 'fish', title: 'this is a dog' };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const updateChannel = async (id, title) => {
  try {
    const updateChannel = await Channel.findByIdAndUpdate(
      { _id: id },
      {
        title,
      }
    );
    return updateChannel;
  } catch (err) {
    return err;
  }
};