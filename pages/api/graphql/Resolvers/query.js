import Entry from '../../Models/entry';
import User from '../../Models/user';
import { getChannel, getChannels } from '../Functions/channelFunctions';
import { getEntries, getEntry } from '../Functions/entryFunctions';
import { getUser, getUsers } from '../Functions/userFunctions';
import ChannelQuery from './Queries/ChannelQuery';
import EntryQuery from './Queries/EntryQuery';
import UserQuery from './Queries/UserQuery';

const Queries = {
  ...UserQuery,
  ...EntryQuery,
  ...ChannelQuery,
};
export default Queries;
