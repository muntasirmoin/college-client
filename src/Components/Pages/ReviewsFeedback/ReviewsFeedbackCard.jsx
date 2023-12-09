import React from 'react';
import Rating from 'react-rating';
import { Swiper, SwiperSlide } from "swiper/react";
import RatingStars from './RatingStars';

const ReviewsFeedbackCard = ({rating}) => {
    console.log('rating', rating.rating)
    
    return (
        <div className='mt-2'>
             <section className=''>


             <div>
      
      <ul>
       
          <li key={rating._id}>
            {/* Display rating information */}
            <div><h3 className='text-2xl text-orange-400'>{rating.collegeName}</h3></div>
            <div ><RatingStars value={rating.rating} /></div>
            
            {/* Add more properties from the rating object */}
          </li>
     
      </ul>
    </div>


             {/* <div className="rating">
                        <input type="radio" name="rating-2" value="1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value="2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value="3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value="4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value="5" className="mask mask-star-2 bg-orange-400" />
                    </div> */}
                   

                {/* <SectionTitle heading='Testimonials' subHeading='What Our Client Say'></SectionTitle> */}

                {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> */}
                {/* <Swiper className="mySwiper">

                    {
                        <SwiperSlide>

                            <div className='flex flex-col items-center  mx-24 my-16'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    // value={reviews.rating}
                                    value={rating.rating}
                                    readOnly
                                />
                                <p className='py-8'>reviews.details</p>
                                <h3 className='text-2xl text-orange-400'>{rating.collegeName}</h3>
                            </div>

                        </SwiperSlide>
                    }
                </Swiper> */}
            </section>
        </div>
    );
};

export default ReviewsFeedbackCard;