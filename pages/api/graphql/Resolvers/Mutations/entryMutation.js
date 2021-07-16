import { addEntry, deleteEntry } from '../../Functions/entryFunctions';

const EntryMutation = {
  createEntry: async (root, { title, content }) => {
    try {
      let newEntry = await addEntry(title, content);
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
