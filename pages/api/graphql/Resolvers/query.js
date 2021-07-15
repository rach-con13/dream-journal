import Entry from '../../Models/entry';
import User from '../../Models/user';
import { getChannel, getChannels } from '../Functions/channelFunctions';
import { getEntries, getEntry } from '../Functions/entryFunctions';
import { getUser, getUsers } from '../Functions/userFunctions';

const Queries = {
  users: async () => {
    let getAllUsers = await getUsers();
    return getAllUsers;
  },
  user: async (_, args) => {
    let getUserByID = await getUser(args.id);
    let singleUser = await getUserByID[0];
    return singleUser;
  },
  entries: async () => {
    try {
      const allEntries = await getEntries();
      return allEntries;
    } catch (err) {
      return err;
    }
  },
  entry: async (_, args) => {
    try {
      const oneEntry = await getEntry(args.id);
      return oneEntry;
    } catch (err) {
      return { err: err };
    }
  },
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
export default Queries;
