import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ item }) => {
  const { name, img, comment, rating } = item;
  console.log(item);
  return (
    <div className="container">
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
          <h4 className="person2">{rating}</h4>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
