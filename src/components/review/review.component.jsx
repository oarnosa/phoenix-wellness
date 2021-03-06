import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./review.styles.scss";

const Review = ({ inverted }) => (
  <div className={`review ${inverted ? "review--inverted" : ""}`}>
    <div className="review__content">
      <div className="review__stars">
        <FontAwesomeIcon
          className="review__star"
          icon={["fas", "star"]}
          size="md"
        />
        <FontAwesomeIcon
          className="review__star"
          icon={["fas", "star"]}
          size="md"
        />
        <FontAwesomeIcon
          className="review__star"
          icon={["fas", "star"]}
          size="md"
        />
        <FontAwesomeIcon
          className="review__star"
          icon={["fas", "star"]}
          size="md"
        />
        <FontAwesomeIcon
          className="review__star"
          icon={["fas", "star"]}
          size="md"
        />
      </div>
      <h3 className="review__subject">EXCELLENT SERVICE AND VERY INSIGHTFUL</h3>
      <p className="review__comment">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        repellendus asperiores quae corrupti aperiam illum voluptatum nobis
        rerum hic quod"
      </p>
      <div className="review__author">
        <h5 className="review__author-name">ORLANDO ARNOSA</h5>
        <h6 className="review__author-title">WEB DEVELOPER</h6>
      </div>
    </div>
  </div>
);

export default Review;
