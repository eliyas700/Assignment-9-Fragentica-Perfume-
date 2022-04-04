import React from "react";
import "./ReviewItem.css";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewItem = ({ item }) => {
  const { name, img, comment, rating } = item;
  console.log(item);
  return (
    <div className="mx-auto">
      <div className="testimonial-card">
        <div className="text">
          {comment.slice(0, 190)}
          <i className="fas fa-quote-right quote"></i>
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
