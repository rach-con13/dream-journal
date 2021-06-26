
import User from "../Models/user";
import connectToDatabase from "../mongo.config";

export default async (req,res) => {
    const db = await connectToDatabase();
    const {id} = req.query;
    try {
    const oneEntry = await User.find({_id:id});
    res.send(oneEntry);
    } catch(err) {
        res.send(err);
    }
}