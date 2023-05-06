// import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../../Firebase/firebase.config';
import { getAuth } from 'firebase/auth';
// import google from '../../../images/google.png';
const SocialLogin = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user,  error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1,  error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    let errorElement;

    // if(loading || loading1){
    //     return <Loading></Loading>
    // }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    // let errorElement;

    // if (error || error1) {
    //     errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    // }

    // if (user || user1) {
    //     navigate('/home');
    // }

    return (
        <div>
            
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline text-white w-full'>
                   CONTINUE WITH GOOGLE
                </button>
               
                {/* <button
                   onClick={() => signInWithGithub()} 
                     className='btn btn-outline text-white w-full'>
                     <img style={{ width: '28px' ,height:'28px' }} src={google} alt="" />
                    Github Sign In
                </button>   */}
                
            </div>
        </div>
    );
};

export default SocialLogin;