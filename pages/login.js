// import { gql ,useMutation} from 'apollo-server-micro';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AuthField from '../components/auth/authField';
import { useForm } from 'react-hook-form';
import { loginUser } from '../lib/firebase/authFunctions';
export default function Login(props) {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const handleRegistration = (data) => {
    const { email, password } = data;
    loginUser(email, password);
    router.push('/');
  };

  return (
    <div className="relative h-screen bg-primary-superdark">
      <div className="absolute w-4/12 py-4 transform -translate-x-1/2 -translate-y-1/2  bg-primary-superlight top-1/2 left-1/2 ">
        <header className="w-10/12 mx-auto ">
          <p className="text-2xl font-semibold text-primary-dark ">Login</p>
        </header>

        <form
          onSubmit={handleSubmit(handleRegistration)}
          className="w-full mx-auto mt-4 text-right"
        >
          <AuthField
            register={register('email')}
            type="email"
            name="email"
            label="Email"
          />

          <AuthField
            register={register('password')}
            type="password"
            name="password"
            label="Password"
          />

          <button
            type="submit"
            className="px-8 py-2 mt-2 rounded-sm bg-primary-superlight"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
