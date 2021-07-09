import { gql } from "apollo-server-micro";

const typeDefs = gql`
    type User {
        id:String,
        username:String,
        password:String
    }
    type Entry {
        id:String
        title:String
        content:String
    }
    type Query {
        users:[User]
        user(id:String):User
        entries: [Entry]
        entry(id:String):Entry
    }
    type Mutation {
        signUp(username:String,password:String):User,
        createEntry(title:String,content:String):Entry
    }
    
    

`;
export default typeDefs;