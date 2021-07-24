import { addUser } from '../../Functions/userFunctions';

const UserMutation = {
  signUp: async (root, { authID, username, password, email }) => {
    try {
      let newUser = await addUser(authID, username, password, email);
      return newUser;
    } catch (err) {
      return err;
    }
  },
};

export default UserMutation;
