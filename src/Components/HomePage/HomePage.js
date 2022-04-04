import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../Hooks/useReviews";
import { AiOutlineCaretRight } from "react-icons/ai";
import ReviewItem from "../ReviewItem/ReviewItem";

const HomePage = () => {
  // const [reviews, setReviews] = useReviews;
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <div className="grid md:grid-cols-[3fr,1fr] sm:grid-cols-[2fr,2fr]">
        <div className="mt-4">
          <h1 className="text-center ">
            <span className="md:text-5xl sm:text-xl font-serif font-bold ">
              Feel Extraordinary
            </span>
            <p className="md:text-4xl sm:text-lg font-bold font-serif">with</p>
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
        <h4 className="text-3xl my-4 font-serif font-bold">
          Clients Feedbacks....
        </h4>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <ReviewItem key={review.id} item={review} />
          ))}
        </div>
        <Link to="/reviews">
          <button className="mb-6 mt-6 mx-auto flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border border-blue-700 rounded">
            See More Reviews <AiOutlineCaretRight size={"22px"} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
