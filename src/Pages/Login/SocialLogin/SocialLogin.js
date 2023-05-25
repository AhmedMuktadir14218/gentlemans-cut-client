// import { getAuth } from 'firebase/auth';
import React from 'react';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../../Firebase/firebase.config';
import { getAuth } from 'firebase/auth';
const SocialLogin = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user,  error, user1,  error1] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    let errorElement;

  

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

   

    return (
        <div>
            
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline text-white w-full'>
                   CONTINUE WITH GOOGLE
                </button>
               
               
                
            </div>
        </div>
    );
};

export default SocialLogin;