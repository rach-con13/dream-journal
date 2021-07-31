import connectToDatabase from '../../../mongo.config';
import { addUser } from '../../Functions/userFunctions';

const UserMutation = {
  signUp: async (root, { authID, username, password, email }) => {
    try {
      let db = connectToDatabase();
      let newUser = await addUser(authID, username, password, email);
      console.log(newUser);
      return newUser;
    } catch (err) {
      return err;
    }
  },
};

export default UserMutation;
