import React from 'react';
import Slider from 'react-slick';
import games from './games.json';
import './style.scss';

export default class SimpleSlider extends React.Component {
  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 10000,
    nextArrow: <this.renderNextArrow />,
    prevArrow: <this.renderPrewArrow />,
  }

  renderNextArrow({ className, style, onClick }) {
    return (
      // eslint-disable-next-line
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
      <img className={className} style={style} onClick={onClick} src="/assets/img/icons/ARROW_right.png" alt="" />
    );
  }

  renderPrewArrow({ className, style, onClick }) {
    return (
      // eslint-disable-next-line
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
      <img className={className} style={style} onClick={onClick} src="/assets/img/icons/ARROW.png" alt="" />
    );
  }

  renderGamesItems() {
    return games.map((game, key) => (
      <div key={key}>
        <div className="winnerSliderItem">
          <div className="winnerGameImgContainer">
            <img src={game.img} alt="" />
          </div>
          <div className="winnerGameInfo">
            <div className="gameName">{game.gameName}</div>
            <div className="win">{game.cost}</div>
            <div className="playerName">{game.playerName}</div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="winnersSlider">
        <Slider {...this.settings}>
          {this.renderGamesItems()}
        </Slider>
      </div>
    );
  }
}
