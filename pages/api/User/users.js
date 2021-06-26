import User from "../Models/user";
import connectToDatabase from "../mongo.config";


// get all entries
export default async (req,res) => {
    const db = await connectToDatabase();
    try {
    const allEntries = await User.find({});
    res.send(allEntries);
    } catch(err) {
        res.send(err);
    }
}