import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// import { AuthContext } from '../../contexts/AuthProvider';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

import useToken from '../../Hooks/useToken';


const Login = () => {

    // const { register, formState: { errors }, handleSubmit } = useForm();
    // const { signIn } = useContext(AuthContext);
    // const [loginError, setLoginError] = useState('');
    // const location = useLocation();
    // const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/';

    // const handleLogin = data => {
    //     console.log(data);
    //     setLoginError('');
    //     signIn(data.email, data.password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             navigate(from, {replace: true});
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //             setLoginError(error.message);
    //         });
    // }


    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        // console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    return (
        <div className='h-[720px] flex justify-center items-center'>
            <div className='w-96 p-7 bg-neutral'>
                <h2 className='text-xl text-white text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="text-white form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="text-black input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="text-black input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="text-white label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full font-bold' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='text-white'>New to Gentlemen's Cut ? <Link className='text-primary' to="/signup">Create new Account</Link></p>
                <div className="text-white divider">OR</div>
                {/* <button className='btn btn-outline text-white w-full'>CONTINUE WITH GOOGLE</button> */}
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;

















// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // TODO: Implement login functionality
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <div className="w-full max-w-xs">
//         <form
//           className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
//           onSubmit={handleLogin}
//         >
//           <h2 className="text-2xl mb-8 text-center text-red-500">Login</h2>
//           <div className="mb-4">
//             <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline-red"
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline-red"
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red"
//               type="submit"
//             >
//               Sign In
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
