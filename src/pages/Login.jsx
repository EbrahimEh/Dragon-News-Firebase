import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Providor/AuthProvidor';

const Login = () => {
    const {loginUser} = use(AuthContext)

    const handleLogin = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password})

        loginUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            alert("Login Successfully")
            e.target.reset()
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center py-5'>Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='text-center pt-4 font-semibold'>Dont’t Have An Account ? <Link className='text-secondary font-semibold' to='/auth/register'>Register</Link></p>
                    </fieldset>

                </form>
            </div>
        </div>
    );
};

export default Login;