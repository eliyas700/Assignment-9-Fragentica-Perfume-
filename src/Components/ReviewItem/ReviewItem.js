import React from "react";
import "./ReviewItem.css";
import Rating from "react-rating";
import {
  faStar,
  faQuoteRight,
  faQuoteLeftAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewItem = ({ item }) => {
  const { name, img, comment, rating } = item;

  return (
    <div className="mx-auto">
      <div className="testimonial-card">
        <div className="text md:text-base sm:text-sm " title={comment}>
          <FontAwesomeIcon className="mr-1" icon={faQuoteLeftAlt} />
          {comment.slice(0, 190) + "...."}

          <FontAwesomeIcon icon={faQuoteRight} />
        </div>

        <div className="footer">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <h3 className="person">{name}</h3>
          <h4 className="person2">
            {
              <Rating
                initialRating={rating}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            }
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
