import { useFormik } from 'formik';
import React, { useState } from 'react';
import AuthField from '../components/auth/authField';
import { createUser } from '../lib/firebase/authFunctions';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../lib/apolloClient/Functions/user';
import Firebase from '../lib/firebase/firebase.config';
import UseError from '../hooks/useError';
import Error from "../components/error/error";
export default function SignUp(props) {
  const { register, handleSubmit } = useForm();
  const [registerUser, { error, data }] = useMutation(SIGN_UP,{errorPolicy:"all"});
  const [authID, setAuthID] = useState(null);
  const {message,setErrorMessage} = UseError();
  const handleRegistration = async ({email,password,username}) => {
    try {
    let variables = {
      authID:4,
      username:username,
      password:password,
      email:email
    }
    registerUser({
      variables
    })
    
  } catch(err) {

    setErrorMessage(err);

  }
    // Firebase.auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;

    //     let variables = {
    //       authID: user.uid,
    //       username: username,
    //       password: password,
    //       email: email,
    //     };
    //     registerUser({
    //       variables,
    //     });
    //     console.log({data})

    //     // ...
    //   })
    //   .catch((error) => {
   
    //     var errorMessage = error.message;

    //     setErrorMessage(errorMessage)
    //     // ..
    //   });
  };

  return (
    <div className="relative h-screen bg-primary-superdark">
      <div className="absolute w-4/12 py-4 transform -translate-x-1/2 -translate-y-1/2  bg-primary-superlight top-1/2 left-1/2 ">
        <header className="w-10/12 mx-auto ">
          <p className="text-2xl font-semibold text-primary-dark ">Sign Up</p>
        </header>

        <form
          onSubmit={handleSubmit(handleRegistration)}
          className="w-full mx-auto mt-4 text-right"
        >
          <AuthField
            register={register('username')}
            type="text"
            name="username"
            label="Username"
          />

          <AuthField
            register={register('password')}
            type="password"
            name="password"
            label="Password"
          />

          <AuthField
            register={register('email')}
            type="email"
            name="email"
            label="Email"
          />

          <button
            type="submit"
            className="px-8 py-2 mt-2 rounded-sm bg-primary-superlight"
          >
            Sign Up
          </button>
        </form>
        {message ? 
        <Error message={message} />
: null}
      </div>
    </div>
  );
}
