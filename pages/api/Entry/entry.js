import Entry from "../Models/entry";
import connectToDatabase from "../mongo.config";


// post entry
export default async (req,res) => {
    const db = await connectToDatabase();
    const newEntry = new User({
        title:req.body.title,
        content:req.body.content
    })

    await newEntry.save(function(error,document) {
        if(error) console.error(error);
        console.log(document);
    });
    res.send(newEntry);
}