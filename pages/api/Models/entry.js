import mongoose from "mongoose";
const {Schema} = mongoose;

var entry = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String
    }
  });

  let Entry = mongoose.models.entry || mongoose.model('Entry',entry);
  export default Entry;

