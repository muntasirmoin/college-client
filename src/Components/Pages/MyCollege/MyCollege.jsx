import React, { useContext,  useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../providers/AuthProvider';
import MyCollegeCard from './MyCollegeCard';

const MyCollege = () => {

    const {user} = useContext(AuthContext);

    const [colleges, setColleges] = useState([]);

   console.log('user', user.email)
    
    useEffect(() => {
        
        fetch(`http://localhost:5000/mycollege/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log("Colleges:",data);
                setColleges(data);
            })
    }, []);


    return (
        <>
        <Helmet>
            <title>College || My College</title>
        </Helmet>
        
        
        <div>
            <h1 className='text-2xl font-bold'>My College</h1>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Sl</th>
        <th>College Name</th>
        <th>Subject</th>
       <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
            colleges.map(college => <MyCollegeCard key={college._id} college={college}></MyCollegeCard>)
        }
               
    </tbody>
  </table>
</div>
        </div>
        </>
    );
};

export default MyCollege;