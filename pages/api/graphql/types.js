import {gql} from "apollo-server-micro";

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