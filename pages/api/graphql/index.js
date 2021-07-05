import {ApolloServer, gql} from "apollo-server-micro";
import Entry from "../Models/entry";
import User from "../Models/user";
import {addUser, getUser, getUsers} from "./Functions/userFunctions.js";
import connectToDatabase from "../mongo.config.js";
import Cookies from "cookies";
import jwt from "jsonwebtoken";

const typeDefs = gql`
    type User {
        id:String,
        username:String,
        password:String
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
    type Mutation {
        signUp(id:String,username:String,password:String):User
    }

`;

const verifyToken = (token) => {
    if (!token) return null;
    try {
        return jwt.verify(token,process.env.SECRET);
    } catch {
        return null;
    }
}

const resolvers = {
    Query: {
        users:async() => {
            let getAllUsers = await getUsers();
            return getAllUsers;
            
        },
        user:async(_,args) => {
            let getUserByID = await getUser(args.id);
            let singleUser = await getUserByID[0];
            return singleUser;
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
    },
    Mutation: {
        addUser:async(root,args) => {
            try {
                const newUser = new User({issuer:args.issuer,email:args.email});
                await newUser.save();
                console.log(newUser);
                return newUser;
            } catch (err) {
                console.log(err);
                    return {err:err};
            }
        },
        signUp:async(root,{username,password},context) => {
            let hash = await bcrypt.hash(password,10);
            let newUser = new User({username,password:hash});
            await newUser.save();
            console.log(newUser);
          
            let token = jwt.sign({id:newUser._id},process.env.SECRET);
            context.cookies.set("auth-token",token, {
                httpOnly:true,
                sameSite:"lax",
                maxAge:6*60*60
            })

            return newUser;
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers, 
    context:({req,res}) => {
        const cookies = new Cookies(req,res);
        const token = cookies.get("auth-token");
        const user = verifyToken(token);
        return {
            cookies,
            user
        }
    }


});

export  const  config  =  {
    api:  {
        bodyParser:  false
    }
};


export default server.createHandler({
    path:'/api/graphql'
})