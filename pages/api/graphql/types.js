import { gql } from 'apollo-server-micro';




const typeDefs = gql`
  type User {
    id: String
    authID: String
    username: String!
    password: String!
    email: String!
    channels: [Channel]
  }
  type Entry {
    id: String
    title: String!
    content: String
  }
  type Channel {
    id: String
    title: String!
    pinned: Boolean
    entries: [Entry]
  }
  type Error {
    message:String,

  }
  union ChannelResult = Channel | Error
  union UserResult = User | Error

  type Query {
    users: [User]
    user(authID: String): User
    entries: [Entry]
    entry(id: String): Entry
    channel(id: String): ChannelResult
    channels: [Channel]
  }
  type Mutation {
    signUp(
      authID: String
      username: String
      password: String
      email: String
    ): User
    createEntry(channelID: String, title: String, content: String): Entry
    deleteEntry(id: String): Entry
    createChannel(authID: String!, title: String, pinned: Boolean): ChannelResult!
    deleteChannel(id: String): Channel
    updateChannel(id: String, title: String, pinned: Boolean): Channel
  }
`;
export default typeDefs;
