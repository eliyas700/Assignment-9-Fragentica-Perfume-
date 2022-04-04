import React from "react";
import useReviews from "../../Hooks/useReviews";

import ReviewItem from "../ReviewItem/ReviewItem";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  console.log(reviews);
  return (
    <div className="grid md:grid-cols-3 grid-cols-2">
      {reviews.map((review) => (
        <ReviewItem key={review.id} item={review} />
      ))}
    </div>
  );
};

export default Reviews;
