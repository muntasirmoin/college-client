import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const AdmissionInput = () => {


    const college = useLoaderData();

    const {user} = useContext(AuthContext);
    // console.log('college',college)
   
  
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
    //    to-do


    fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            // refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Admission form filled',
                showConfirmButton: false,
                timer: 1500
              })
        }
       
    })

    }

    return (
        <div>
        <h1 className='text-5xl bg-base-200'>Admission Form</h1>
     <div className="hero min-h-screen bg-base-200">
        
    
        <div className="hero-content flex-col lg:flex-row-reverse">
            
            {/* <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div> */}
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    {/* college name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">College Name</span>
                        </label>
                        <input type="text"  name='collegeName' {...register("collegeName" , { required: true })} value={college.collegeName} className="input input-bordered" readOnly />
                        
                    </div>
                    {/* name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">CandidateName</span>
                        </label>
                        <input type="text"  name='name' {...register("name" , { required: true })} placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    {/* subject */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text"  name='subject' {...register("subject" , { required: true })} placeholder="Subject" className="input input-bordered" />
                        {errors.subject && <span className="text-red-600">Name is required</span>}
                    </div>
                    {/* email */}
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' {...register("email", { required: true })} value={user.email} className="input input-bordered" readOnly />
                        {/* {errors.email && <span className="text-red-600">Email is required</span>} */}
                    </div>
                    {/* Candidate Phone number */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Phone Number</span>
                        </label>
                        <input type="number"  name='name' {...register("PhoneNumber" , { required: true })} placeholder="Name" className="input input-bordered" />
                        {errors.phoneNumber && <span className="text-red-600">Phone Number is required</span>}
                    </div>
                    {/* Address */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Address</span>
                        </label>
                        <input type="text"  name='name' {...register("address" , { required: true })} placeholder="Name" className="input input-bordered" />
                        {errors.address && <span className="text-red-600">Address is required</span>}
                    </div>
                    {/* Date of birth */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date Of Birth</span>
                        </label>
                        <input type="number"  name='name' {...register("birth" , { required: true })} placeholder="Name" className="input input-bordered" />
                        {errors.birth && <span className="text-red-600">DOB is required</span>}
                    </div>
                    {/* photo url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text"  {...register("photoURL" , { required: true })}  className="input input-bordered" placeholder='Photo URL' />
                        {errors.photoURL && <span className="text-red-600">Photo Url is required</span>}
                    </div>
                 
                  
                    <div className="form-control mt-6">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </form>
               
            </div>
        </div>
    </div>
</div>
    );
};

export default AdmissionInput;