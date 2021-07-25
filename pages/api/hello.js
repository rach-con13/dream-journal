// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getChannels } from './graphql/Functions/channelFunctions';
import Channel from './Models/channel';
import User from './Models/user';
export default async function helloAPI(req, res) {
  try {
    let channels = await User.find({});
    console.log(channels);
    res.send(channel);
  } catch (err) {
    res.send(err.response);
  }
}
