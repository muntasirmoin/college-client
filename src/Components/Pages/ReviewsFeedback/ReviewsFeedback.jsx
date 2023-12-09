import React, { useContext,  useState, useEffect } from 'react';
import Rating from 'react-rating';
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsFeedbackCard from './ReviewsFeedbackCard';

const ReviewsFeedback = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const [ratings, setRatings] = useState([]);


    
    useEffect(() => {
        // http://localhost:5000/menuData/642c155b2c4774f05c36ee84
        fetch(`http://localhost:5000/rating`)
            .then(res => res.json())
            .then(data => {
                console.log("Colleges:",data);
                setRatings(data);
            })
    }, []);

    

    return (
        <div>
            <h1 className='text-5xl'>Reviews & Feedback</h1>

            {/* <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />, */}

           {
            ratings.map(rating => <ReviewsFeedbackCard key={rating._id} rating={rating}></ReviewsFeedbackCard>)
           }


        </div>
    );
};

export default ReviewsFeedback;