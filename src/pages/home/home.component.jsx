import React from "react";
import { ReactComponent as LogoEmblem } from "../../assets/logo-emblem.svg";
import { ReactComponent as LogoTextLight } from "../../assets/logo-text-light.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./home.styles.scss";

const Home = () => (
  <div className="home">
    <section className="home__content">
      <div className="home__brand">
        <LogoEmblem className="home__emblem" />
        <LogoTextLight className="home__text" />
      </div>
      <div className="home__socials">
        <FontAwesomeIcon
          className="home__icon"
          icon={["fab", "facebook"]}
          size="2x"
        />
        <FontAwesomeIcon
          className="home__icon"
          icon={["fab", "instagram"]}
          size="2x"
        />
        <FontAwesomeIcon
          className="home__icon"
          icon={["fab", "linkedin-in"]}
          size="2x"
        />
      </div>
      <div className="home__session">
        <h4>BOOK A SESSION</h4>
      </div>
    </section>
  </div>
);

export default Home;
