import mongoose from "mongoose";
const {Schema} = mongoose;

var user = new Schema({
    username:{type:String},
    password:{type:String}
  });

  let User = mongoose.models.User || mongoose.model('User',user);
  export default User;
