import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    id: String
    username: String
    password: String
  }
  type Entry {
    id: String
    title: String
    content: String
  }
  type Channel {
    id: String
    title: String
    pinned: Boolean
  }
  type Query {
    users: [User]
    user(id: String): User
    entries: [Entry]
    entry(id: String): Entry
    channel(id: String): Channel
    channels: [Channel]
  }
  type Mutation {
    signUp(username: String, password: String): User
    createEntry(title: String, content: String): Entry
    deleteEntry(id: String): Entry
    createChannel(title: String, pinned: Boolean): Channel
    deleteChannel(id: String): Channel
    updateChannel(id: String, title: String): Channel
  }
`;
export default typeDefs;
