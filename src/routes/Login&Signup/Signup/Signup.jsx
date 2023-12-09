import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';

const Signup = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        console.log('save user:', saveUser);
                        navigate('/');
                        //             fetch('http://localhost:5000/users', {
                        //                 method: 'POST',
                        //                 headers: {
                        //                     'content-type': 'application/json'
                        //                 },
                        //                 body: JSON.stringify(saveUser)
                        //             })
                        //                 .then(res => res.json())
                        //                 .then(data => {
                        //                     if (data.insertedId) {
                        //                         reset();
                        //                         Swal.fire({
                        //                             position: 'top-end',
                        //                             icon: 'success',
                        //                             title: 'User created successfully.',
                        //                             showConfirmButton: false,
                        //                             timer: 1500
                        //                         });
                        //                         navigate('/');
                        //                     }
                        //                 })



                    })
                    .catch(error => console.log(error))
            })
    }


    return (
        <>
            <Helmet>
                <title> College || SignUp</title>
            </Helmet>
            <div>
                <h1 className='text-5xl bg-base-200'>Create an account</h1>
                <div className="hero min-h-screen bg-base-200">
                   

                    <div className="hero-content flex-col lg:flex-row-reverse">

                        {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                {/* name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                {/* photo url */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text"  {...register("photoURL", { required: true })} className="input input-bordered" placeholder='Photo URL' />
                                    {errors.photoURL && <span className="text-red-600">Photo Url is required</span>}
                                </div>
                                {/* email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                {/* password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SignUp</button>
                                </div>
                            </form>
                            <p><small>Already Have An Account? <span className='text-success'><Link to='/login'>Login</Link></span></small></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Signup;