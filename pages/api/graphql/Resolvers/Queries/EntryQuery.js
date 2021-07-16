import { getEntries, getEntry } from '../../Functions/entryFunctions';

const EntryQuery = {
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
};

export default EntryQuery;
