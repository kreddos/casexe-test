import React, { Component } from 'react';
import PromotionsSlider from '../../components/PromotionsSlider';
import games from './games.json';
import './style.scss';

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  renderGames() {
    return games.map((game, key) => (
      <div key={key} className="gameItem">
        <div className="game">
          <img src={game.img} alt="" />
          <div className="gameActions">
            <a href="/" className="button base">play now</a>
            <a href="/" className="button warn">demo</a>
          </div>
        </div>
        <span className="gameName">{game.name}</span>
      </div>
    ));
  }

  render() {
    return (
      <div className="games">
        <div className="container">
          <div className="row mainActions">
            <div className="col-sm">
              <button type="button" className="button">
                <img src="/assets/img/icons/POPULAR.png" alt="icon" />
                  popular
              </button>
            </div>
            <div className="col-sm">
              <button type="button" className="button">
                <img src="/assets/img/icons/NEW_ICON.png" alt="icon" />
                  new
              </button>
            </div>
            <div className="col-sm">
              <button type="button" className="button">
                <img src="/assets/img/icons/SLOT_GAME.png" alt="icon" />
                  slot games
              </button>
            </div>
            <div className="col-sm">
              <button type="button" className="button">
                <img src="/assets/img/icons/CARDS.png" alt="icon" />
                  card games
              </button>
            </div>
            <div className="col-sm">
              <button type="button" className="button">
                <img src="/assets/img/icons/ROULETTE.png" alt="icon" />
                  roulette
              </button>
            </div>
          </div>
          <div className="mainGames">
            <div className="row">
              <div className="col-sm filters">
                sort By:
                <ul>
                  <li><button type="button">POPULARITY</button></li>
                  <li>|</li>
                  <li><button type="button">A-Z</button></li>
                </ul>
              </div>
              <div className="col-sm gamesSearch">
                <input type="text" placeholder="Search for game ..." />
                <img src="/assets/img/icons/SEARCH_ICON.png" alt="" />
              </div>
            </div>
            <div className="row games">
              <div className="promotionsItem">
                <PromotionsSlider />
              </div>


              {this.renderGames()}


            </div>
            <div className="row gamesActions">
              <button type="button" className="button base">more games</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
