import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
    }
    return (
        <div className='w-9/12 mx-auto'>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-1/2">
            

                  </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                   
                    <h1 className="text-3xl  text-center font-bold text-pink-500"> Please Register!</h1>
                    <form onSubmit={handleRegister}>
                    <div className="form-control">
                        
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" />
                    </div>
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
                        <div className="form-control">
                        
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" placeholder="photo url" name="photo" className="input input-bordered" />
                    </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className='bg-pink-500 p-3 text-white rounded-xl' type="submit" value="Register" />
                    </div>
                    <p>Already Have An Account??? please <Link className='text-pink-500' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Register;