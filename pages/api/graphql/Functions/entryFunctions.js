import Channel from '../../Models/channel';
import Entry from '../../Models/entry';
import connectToDatabase from '../../mongo.config';
export const addEntry = async (channelID, title, content) => {
  try {
    const db = connectToDatabase();
    const newEntry = new Entry({ title, content });
    newEntry.save();

    return newEntry;
  } catch (err) {
    return { err: err };
  }
};
export const deleteEntry = async (id) => {
  try {
    const deleteEntry = await Entry.findByIdAndDelete({ _id: id });
    deleteEntry.save();
    return deleteEntry;
  } catch (err) {
    return { err: err };
  }
};

export const getEntry = async (id) => {
  try {
    const singleEntry = await Entry.findById({ _id: id });
    return singleEntry;
  } catch (err) {
    return { err: err };
  }
};

export const getEntries = async (id) => {
  try {
    const allEntries = await Entry.find({});
    return allEntries;
  } catch (err) {
    return { err: err };
  }
};
