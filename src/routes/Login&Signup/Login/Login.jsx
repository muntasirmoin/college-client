import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { signIn} = useContext(AuthContext);
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log('get user', user);

            Swal.fire({
                title: 'User Login successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
              navigate(from, {replace: true});
        })
    }



    return (
        <>
        <Helmet>
                <title> College || LogIn</title>
            </Helmet>
        
        <div>
                <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>


                        {/* captcha  */}
                        {/* <div className="form-control"> */}
                            {/* <label className="label"> */}
                            {/* <LoadCanvasTemplate /> */}
                            {/* </label> */}
                            {/* <input onBlur={handleValidateCaptcha}  type="text" name='captch' placeholder="type the captcha here" className="input input-bordered" /> */}
                            {/* <button className="btn btn-outline btn-xs mt-2">Validate</button> */}
                           
                        {/* </div> */}

                        {/*  */}
                        <div className="form-control mt-6">
                          {/* TO DO: MAKE BUTTON DISABLED for captcha */}
                            <input  className="btn btn-primary" type='submit' value="Login"></input>
                        </div>
                    </form>
                    <p><small>New Here? <span className='text-success'><Link to='/signup'>Create An Account</Link></span> </small></p>
                    <p className="link link-secondary"><Link to='/forgetpassword'>Forget Password?</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Login;