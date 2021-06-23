import {ApolloServer, gql} from "apollo-server-micro";

const entries = [
    {
      id: 1,
      title: 'Cookie Dilemma',
      body: 'This was the biggest problem she had ever',
    },
    {
      id: 2,
      title: 'Brownie Day',
      body:"What a glorious day it was"
    },
  ];
  

const typeDefs = gql`
    type Entry {
        id:Int
        title:String
        body:String
    }
    type Query {
        entries: [Entry]
    }

`;

const resolvers = {
    Query: {
        entries:() => {
            return entries;
        }
    }
}
const server = new ApolloServer({typeDefs,resolvers});

export default server.createHandler({
    path:'/api/graphql'
})