import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import './treatment.styles.scss';
import '@splidejs/splide/dist/css/splide.min.css';

const Treatment = ({ title, images, children }) => (
  <div className="treatment">
    <h3 className="treatment__title">{title}</h3>
    <div className="treatment__showcase">
      <Splide
        options={{
          rewind: true,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide>
            <img src={image} alt={title + ' ' + index} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
    <div className="treatment__content">{children}</div>
  </div>
);

export default Treatment;
