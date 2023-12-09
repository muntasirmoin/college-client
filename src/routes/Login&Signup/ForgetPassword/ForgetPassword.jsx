import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ForgetPassword = () => {
    const { passwordReset } = useContext(AuthContext);
    const [disable, setDisable] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleResetPassword = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        // const password = form.password.value;
        console.log(email);
        passwordReset(email)
            .then(result => {
                // const user = result.user;
                console.log('get result', result);
                setDisable(true);
                // console.log('disable', disable);

                Swal.fire({
                    title: 'Check Your email To Update Password',

                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                //   navigate(from, {replace: true});
            })
    }



    return (
        <>
            <Helmet>
                <title> College || Forget Password</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Forget Password!</h1>
                            <p className="py-6">Provide Your Email address</p>
                        </div>
                        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleResetPassword} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>

                                {/*  */}
                                <div className="form-control mt-6">
                                    {/* TO DO: MAKE BUTTON DISABLED for captcha */}
                                    {
                                        disable ? <p className='text-success'>Reset Email sent Please Check your email to Update Password!! <span className='text-warning underline'><Link to='/login'>LogIn</Link></span></p> : <input className="btn btn-primary" type='submit' value="Sent Email"></input>
                                    }
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ForgetPassword;