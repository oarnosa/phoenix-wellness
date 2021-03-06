import React from "react";
import { ReactComponent as LogoEmblem } from "../../assets/logo-emblem.svg";
import { ReactComponent as LogoTextLight } from "../../assets/logo-text-light.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "../../components/nav/nav.component";
import Plan from "../../components/plan/plan.component";
import Review from "../../components/review/review.component";
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
          <h3 className="mission__headline-tag">OUR MANTRA</h3>
          <h2 className="mission__headline-phrase">
            REBUILD. RECOVER. REBORN.
          </h2>
        </div>

        <div className="mission__statement">
          <p>
            Our mission at Phoenix Wellness and Recovery is to promote a unique
            wellness experience and deliver high-end physical recovery to allow
            optimal functionality in sports, weightlifting or just everyday
            life.
          </p>
          <div className="mission__image">
            <img src="https://via.placeholder.com/305x200" alt="mission" />
          </div>
          <p>
            I am a professional with a Masters degree in occupational therapy,
            with experience and specialty in orthopedics and body mechanics.
            Being an athlete myself, I understand the importance of proper
            recovery from the daily stress sports or physical activity can put
            on muscles of the body. I aspire to utilize evidence-based practice
            and techniques to provide the highest quality recovery possible, to
            get you back to doing what you love as quickly as possible.
          </p>
        </div>
      </div>
    </section>
    <section className="home__plans">
      <div className="plans__content">
        <h2 className="plans__headline">OUR PLANS</h2>
        <Plan
          icon="https://svgur.com/i/UkH.svg"
          name="STEEL"
          price="$50"
          time="60"
        >
          <li>
            Manual treatment with focus on <strong>2</strong> problem areas
          </li>
          <li>Percussion drill massage</li>
          <li>Trigger point treatment</li>
          <li>Instrument Assisted Soft Tissue Mobilization (IASTM)</li>
        </Plan>
        <Plan
          special
          icon="https://svgur.com/i/Uig.svg"
          name="GOLD"
          price="$75"
          time="90"
        >
          <li>
            Manual treatment with focus on <strong>3</strong> problem areas
          </li>
          <li>Percussion drill massage</li>
          <li>Trigger point treatment</li>
          <li>Instrument Assisted Soft Tissue Mobilization (IASTM)</li>
          <li>Cupping therapy</li>
          <li>Transcutaneous Electrical Nerve Stimulation (TENS Unit)</li>
        </Plan>
        <Plan
          icon="https://svgur.com/i/Ujt.svg"
          name="OBSIDIAN"
          price="$100"
          time="120"
        >
          <li>
            Manual treatment with focus on <strong>4</strong> problem areas
          </li>
          <li>Percussion drill massage</li>
          <li>Trigger point treatment</li>
          <li>Instrument Assisted Soft Tissue Mobilization (IASTM)</li>
          <li>Cupping therapy</li>
          <li>Transcutaneous Electrical Nerve Stimulation (TENS Unit)</li>
          <li>Deep friction massage</li>
          <li>Corrective ergonomic education</li>
          <li>Phoenix merchandise (Shirt)</li>
        </Plan>
      </div>
    </section>
    <section className="home__reviews">
      <div className="reviews__content">
        <div className="reviews__headline">
          <h3 className="reviews__headline-tag">OUR CUSTOMERS</h3>
          <h2 className="reviews__headline-phrase">
            REAL PEOPLE. REAL RESULTS.
          </h2>
        </div>
        <Review />
        <Review inverted />
        <Review />
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
