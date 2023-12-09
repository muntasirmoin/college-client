import React from 'react';
import Logo from '../../../assets/logo.png'
import { useLoaderData } from 'react-router-dom';
import CollegeDetailsResearchHistory from './CollegeDetailsResearchHistory';

const CollegeDetails = () => {
    const college = useLoaderData();
    const { address, admissionDates, collegeImageURL, collegeName, events, researchHistory, sports, _id } = college;
    console.log(researchHistory[0])

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={collegeImageURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-6xl font-bold text-primary">{collegeName}</h1>
                        <h4 className="text-xl font-bold mt-4"><span className='uppercase text-success'>events details: </span>{events} </h4>
                        <div>


                            <h4 className="text-xl font-bold uppercase border-2 border-blue-500 mt-5"><span className='uppercase text-success'>research works</span> </h4>
                            
                            <div className="overflow-x-auto">
                                <table className="table border-2 border-green-900">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                           
                                            <th><strong>Title:</strong> </th>
                                            {/* <th><strong>Author:</strong> </th> */}
                                            <th><strong>Year:</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}

                                        {
                                        researchHistory.map((researchItem, index) => <CollegeDetailsResearchHistory key={index} researchItem={researchItem}></CollegeDetailsResearchHistory>)
                                   
        } 


                                    </tbody>
                                </table>
                            </div>


                        </div>
                        <h4 className="text-xl font-bold mt-5"><span className='uppercase text-success'>sports categories:</span> <span className='semi-bold'>{sports}</span></h4>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;