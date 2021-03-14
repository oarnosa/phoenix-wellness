import React, { useState } from "react";
import { ReactComponent as LogoEmblem } from "../../assets/logo-emblem.svg";
import { ReactComponent as LogoTextLight } from "../../assets/logo-text-light.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "../../components/nav/nav.component";
import Plan from "../../components/plan/plan.component";
import Review from "../../components/review/review.component";
import Footer from "../../components/footer/footer.component";

import REVIEWS_DATA from "./reviews.data";

import "./home.styles.scss";

const Home = () => {
  const [reviews] = useState(REVIEWS_DATA);

  return (
    <div className="home">
      <Nav />
      <section className="home__landing" id="landing">
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
              onClick={() => window.open("https://www.facebook.com/")}
            />
            <FontAwesomeIcon
              className="landing__icon"
              icon={["fab", "instagram"]}
              size="2x"
              onClick={() =>
                window.open("https://www.instagram.com/phxrecover")
              }
            />
            <FontAwesomeIcon
              className="landing__icon"
              icon={["fab", "linkedin-in"]}
              size="2x"
              onClick={() =>
                window.open("https://www.linkedin.com/company/phxrecover")
              }
            />
          </div>
          <h3
            className="landing__session"
            onClick={() =>
              window.open(
                "https://squareup.com/appointments/book/wwpdaytyi5m5wg/LF1SNP6G13F24/services"
              )
            }
          >
            BOOK A SESSION
          </h3>
        </div>
      </section>
      <section className="home__mission" id="mission">
        <div className="mission__content">
          <div className="mission__headline">
            <h3 className="mission__headline-tag">OUR MANTRA</h3>
            <h2 className="mission__headline-phrase">
              REBUILD. RECOVER. REBORN.
            </h2>
          </div>
          <div className="mission__statement">
            <p>
              Our mission at Phoenix Wellness and Recovery is to promote a
              unique wellness experience and deliver high-end physical recovery
              to allow optimal functionality in sports, weightlifting or just
              everyday life.
            </p>
            <div className="mission__image--container">
              <img
                className="mission__image"
                src="https://i.ibb.co/LRcYyQp/profile.jpg"
                alt="profile"
              />
            </div>
            <p>
              I am a professional with a Masters degree in occupational therapy,
              with experience and specialty in orthopedics and body mechanics.
              Being an athlete myself, I understand the importance of proper
              recovery from the daily stress sports or physical activity can put
              on muscles of the body. I aspire to utilize evidence-based
              practice and techniques to provide the highest quality recovery
              possible, to get you back to doing what you love as quickly as
              possible.
            </p>
          </div>
        </div>
      </section>
      <section className="home__gallery" id="gallery">
        <div className="gallery__content">
          <div className="gallery__image--container">
            <img
              className="gallery__image"
              src="https://i.ibb.co/8Kvh1m8/gallery-1.jpg"
              alt="drill"
            />
          </div>
          <div className="gallery__image--container">
            <img
              className="gallery__image"
              src="https://i.ibb.co/0QtYBqj/gallery-2.jpg"
              alt="TENS"
            />
          </div>
          <div className="gallery__image--container">
            <img
              className="gallery__image"
              src="https://i.ibb.co/DD5HWWG/gallery-3.jpg"
              alt="cupping"
            />
          </div>
        </div>
      </section>
      <section className="home__plans" id="plans">
        <div className="plans__content">
          <h2 className="plans__headline">OUR PLANS</h2>
          <div className="plans__offers">
            <Plan
              icon="https://svgur.com/i/UkH.svg"
              name="STEEL"
              price="$50"
              time="60"
            >
              <li>Manual treatment with focus on 2 problem areas</li>
              <li>Performance stretching</li>
              <li>Trigger point treatment</li>
              <li>Percussion drill massage</li>
              <li>Instrument Assisted Soft Tissue Mobilization (IASTM)</li>
            </Plan>
            <Plan
              special
              icon="http://svgur.com/i/V1U.svg"
              name="GOLD"
              price="$75"
              time="90"
            >
              <li>Manual treatment with focus on 3 problem areas</li>
              <li>Performance stretching</li>
              <li>Trigger point treatment</li>
              <li>Percussion drill massage</li>
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
              <li>Manual treatment with focus on 4 problem areas</li>
              <li>Performance stretching</li>
              <li>Trigger point treatment</li>
              <li>Percussion drill massage</li>
              <li>Instrument Assisted Soft Tissue Mobilization (IASTM)</li>
              <li>Cupping therapy</li>
              <li>Transcutaneous Electrical Nerve Stimulation (TENS Unit)</li>
              <li>Deep friction massage</li>
              <li>Corrective ergonomic education</li>
              <li>Phoenix merchandise (Shirt)</li>
            </Plan>
          </div>
        </div>
      </section>
      <section className="home__reviews" id="reviews">
        <div className="reviews__content">
          <div className="reviews__headline">
            <h3 className="reviews__headline-tag">OUR CUSTOMERS</h3>
            <h2 className="reviews__headline-phrase">
              REAL PEOPLE. REAL RESULTS.
            </h2>
          </div>
          <div className="reviews__testimonials">
            {reviews.map((review) => (
              <Review
                key={review.id}
                review={review}
                inverted={review.id % 2 !== 0 ? "" : "inverted"}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="home__contact" id="contact">
        <div className="contact__content">
          <div className="contact__section">
            <div className="contact__headline">
              <h3 className="contact__headline-tag">OUR INFO</h3>
              <h2 className="contact__headline-phrase">CONTACT US.</h2>
            </div>
            <p className="contact__statement">
              Your convenience is our top priority. At Phoenix we bring our
              service and equipment to you whether it is at home, work, or
              anywhere else at a time most convenient to you. Reach out to us
              via phone, email, or social media and book a session today.
            </p>
          </div>
          <div className="contact__info">
            <div className="contact__phone">
              <h5>PHONE</h5>
              <h5>(786) 302 6104</h5>
            </div>
            <div
              className="contact__email"
              onClick={() =>
                (window.location.href = "mailto:phxrecover@gmail.com")
              }
            >
              <h5>EMAIL</h5>
              <h5>PHXRECOVER@GMAIL.COM</h5>
            </div>
            <div className="contact__socials">
              <div className="contact__icons">
                <h5>SOCIALS</h5>
                <FontAwesomeIcon
                  className="contact__icon"
                  icon={["fab", "facebook"]}
                  size="lg"
                  onClick={() => window.open("https://www.facebook.com/")}
                />
                <FontAwesomeIcon
                  className="contact__icon"
                  icon={["fab", "instagram"]}
                  size="lg"
                  onClick={() =>
                    window.open("https://www.instagram.com/phxrecover")
                  }
                />
                <FontAwesomeIcon
                  className="contact__icon"
                  icon={["fab", "linkedin-in"]}
                  size="lg"
                  onClick={() =>
                    window.open("https://www.linkedin.com/company/phxrecover")
                  }
                />
              </div>
            </div>
          </div>
          <h3
            className="contact__session"
            onClick={() =>
              window.open(
                "https://squareup.com/appointments/book/wwpdaytyi5m5wg/LF1SNP6G13F24/services"
              )
            }
          >
            BOOK A SESSION
          </h3>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
