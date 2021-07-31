import User from '../../../Models/user';
import connectToDatabase from '../../../mongo.config';
import { getUsers, getUser } from '../../Functions/userFunctions';

const UserQuery = {
  users: async () => {
    let getAllUsers = await getUsers();
    return getAllUsers;
  },
  user: async (_, args) => {
    const db = connectToDatabase();
    let singleUser = await User.findOne({
      authID: args.authID,
    }).populate('channels');

    console.log(singleUser);

    return singleUser;
  },
};

export default UserQuery;
