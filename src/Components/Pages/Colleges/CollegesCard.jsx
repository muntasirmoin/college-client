import React from 'react';
import { Link } from 'react-router-dom';

const CollegesCard = ({college}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img style={{ width: '200px', height: '150px' }}  src={college.collegeImageURL} alt="Shoes" /></figure>
                        <div className="card-body justify-center">
                            <h2 className="card-title">
                                {college.collegeName}
                                <br />
                              
                            </h2>
                            <h1 className="badge badge-secondary">Admission Date:  <span className='text-white font-bold'>{college.admissionDates} </span></h1>
                           
                            
                                <div className="badge badge-outline"><span>{college.events}</span></div>
                                <div className="badge badge-outline badge-primary"><span className='text-bold'> {college.address}</span></div>
                                {/* <div className="badge badge-outline">Products</div> */}
                              
                            
                            <div className="card-actions justify-center">
                            <Link to={`/details/${college._id}`}><button className="btn btn-error">Details</button></Link>
                                </div>
                        </div>
                    </div>
        </div>
    );
};

export default CollegesCard;