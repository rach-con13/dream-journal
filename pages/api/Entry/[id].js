import Entry from "../Models/entry";
import connectToDatabase from "../mongo.config";

export default async (req,res) => {
    const db = await connectToDatabase();
    const {id} = req.query;
    try {
    const oneEntry = await Entry.find({_id:id});
    res.send(oneEntry);
    } catch(err) {
        res.send(err);
    }
}