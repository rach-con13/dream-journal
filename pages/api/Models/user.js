import mongoose from 'mongoose';
const { Schema } = mongoose;

const user = new Schema({
  authID: { type: String }, // id of user stored in firebase for authentication
  username: { type: String },
  password: { type: String },
  email: { type: String },
  channels: [{ type: Schema.Types.ObjectId, ref: 'Channel' }],
});

let User = mongoose.models.User || mongoose.model('User', user);
export default User;
