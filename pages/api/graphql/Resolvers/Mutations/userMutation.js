import { ApolloError } from 'apollo-server-micro';
import connectToDatabase from '../../../mongo.config';
import { addUser } from '../../Functions/userFunctions';

const UserMutation = {
  signUp: async (root, { authID, username, password, email }) => {
    try {
      let error = {};

      if(!username) {
        throw new ApolloError("Username is required")
        
      }
      if(!password) {
        throw new ApolloError("Password is required");
      }
      // if(!password) {
      //   error = {message:"Password is required"}
      //   return error;
      // }
      // if(!email) {
      //   error = {message:"Email is required"}
      //   return error;
      // }

      let newUser = await addUser(authID, username, password, email);
   
      return newUser;
    } catch (err) {
      return err;
    }
  },
};

export default UserMutation;
