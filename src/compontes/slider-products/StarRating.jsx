import React from "react";

// StarRating Component
const StarRating = ({ rating }) => {
    
  const stars = [];

  // Loop to create stars based on the rating
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Full star
      stars.push(
        <i key={i} className="bi bi-star-fill text-yellow-500 text-xs"></i>
      );
    } else if (rating >= i - 0.5) {
      // Half star
      stars.push(
        <i key={i} className="bi bi-star-half text-yellow-500 text-xs"></i>
      );
    } else {
      // Empty star
      stars.push(
        <i key={i} className="bi bi-star text-yellow-500 text-xs"></i>
      );
    }
  }

  return (
    <div className="flex gap-[2px] items-center">
      {stars}
    </div>
  );
};



export default StarRating;
