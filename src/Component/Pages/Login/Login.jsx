import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const {signIn, googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
               
    const handleSignIn = () =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            form.reset(); 
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error));


    }

            //  Google sign in 
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user;
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <Helmet>
                <title>Dream Explorer Login</title>
            </Helmet>
            <div className='w-2/5 mx-auto my-24 '>
                <form onSubmit={handleSignIn} className='bg-gray-100 shadow-lg w-full rounded-xl p-5' action="">
                    <h1 className='text-2xl text-center font-bold mb-4'>Login to Account</h1>
                    <div>
                        <label className='block text-base mb-1'>Email</label>
                        <input name='email' className='bg-white w-full p-2 text-base border px-2 focus:outline-none rounded-xl focus:border-gray-600' placeholder='Enter Your Email' type="email" />
                    </div>
                    <div className='mt-3'>
                        <label className='block text-base mb-1'>Password</label>
                        <input type="password" name='password' className='bg-white w-full p-2 text-base border px-2 focus:outline-none rounded-xl focus:border-gray-600' placeholder='Enter Your Password' />
                    </div>
                    <div className='mt-3 flex items-center justify-between w-full'>
                        <div>
                            <input className=' mr-1' type="checkbox" name="" id="" />
                            <label className='md:text-base sm:text-xs mb-1' htmlFor="">Rememmerd Me</label>
                        </div>
                        <Link className='text-blue-400 md:text-base sm:text-xs mt-1'>Forget password? </Link>
                    </div>
                    <div className='mt-3'>
                        <button className='px-16 w-full md:text-xl  font-bold rounded-xl bg-color py-1 text-white text-center cursor-pointer'>Log in</button>
                        
                    </div>
                    <div className='grid grid-cols-3 items-center mt-3'>
                        <hr className='border-gray-500' />
                        <p className='text-center'>Or Login with</p>
                        <hr className='border-gray-500' />
                    </div>
                    <div className='flex gap-2 justify-center mt-4 mx-auto'>
                        <button onClick={handleGoogleSignIn} className='text-blue-400 border-blue-300 border-2 rounded p-3 w-11'><FaGoogle value={{ size: 28 }} /></button>

                        <button className='text-blue-400 border-blue-300 border-2 rounded p-3 w-11'><FaFacebookF value={{ size: 28 }} /></button>

                        <button className='text-blue-400 border-blue-300 border-2 rounded p-3 w-11'><FaGithub value={{ size: 28 }} /></button>

                        <button className='text-blue-400 border-blue-300 border-2 rounded p-3 w-11'><FaTwitter value={{ size: 28 }} /></button>
                        
                    </div>
                    <div>
                        <li className='text list-none text-center mt-3'>Don't have an account <Link className='text-blue-400' to='/signup' state={{from: from}}>Sign up</Link></li>
                    </div>




                </form>
            </div>
        </div>
    );
};

export default Login;