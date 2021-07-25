import connectToDatabase from '../../../mongo.config';
import { getUsers, getUser } from '../../Functions/userFunctions';

const UserQuery = {
  users: async () => {
    let getAllUsers = await getUsers();
    return getAllUsers;
  },
  user: async (_, args) => {
    const db = connectToDatabase();
    let getUserByID = await getUser(args.authID);
    let singleUser = await getUserByID[0];
    console.log(getUserByID);
    return singleUser;
  },
};

export default UserQuery;
