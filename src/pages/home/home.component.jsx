import React from "react";
import { ReactComponent as LogoEmblem } from "../../assets/logo-emblem.svg";
import { ReactComponent as LogoTextLight } from "../../assets/logo-text-light.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./home.styles.scss";

const Home = () => (
  <div className="home">
    <section className="home__landing">
      <div className="landing__content">
        <div className="landing__brand">
          <LogoEmblem className="landing__brand-emblem" />
          <LogoTextLight className="landing__brand-name" />
        </div>
        <div className="landing__socials">
          <FontAwesomeIcon
            className="landing__icon"
            icon={["fab", "facebook"]}
            size="2x"
          />
          <FontAwesomeIcon
            className="landing__icon"
            icon={["fab", "instagram"]}
            size="2x"
          />
          <FontAwesomeIcon
            className="landing__icon"
            icon={["fab", "linkedin-in"]}
            size="2x"
          />
        </div>
        <div className="landing__session">
          <h4>BOOK A SESSION</h4>
        </div>
      </div>
    </section>
    <section className="home__mission">
      <div className="mission__content"></div>
    </section>
    <section className="home__services">
      <div className="servies__content"></div>
    </section>
    <section className="home__reviews">
      <div className="reviews__content"></div>
    </section>
    <section className="home__contact">
      <div className="contact__content"></div>
    </section>
  </div>
);

export default Home;
