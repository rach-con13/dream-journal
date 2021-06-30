import { useFormik } from 'formik'
import React from 'react'
import AuthField from '../components/auth/authField'
import { LoginSchema } from '../components/auth/validateAuth';

export default function Login(props) {
    
    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
         
        },
        validationSchema:LoginSchema,
    
        onSubmit: values => {
           
            console.log(values);
        },
      
      });
    return (
        <div className="h-screen bg-extradark relative">
           <div  className=" bg-superlight rounded-sm py-4 w-4/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <header className="  mx-auto w-10/12">
                    <p className="font-semibold text-2xl text-dark ">Login</p>
                </header>
          
            
            <form onSubmit={formik.handleSubmit} className="mt-4 mx-auto  w-full text-right">
    
             <AuthField type='text' name="username" label="Username" value={formik.values.username} onChange={formik.handleChange} />
               <AuthField type="password" name='password' label="Password" value={formik.values.password} onChange={formik.handleChange}/> 
               <button type='submit' className="rounded-sm px-8 mt-2 py-2 bg-primary-superlight">Login</button>
            </form>
            </div>
        </div>
    )
}
