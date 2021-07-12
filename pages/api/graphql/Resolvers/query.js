import Entry from '../../Models/entry';
import User from '../../Models/user';
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
    const { id } = args;
    try {
      const oneEntry = await getEntry(args.id);
      return oneEntry;
    } catch (err) {
      return { err: err };
    }
  },
};
export default Queries;
