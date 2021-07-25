import Channel from '../../Models/channel';
import User from '../../Models/user';
import connectToDatabase from '../../mongo.config';

export const getChannels = async () => {
  try {
    const db = connectToDatabase();
    const allChannels = await Channel.find({});

    return allChannels;
  } catch (err) {
    return err;
  }
};

export const getChannel = async (id) => {
  try {
    const db = connectToDatabase();
    const singleChannel = await Channel.findOne({ _id: id }).populate(
      'entries'
    );
    console.log(singleChannel);
    return singleChannel;
  } catch (err) {
    return err;
  }
};

export const addChannel = async (authID, title) => {
  try {
    const db = connectToDatabase();
    const newChannel = new Channel({ title, pinned: false });
    newChannel.save();

    let currentUser = await User.findOne({ authID: authID });
    currentUser.channels.push(newChannel._id);
    currentUser.save();

    return newChannel;
  } catch (err) {
    return { err: err };
  }
};

export const deleteChannel = async (id) => {
  try {
    const db = connectToDatabase();
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
    const db = connectToDatabase();
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
