import {ApolloServer, gql} from "apollo-server-micro";
import Entry from "../Models/entry";
import User from "../Models/user";
import {getUsers} from "./Functions/userFunctions.js";
import connectToDatabase from "../mongo.config.js";


const typeDefs = gql`
    type User {
        id:String,
        username:String,
        password:String,
        email:String
    }
    type Entry {
        id:String
        title:String
        body:String
    }
    type Query {
        users:[User]
        user(id:String):User
        entries: [Entry]
        entry(id:String):Entry
    }

`;

const resolvers = {
    Query: {
        users:async() => {
         
            const db = await connectToDatabase();
            console.log(db);
            try {
                const allUsers = await User.find({});
                return allUsers;
            } catch(err) {
                return err;
            }
        },
        user:async(_,args) => {
            const db = await connectToDatabase();
            try {
                const singleUser = await User.find({_id:args.id});
                return singleUser;
            } catch (err) {
                return err;
            }
        },
        entries:async() => {
            const db = await connectToDatabase();
            try {
                const allEntries = await Entry.find({});
                return allEntries;
            } catch (err) {
                return err;
            }
    
        },
        entry:async(_,args) => {
               const db = await connectToDatabase();
                const {id} = args;
                console.log(id);
                try {
                const oneEntry = await Entry.find({_id:"60d667490e10c0869495226a"});
                return oneEntry;
                } catch(err) {
                    return {err:err}
                }
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