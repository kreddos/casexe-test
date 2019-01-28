import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PromotionsSlider from '../../components/PromotionsSlider';
import Loading from '../../components/Loading';
import { loadGames as loadGamesAction } from '../../actions/games';
import './style.scss';

class Games extends Component {
  static propTypes = {
    games: PropTypes.object.isRequired,
    loadData: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.renderGames = this.renderGames.bind(this);
  }

  componentDidMount() {
    const { loadData, games } = this.props;

    if (games.gamesList.length) {
      return;
    }

    loadData();
  }

  renderGames() {
    const { games } = this.props;

    return games.gamesList.map((game, key) => (
      <div key={key} className="gameItem">
        <div className="game">
          <img src={game.img} alt="" />
          <div className="gameActions">
            <Link to={`/game/${key}`} className="button base">play now</Link>
            <Link to={`/game/${key}`} className="button warn">demo</Link>
          </div>
        </div>
        <span className="gameName">{game.name}</span>
      </div>
    ));
  }

  render() {
    const { isLoading } = this.props;

    return (
      <Loading isLoading={isLoading}>

        <div className="page games">
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
      </Loading>
    );
  }
}

export const mapStateToProps = state => ({
  games: state.games,
  isLoading: state.loadings.games,
});

export const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadGamesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
