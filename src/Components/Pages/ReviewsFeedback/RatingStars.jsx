import React from 'react';

// const RatingStars = ({ value }) => {
//   const renderStars = () => {
//     const stars = [];
//     for (let i = 0; i < value; i++) {
//       stars.push(<span key={i}>★</span>);
//     }
//     return stars;
//   };

//   return <div>{renderStars()}</div>;
// };

// export default RatingStars;


const RatingStars = ({ value }) => {
  const renderStars = () => {
    const stars = [];
    const starStyle = {
      color: '#FFD700', // Adjust the color here
      fontSize: '24px', // Adjust the font size here
      marginRight: '4px' // Adjust spacing between stars
    };
    let i = 1;
    for (i = 1; i <= value; i++) {
      const starClassName = "mask mask-star-2 bg-orange-400";
      stars.push(<span key={i} style={starStyle} >★</span>);
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};
export default RatingStars;
