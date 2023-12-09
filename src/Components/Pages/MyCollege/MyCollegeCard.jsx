import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCollegeCard = ({ college }) => {
    const { collegeName, subject } = college;

    const [rating, setRating] = useState(0);
    console.log('rating',rating);

    const handleRatingChange = (event) => {
        // Update the rating state when a radio button is selected
        setRating(parseInt(event.target.value)); // Assuming values are 1, 2, 3, etc.
      
        const postData = {
          
            rating: rating, 
            collegeName: collegeName
          };

          console.log('Rating: ', postData);
        

        fetch('http://localhost:5000/rating', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                // refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `You sent Star`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
           
        })


    };

    return (

        <>


            <tr>
                <th>1</th>
                {/* <td className='text-xl text-success'><Link to={`/admissionInput/${_id}`}> {collegeName} </Link></td> */}
                <td>{collegeName}</td>
                <td>{subject}</td>
                <td>
                    <div className="rating" onClick={handleRatingChange}>
                        <input type="radio" name="rating-2" value="1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value="2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value="3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value="4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value="5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </td>
            </tr>
        </>

    );
};

export default MyCollegeCard;