import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../Hooks/useReviews";

import ReviewItem from "../ReviewItem/ReviewItem";

const HomePage = () => {
  // const [reviews, setReviews] = useReviews;
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <div className="grid grid-cols-[3fr,1fr]">
        <div className="mt-4">
          <h1 className="text-center ">
            <span className="text-5xl font-serif font-bold ">
              {" "}
              Feel Extraordinary
            </span>
            <p className="text-4xl font-bold font-serif">with</p>
            <img
              className="mx-auto"
              src="https://fimgs.net/mdimg/dizajneri/o.83.jpg"
              alt=""
            />
            <button className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Explore Now
            </button>
          </h1>
        </div>
        <div>
          <img src="https://fimgs.net/mdimg/perfume/375x500.69011.jpg" alt="" />
        </div>
      </div>
      <div>
        <h4 className="text-3xl font-serif font-bold">Clients Feedbacks....</h4>
        <div className="grid grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <ReviewItem key={review.id} item={review} />
          ))}
        </div>
        <Link to="/reviews">
          <button
            useNavigate
            className="mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border border-blue-700 rounded"
          >
            See More{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
