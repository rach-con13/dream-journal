import { gql ,useMutation} from 'apollo-server-micro';
import Router from "next/router";
import React, {  useEffect, useState } from 'react'
import AuthField from '../components/auth/authField'
//import { UserContext } from '../components/auth/userContext';
// import { LoginSchema } from '../components/auth/validateAuth';
// import { magic } from '../lib/magic/magic.config';

// const SIGN_UP = gql`
//     mutation SignUp($username:String!,$password:String!) {
//       signUp(username:$username,password:$password) {
//         id
//         username
//         password
//       }
//     }
// `;


export default function Login(props) {
    const [disabled,setDisabled] = useState(false);
    // const [user,setUser] = useContext(UserContext);

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState("");

     const handleSubmit = (e) => {
       e.preventDefault();
       console.log({username,password});
      //  signUp({variables:{username,password}});
       console.log(data);
       setDisabled(true);
     }

    return (
        <div className="h-screen bg-light relative">
           <div  className=" bg-superlight rounded-sm  w-4/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <header className=" border-b border-solid border-light">
                    <div className="mx-auto w-10/12 py-4 flex items-center justify-between">
                        <p className="font-semibold text-2xl text-dark ">Login</p>

                    </div>
                </header>
          
            
            <form onSubmit={handleSubmit} className="shadow-md mx-auto  w-full text-right">
    
             <AuthField type='username' name="username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <AuthField type='password' name="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
               <button type='submit' disabled={disabled} className=" px-8 py-4 bg-dark text-light font-bold">Login</button>
            </form>
            </div>
        </div>
    )
}
