import User from "../Models/user";
import connectToDatabase from "../mongo.config";


// post entry
export default async (req,res) => {
    const db = await connectToDatabase();
    const newEntry = new User({
        username:'Fairy121',
        password:'disney13',
        email:'rachaelconcessio@gmail.com'
    })

    await newEntry.save(function(error,document) {
        if(error) console.error(error);
        console.log(document);
    });
    res.send(newEntry);
}