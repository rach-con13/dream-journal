import { ApolloServer, gql } from 'apollo-server-micro';
import Entry from '../Models/entry';
import User from '../Models/user';
import { addUser, getUser, getUsers } from './Functions/userFunctions.js';
import connectToDatabase from '../mongo.config.js';

import typeDefs from './types';
import Queries from './Resolvers/query';
import Mutation from './Resolvers/mutation';

const resolvers = {
  ChannelResult:{
    __resolveType(obj) {
      if(obj.title) return 'Channel'
      return 'Error'
    }
  },
  UserResult:{
    __resolveType(obj) {
      if(obj.message) return 'Error'
      return 'User'
    }
  },
  Query: {
    ...Queries,
  },
  Mutation: {
    ...Mutation,
  },
};

let db;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    if (!db) {
      try {
        const dbClient = connectToDatabase();
        db = dbClient;
      } catch (e) {
        console.log('error connecting graphql context');
      }
    }
    return { db };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({
  path: '/api/graphql',
});
