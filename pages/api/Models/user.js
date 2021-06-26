import mongoose from "mongoose";
const {Schema} = mongoose;

var user = new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email:{
        type:String,
    }
  });

  let User = mongoose.models.User || mongoose.model('User',user);
  export default User;
