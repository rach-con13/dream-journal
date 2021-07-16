import User from '../../Models/user';
import connectToDatabase from '../../mongo.config.js';
import bcrypt from 'bcrypt';
export const getUsers = async () => {
  try {
    const allUsers = await User.find({});
    return allUsers;
  } catch (err) {
    return err;
  }
};

export const getUser = async (id) => {
  try {
    const singleUser = await User.find({ _id: id });
    return singleUser;
  } catch (err) {
    return err;
  }
};

export const addUser = async (username, password) => {
  try {
    let hash = await bcrypt.hash(password, 10);
    let newUser = await new User({ username, password: hash });
    await newUser.save();
    return newUser;
  } catch (err) {
    console.log(err);
    return { err: err };
  }
};

export const deleteUser = async (id) => {
  try {
    let deleteUser = await User.findByIdAndDelete({ _id: id });
    return deleteUser;
  } catch (err) {
    return { err: err };
  }
};
