import { useFormik } from "formik";
import React from "react";
import AuthField from "../components/auth/authField";
import { SignUpSchema } from "../components/auth/validateAuth";
import { createUser } from "../lib/firebase/authFunctions";
export default function SignUp(props) {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log(values);
      createUser("rachaelconcessio@gmail.com", "disney13");
    },
  });

  const registerUser = () => { };

  return (
    <div className="relative h-screen bg-extradark">
      <div className="absolute w-4/12 py-4 transform -translate-x-1/2 -translate-y-1/2  bg-superlight top-1/2 left-1/2">
        <header className="w-10/12 mx-auto ">
          <p className="text-2xl font-semibold text-primary-superlight ">
            Sign Up
          </p>
        </header>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full mx-auto mt-4 text-right"
        >
          <AuthField
            type="text"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username ? (
            <p className="py-2 text-sm font-semibold text-left text-red-400">
              {formik.errors.username}
            </p>
          ) : null}
          <AuthField
            type="password"
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <p className="py-2 text-sm font-semibold text-left text-red-400">
              {formik.errors.password}
            </p>
          ) : null}

          <AuthField
            type="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <p className="py-2 text-sm font-semibold text-left text-red-400">
              {formik.errors.email}
            </p>
          ) : null}
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
