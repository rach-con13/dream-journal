import User from "../../Models/user";
import connectToDatabase from "../../mongo.config.js";
export const getUsers = async() => {
       const db = await connectToDatabase();
       try {
        const allUsers = await User.find({});
        return allUsers;
       } catch(err) {
        return err;
       }
}

export const getUser = async(id) => {
        const db = await connectToDatabase();
            try {
                const singleUser = await User.find({_id:id});
                return singleUser;
            } catch(err) {
                return err;
            }
}

const deleteUser = (id) => {

}