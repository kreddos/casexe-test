import React, { Component } from 'react';
import Slider from 'react-slick';

import './style.scss';

class PromotionsSlider extends Component {
  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    arrows: false,
  }

  render() {
    return (
      <div className="promotionsSlider">
        <div className="promotionsTitle">Promotions</div>
        <div className="slider">
          <Slider {...this.settings}>
            <img src="/assets/img/3-layers.png" alt="" />
            <img src="/assets/img/3-layers.png" alt="" />
            <img src="/assets/img/3-layers.png" alt="" />
            <img src="/assets/img/3-layers.png" alt="" />
          </Slider>
        </div>
      </div>
    );
  }
}

export default PromotionsSlider;
