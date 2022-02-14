import React, { useState } from 'react';
import { ReactComponent as LogoEmblem } from '../../assets/logo-emblem.svg';
import { ReactComponent as LogoTextLight } from '../../assets/logo-text-light.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from '../../components/nav/nav.component';
import Plan from '../../components/plan/plan.component';
import Review from '../../components/review/review.component';
import Treatment from '../../components/treatment/treatment.component';
import Footer from '../../components/footer/footer.component';

import REVIEWS_DATA from './reviews.data';

import './home.styles.scss';

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
              icon={['fab', 'facebook']}
              size="2x"
              onClick={() => window.open('https://www.facebook.com/')}
            />
            <FontAwesomeIcon
              className="landing__icon"
              icon={['fab', 'instagram']}
              size="2x"
              onClick={() =>
                window.open('https://www.instagram.com/phxrecover')
              }
            />
            <FontAwesomeIcon
              className="landing__icon"
              icon={['fab', 'linkedin-in']}
              size="2x"
              onClick={() =>
                window.open('https://www.linkedin.com/company/phxrecover')
              }
            />
          </div>
          <h3
            className="landing__session"
            onClick={() =>
              window.open(
                'https://square.site/book/LF1SNP6G13F24/phoenix-wellness-recovery-miami-fl'
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
                src="/images/mission/profile.jpg"
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
              src="/images/gallery/gallery-1.jpg"
              alt="Percussion Drill"
            />
          </div>
          <div className="gallery__image--container">
            <img
              className="gallery__image"
              src="/images/gallery/gallery-2.jpg"
              alt="TENS"
            />
          </div>
          <div className="gallery__image--container">
            <img
              className="gallery__image"
              src="/images/gallery/gallery-3.jpg"
              alt="Cupping"
            />
          </div>
        </div>
      </section>

      <section className="home__plans" id="plans">
        <div className="plans__content">
          <h3 className="plans__headline-tag">OUR PLANS</h3>
          <h2 className="plans__headline">STANDARD TREATMENT</h2>
          <div className="plans__offers">
            <Plan
              icon="/images/plans/plan-steel.png"
              name="STEEL"
              price="$115"
              priceMonthly="$150"
              time="60"
            >
              <li>
                Schedule <b>2</b> &#8212; 45 minute sessions anywhere, anytime including:
              </li>
              <ul className="plan__list-sub">
                <li>Manual treatment with focus on 2 problem areas</li>
                <li>Active Assitive Range of Motion stretching</li>
                <li>Trigger point treatment</li>
                <li>Percussion drill massage</li>
                <li>Instrument Assisted Soft Tissue Mobilization (IASTM)</li>
              </ul>
              <p className="plan__center">AND</p>
              <li>
                Select <b>1</b> specialized service including:
              </li>
              <ul className="plan__list-sub">
                <li>
                  Pneumatic compression device (Arm, Legs, Hip Lower back)
                </li>
                <li>Temperature contrast technology/modalities</li>
              </ul>
            </Plan>
            <Plan
              special
              icon="/images/plans/plan-gold.png"
              name="GOLD"
              price="$135"
              priceMonthly="$200"
              time="90"
            >
              <li>
                Schedule <b>3</b> &#8212; 45 minute sessions anywhere, anytime including:
              </li>
              <ul className="plan__list-sub">
                <li>Manual treatment with focus on 2 problem areas</li>
                <li>Active Assitive Range of Motion stretching</li>
                <li>Trigger point treatment</li>
                <li>Percussion drill massage</li>
                <li>Instrument Assisted Soft Tissue Mobilization (IASTM)</li>
              </ul>
              <p className="plan__center">AND</p>
              <li>
                Select <b>1</b> specialized service including:
              </li>
              <ul className="plan__list-sub">
                <li>
                  Pneumatic compression device (Arm, Legs, Hip Lower back)
                </li>
                <li>Temperature contrast technology/modalities</li>
              </ul>
            </Plan>
            <Plan
              icon="/images/plans/plan-obsidian.png"
              name="OBSIDIAN"
              price="$170"
              priceMonthly="$250"
              time="120"
            >
              <li>
                Schedule <b>4</b> &#8212; 45 minute sessions anywhere, anytime including:
              </li>
              <ul className="plan__list-sub">
                <li>Manual treatment with focus on 2 problem areas</li>
                <li>Active Assitive Range of Motion (AAROM) stretching</li>
                <li>Trigger point treatment</li>
                <li>Percussion drill massage</li>
                <li>Instrument Assisted Soft Tissue Mobilization (IASTM)</li>
              </ul>
              <p className="plan__center">AND</p>
              <li>
                Select <b>2</b> specialized services including:
              </li>
              <ul className="plan__list-sub">
                <li>
                  Pneumatic compression device (Arm, Legs, Hip Lower back)
                </li>
                <li>Temperature contrast technology/modalities</li>
              </ul>
            </Plan>
          </div>
          <h2 className="plans__headline">SPECIALIZED TREATMENT</h2>
          <div className="plans__treatments">
            <Treatment
              title="PNEUMATIC COMPRESSION"
              images={[
                '/images/plans/compress_1.jpg',
                '/images/plans/compress_2.jpg',
                '/images/plans/compress_3.jpg',
              ]}
            ></Treatment>
            <Treatment
              title="TEMPERATURE CONTRAST"
              images={[
                '/images/plans/heat_1.jpg',
                '/images/plans/heat_2.jpg',
                '/images/plans/heat_3.jpg',
                '/images/plans/heat_4.jpg',
              ]}
            ></Treatment>
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
                inverted={review.id % 2 !== 0 ? '' : 'inverted'}
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
                (window.location.href = 'mailto:phxrecover@gmail.com')
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
                  icon={['fab', 'facebook']}
                  size="lg"
                  onClick={() => window.open('https://www.facebook.com/')}
                />
                <FontAwesomeIcon
                  className="contact__icon"
                  icon={['fab', 'instagram']}
                  size="lg"
                  onClick={() =>
                    window.open('https://www.instagram.com/phxrecover')
                  }
                />
                <FontAwesomeIcon
                  className="contact__icon"
                  icon={['fab', 'linkedin-in']}
                  size="lg"
                  onClick={() =>
                    window.open('https://www.linkedin.com/company/phxrecover')
                  }
                />
              </div>
            </div>
          </div>
          <h3
            className="contact__session"
            onClick={() =>
              window.open(
                'https://square.site/book/LF1SNP6G13F24/phoenix-wellness-recovery-miami-fl'
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
