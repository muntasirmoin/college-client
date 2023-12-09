import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AdmissionCollegeCard from './AdmissionCollegeCard';

const Admission = () => {
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
       <Helmet>
                <title> College || Admission</title>
            </Helmet>
       
       <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Ranking</th>
        <th>College Name</th>
        <th>AD Date</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
            colleges.map(college => <AdmissionCollegeCard key={college._id} college={college}></AdmissionCollegeCard>)
        }
               
    </tbody>
  </table>
</div>
        </div>
       
       </>
    );
};

export default Admission;