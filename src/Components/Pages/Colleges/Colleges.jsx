import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CollegesCard from './CollegesCard';

const Colleges = () => {

    const [colleges, setColleges] = useState([]);


    
    useEffect(() => {
        // http://localhost:5000/menuData/642c155b2c4774f05c36ee84
        fetch(`http://localhost:5000/colleges`)
            .then(res => res.json())
            .then(data => {
                console.log("Colleges:",data);
                setColleges(data);
            })
    }, []);

    return (
       <>
       {/* <Helmet>
                <title> College || Colleges</title>
            </Helmet>
        */}
       
       <div>
             <div>
                <div className='grid md:grid-cols-3 gap-10'>
                    {
            colleges.map(college => <CollegesCard key={college._id} college={college}></CollegesCard>)
        }
                    {/* 1 */}
                    {/* college image, college name, admission dates, events, research history, and sports */}
                    

                
                    {/*  */}
                </div>
            </div>
        </div>
       </>
    );
};

export default Colleges;