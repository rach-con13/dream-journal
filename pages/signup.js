import { useFormik } from 'formik';
import React, { useState } from 'react';
import AuthField from '../components/auth/authField';
import { createUser } from '../lib/firebase/authFunctions';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../lib/apolloClient/Functions/user';
import Firebase from '../lib/firebase/firebase.config';
export default function SignUp(props) {
  const { register, handleSubmit } = useForm();
  const [registerUser, { data }] = useMutation(SIGN_UP);
  const [authID, setAuthID] = useState(null);
  const handleRegistration = async (data) => {
    Firebase.auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        registerUser({
          variables: {
            authID: user.uid,
            username: data.username,
            password: data.password,
            email: data.email,
          },
        });

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
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
      </div>
    </div>
  );
}
