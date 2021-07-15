import bcrypt from 'bcrypt';
import Entry from '../../Models/entry';
import User from '../../Models/user';
import connectToDatabase from '../../mongo.config';
import { addChannel, deleteChannel } from '../Functions/channelFunctions';
import { addEntry, deleteEntry } from '../Functions/entryFunctions';
import { addUser } from '../Functions/userFunctions';

const Mutation = {
  signUp: async (root, { username, password }) => {
    try {
      let db = connectToDatabase();
      let newUser = await addUser(username, password);
      return newUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  createEntry: async (root, { title, content }) => {
    try {
      let db = connectToDatabase();
      let newEntry = await addEntry(title, content);
      return newEntry;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  deleteEntry: async (root, { id }) => {
    try {
      let db = connectToDatabase();
      let deletedEntry = await deleteEntry(id);
      return deletedEntry;
    } catch (err) {
      return { err: err };
    }
  },
  createChannel: async (root, { title, pinned }) => {
    try {
      let db = connectToDatabase();
      let newChannel = await addChannel(title);
      return newChannel;
    } catch (err) {
      return { err: err };
    }
  },
  deleteChannel: async (root, { id }) => {
    try {
      let db = connectToDatabase();
      let deleteChannel = await deleteChannel(id);
      console.log(deleteChannel);
      return { title: 'rachael', id: '454' };
    } catch (err) {
      return { err: err };
    }
  },
};

export default Mutation;
