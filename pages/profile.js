import { gql,useMutation } from "@apollo/client";
import { useContext,useEffect } from "react"
import { UserContext } from "../components/auth/userContext";


const ADD_USER = gql`
    mutation AddUser($issuer:String!,$email:String!) {
      addUser(issuer:$issuer,email:$email) {
        id
        issuer
        email
      }
    }
`;


const Profile = () => {
    const [user] = useContext(UserContext);
    const [addUser,{data}] = useMutation(ADD_USER, {
        onError:(err) => {
            console.log(err);
        }
    });
    // useEffect(() => {
    //     addUser({variables:{issuer:'6590290394',email:'jasonconcessio@gmail.com'}});
    //     console.log(data);
    // },[user])
    return (
        <> 
        {user?.loading ? (
            <p>Loading...</p>
        ) : (
            user?.issuer &&  (
                <>
                <p>Email</p>
                <p>{user.email}</p>
                </>
            )
        )} 


        </>
    )
}
export default Profile;