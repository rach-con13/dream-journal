import Channel from '../../../Models/channel';
import { addEntry, deleteEntry } from '../../Functions/entryFunctions';

const EntryMutation = {
  createEntry: async (root, { channelID, title, content }) => {
    try {
      let newEntry = await addEntry(channelID, title, content);
      // add Entry to Channel

      let currentChannel = await Channel.findOne({ _id: channelID });

      currentChannel.entries.push(newEntry._id);
      currentChannel.save();
      return newEntry;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  deleteEntry: async (root, { id }) => {
    try {
      let deletedEntry = await deleteEntry(id);
      return deletedEntry;
    } catch (err) {
      return { err: err };
    }
  },
};

export default EntryMutation;
