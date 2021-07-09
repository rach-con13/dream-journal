import bcrypt from "bcrypt";
import Entry from "../../Models/entry";
import User from "../../Models/user";
import connectToDatabase from "../../mongo.config";

const Mutation = {
    signUp: async (root, { username, password }) => {
        try {
            let db = connectToDatabase();

            let hash = await bcrypt.hash(password, 10);
            let newUser = await new User({ username, password: password });
            await newUser.save();
            return newUser;
        } catch (err) {
            console.log(err);
            return err;
        }
    },
    createEntry: async (root, { title, content }) => {
        try {
            let db = connectToDatabase();
            let newEntry = await new Entry({ title, content });
            console.log(newEntry);
            await newEntry.save();
            return newEntry;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}

export default Mutation;