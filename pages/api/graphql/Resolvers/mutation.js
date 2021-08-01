import UserMutation from './Mutations/userMutation';
import EntryMutation from './Mutations/entryMutation';
import ChannelMutation from './Mutations/channelMutation';



const Mutation = {
  ...UserMutation,
  ...EntryMutation,
  ...ChannelMutation
 


};

export default Mutation;
