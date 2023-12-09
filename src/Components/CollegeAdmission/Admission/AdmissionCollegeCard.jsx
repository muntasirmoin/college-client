import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionCollegeCard = ({college}) => {
    const {collegeName, admissionDates, address, _id} = college;
    const dataToPass = collegeName;
    return (
        <>      <tr>
        <th>1</th>
        <td className='text-xl text-success'><Link to={`/admissionInput/${_id}`}> {collegeName} </Link></td>
        <td>{admissionDates}</td>
        <td>{address}</td>
      </tr></>
       
       
    );
};

export default AdmissionCollegeCard;



    //  <Link to={`/viewDetail/${toy._id}`}>  <button className="btn btn-primary">View Details</button></Link> 
              