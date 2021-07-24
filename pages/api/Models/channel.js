import mongoose from 'mongoose';
const { Schema } = mongoose;

const channel = new Schema({
  title: {
    type: String,
    required: true,
  },
  pinned: { type: Boolean, default: false },
  entries: [{ type: Schema.Types.ObjectId, ref: 'Entry' }],
});

let Channel = mongoose.models?.Channel || mongoose.model('Channel', channel);
export default Channel;
