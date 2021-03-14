import React from "react";
import { Link } from "react-scroll";

import "./nav.styles.scss";

const Nav = () => (
  <div className="nav">
    <div className="nav__content">
      <Link to="mission" smooth={true} aria-label="Mission">
        <h5 className="nav__link">MISSION</h5>
      </Link>
      <Link to="plans" smooth={true} aria-label="Plans">
        <h5 className="nav__link">PLANS</h5>
      </Link>
      <Link to="reviews" smooth={true} aria-label="Reviews">
        <h5 className="nav__link">REVIEWS</h5>
      </Link>
      <Link to="contact" smooth={true} aria-label="contact">
        <h5 className="nav__link">CONTACT</h5>
      </Link>
    </div>
  </div>
);

export default Nav;
