import React from "react";

import "./plan.styles.scss";

const Plan = ({ special, icon, name, price, time, children }) => (
  <div className={`plan ${special ? "plan--special" : ""}`}>
    {special && <h4 className="plan--deal">MOST POPULAR</h4>}
    <div className="plan__content">
      <img className="plan__icon" src={`${icon}`} alt={`${name}`} />
      <h3 className="plan__title">{name}</h3>
      <h1 className="plan__price">
        {price}
        <span className="plan__hour">{` / ${time} min`}</span>
      </h1>
      <ul className="plan__list">{children}</ul>
      <h3
        className="plan__book"
        onClick={() =>
          window.open(
            "https://square.site/book/LF1SNP6G13F24/phoenix-wellness-recovery-miami-fl"
          )
        }
      >
        BOOK NOW
      </h3>
    </div>
  </div>
);

export default Plan;
