import React from "react";
import { ReactComponent as LogoEmblem } from "../../assets/logo-emblem.svg";
import { ReactComponent as LogoTextLight } from "../../assets/logo-text-light.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "../../components/nav/nav.component";
import Plan from "../../components/plan/plan.component";
import Footer from "../../components/footer/footer.component";

import "./home.styles.scss";

const Home = () => (
  <div className="home">
    <Nav />
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
          <h3>BOOK A SESSION</h3>
        </div>
      </div>
    </section>
    <section className="home__mission">
      <div className="mission__content">
        <div className="mission__headline">
          <h3 className="mission__headline-mantra">OUR MANTRA</h3>
          <h2 className="mission__headline-phrase">REDUCE. REUSE. RECYCLE.</h2>
        </div>
        <div className="mission__image">
          <img src="https://via.placeholder.com/305x200" alt="mission" />
        </div>
        <div className="mission__statement">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            dolorum veritatis animi accusantium blanditiis fuga ea iste, minima
            temporibus nihil tempore?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            animi totam unde cumque cupiditate ea voluptates suscipit quod.
            Consequatur ad dicta commodi accusamus adipisci aperiam culpa
            officiis ullam earum aut!
          </p>
        </div>
      </div>
    </section>
    <section className="home__plans">
      <div className="plans__content">
        <h2 className="plans__headline">OUR PLANS</h2>
        <Plan />
      </div>
    </section>
    <section className="home__reviews">
      <div className="reviews__content">
        <p>THIS IS THE REVIEWS SECTION</p>
      </div>
    </section>
    <section className="home__contact">
      <div className="contact__content">
        <p>THIS IS THE CONTACT SECTION</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Home;
