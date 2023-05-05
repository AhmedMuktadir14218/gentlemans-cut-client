// import React from 'react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const handleSignUp = (data) => {
        console.log(data);
        // setSignUPError('');
        // createUser(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         toast('User Created Successfully.')
        //         const userInfo = {
        //             displayName: data.name
        //         }
        //         updateUser(userInfo)
        //             .then(() => { })
        //             .catch(err => console.log(err));
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         setSignUPError(error.message)
        //     });
    }



    return (
        <div className='h-[720px] flex justify-center items-center'>
            <div className='w-96 p-7 bg-neutral'>
                <h2 className='text-xl text-white text-center font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='text-white'>Already have an account <Link className='text-primary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline  text-white w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;