import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./review.styles.scss";

const Review = ({ review, inverted }) => {
  const { title, comment, stars, author, source } = review;
  const rating = [];

  for (let index = 0; index < stars; index++) {
    rating.push(
      <FontAwesomeIcon
        id={index}
        className="review__star"
        icon={["fas", "star"]}
      />
    );
  }

  return (
    <div className={`review ${inverted ? "review--inverted" : ""}`}>
      <div className="review__content">
        <div className="review__stars">{rating}</div>
        <h3 className="review__subject">{title}</h3>
        <p className="review__comment">{comment}</p>
        <div className="review__author">
          <h5 className="review__author-name">{author}</h5>
          <h6 className="review__author-title">{source}</h6>
        </div>
      </div>
    </div>
  );
};

export default Review;
