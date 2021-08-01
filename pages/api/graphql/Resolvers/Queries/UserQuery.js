import User from '../../../Models/user';
import connectToDatabase from '../../../mongo.config';
import mongoose from "mongoose";
import { getUsers, getUser } from '../../Functions/userFunctions';

const UserQuery = {
  users: async () => {
    let getAllUsers = await getUsers();
    return getAllUsers;
  },
  user: async (_, args) => {   
    let error = {};


    let singleUser = await User.findOne({
      authID: args.authID,
    }).populate('channels');

 
   
    if(!singleUser) {
      error = {message:"User does not exist"}
      return error;
    }

    
    return singleUser;
  },
};

export default UserQuery;
