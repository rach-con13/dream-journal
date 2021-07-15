import { ApolloServer, gql } from 'apollo-server-micro';
import Entry from '../Models/entry';
import User from '../Models/user';
import { addUser, getUser, getUsers } from './Functions/userFunctions.js';
import connectToDatabase from '../mongo.config.js';
import Cookies from 'cookies';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import typeDefs from './types';
import Queries from './Resolvers/query';
import Mutation from './Resolvers/mutation';

const resolvers = {
  Query: {
    ...Queries,
  },
  Mutation: {
    ...Mutation,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({
  path: '/api/graphql',
});
