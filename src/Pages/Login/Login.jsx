import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';
const auth = getAuth(app);


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('')
    const [succes, setSuccess] = useState('')
    const provider = new GoogleAuthProvider();

    const handleLogin = (event) => {
        event.preventDefault();
        setSuccess('')
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        if (password.length < 6) {
            setError('password mustbe a 6 character or longer')
            return;
        }
        else if (!email || !password) {
            setError('Please enter your email.');
            return;
        }
        setSuccess('');
        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user);
                navigate('/')
                setError('');
                form.reset();
                setSuccess('user has created successfully')
            })
            .catch(error => console.log(error))
        setSuccess('')
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className='w-9/12 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">


                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <h1 className="text-3xl  text-center font-bold text-pink-500"> Please Login!</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='bg-pink-500 p-3 text-white rounded-xl' type="submit" value="Login" />
                                </div>
                                <p>New to baby pupus??? please <Link className='text-pink-500' to='/register'>Register</Link></p>
                                <button onClick={handleGoogleSignIn} className='bg-purple-500 p-3 mt-4 rounded-xl ml-12 text-white'>Sign In With Google</button>

                            </form>
                            <p className='text-red-400'>{error}</p>
                            <p className='text-purple-500'>{succes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;