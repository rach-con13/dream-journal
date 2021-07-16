import { addUser } from '../../Functions/userFunctions';

const UserMutation = {
  signUp: async (root, { username, password }) => {
    try {
      let newUser = await addUser(username, password);
      return newUser;
    } catch (err) {
      return err;
    }
  },
};

export default UserMutation;
