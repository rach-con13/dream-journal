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

export const addUser = async(issuer,email) => {
    try {
        const newUser = new User({issuer,email});
        newUser.save();
        console.log(newUser);
        return newUser;
    } catch (err) {
        console.log(err);
            return {err:err};
    }
}

const deleteUser = (id) => {

}