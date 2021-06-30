import { useFormik } from 'formik';
import React from 'react'
import AuthField from '../components/auth/authField'
import { SignUpSchema } from '../components/auth/validateAuth';

export default function SignUp(props) {
    
    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
          email:''
         
        },
        validationSchema:SignUpSchema,
        onSubmit: values => {
            
        },
      
      });

    const registerUser = () => {
        
    }

    return (
        <div className="h-screen bg-extradark relative">
           <div  className=" w-4/12 bg-superlight py-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <header className=" mx-auto w-10/12">
                    <p className="font-semibold text-2xl text-primary-superlight ">Sign Up</p>
                </header>
          
            
            <form onSubmit={formik.handleSubmit} className="mt-4 mx-auto  w-full text-right">
            <AuthField type='text' name="username" label="Username" value={formik.values.username} onChange={formik.handleChange} />
            {formik.errors.username ? <p className="text-red-400 font-semibold text-sm text-left py-2">{formik.errors.username}</p> : null}
               <AuthField type="password" name='password' label="Password" value={formik.values.password} onChange={formik.handleChange}/> 
               {formik.errors.password ? <p className="text-red-400 font-semibold text-sm text-left py-2">{formik.errors.password}</p> : null}

               <AuthField type="email" name="email" label="Email" value={formik.values.email} onChange={formik.handleChange}/>
               {formik.errors.email ? <p className="text-red-400 font-semibold text-sm text-left py-2">{formik.errors.email}</p> : null}
               <button type="submit" className="rounded-sm px-8 mt-2 py-2 bg-primary-superlight">Sign Up</button>
            </form>
            </div>
        </div>
    )
}
