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
    type User {
        id:Int,
        username:String,
        password:String,
        email:String
    }
    type Entry {
        id:Int
        title:String
        body:String
    }
    type Query {
        users:[User]
        user(id:Int):User
        entries: [Entry]
        entry(id:Int):Entry
    }

`;

const resolvers = {
    Query: {
        entries:() => {
            return entries;
        },
        entry:(_,args) => {
            let currentEntry = entries.filter(entry => entry.id == args.id);
            return currentEntry && currentEntry[0];
        }
    }
}
const server = new ApolloServer({typeDefs,resolvers});

export  const  config  =  {
    api:  {
        bodyParser:  false
    }
};


export default server.createHandler({
    path:'/api/graphql'
})