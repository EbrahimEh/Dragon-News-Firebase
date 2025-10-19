import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Providor/AuthProvidor';

const Register = () => {
    const {createUser, setUser} = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        // console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email,password})

        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            setUser(user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center py-5'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Your Name" required />
                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" required />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center pt-4 font-semibold'>Already Have An Account ? <Link className='text-secondary font-semibold' to='/auth/login'>Login</Link></p>
                    </fieldset>

                </form>
            </div>
        </div>
    );
};

export default Register;