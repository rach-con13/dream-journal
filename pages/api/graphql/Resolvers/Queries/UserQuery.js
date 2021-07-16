const UserQuery = {
  users: async () => {
    let getAllUsers = await getUsers();
    return getAllUsers;
  },
  user: async (_, args) => {
    let getUserByID = await getUser(args.id);
    let singleUser = await getUserByID[0];
    return singleUser;
  },
};

export default UserQuery;
