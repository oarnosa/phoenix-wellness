import React from 'react';

import './plan.styles.scss';

const Plan = ({ special, icon, name, price, priceMonthly, time, children }) => (
  <div className={`plan ${special ? 'plan--special' : ''}`}>
    {special && <h4 className="plan--deal">MOST POPULAR</h4>}
    <div className="plan__content">
      <img className="plan__icon" src={icon} alt={name} />
      <h3 className="plan__title">{name}</h3>
      <h1 className="plan__price">
        {priceMonthly}
        <span className="plan__time"> / month</span>
      </h1>
      <ul className="plan__list">{children}</ul>
    </div>
    <h3
      className="plan__book"
      onClick={() =>
        window.open(
          'https://square.site/book/LF1SNP6G13F24/phoenix-wellness-recovery-miami-fl'
        )
      }
    >
      BOOK NOW
    </h3>
    <h4 className="plan__single">
      SINGLE SESSION: <b>{price}</b> / {time} min
    </h4>
  </div>
);

export default Plan;
