import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';
import { loadGame as loadGameAction, resetGame as resetGameAction } from '../../actions/game';

class Game extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    loadData: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    const { loadData, match } = this.props;
    loadData(match.params.id);
  }


  componentWillUnmount() {
    const { resetGame } = this.props;
    resetGame();
  }

  renderError() {
    const { game: { error } } = this.props;

    return (
      <div className="page game">
        <div className="container">{error.message}</div>
      </div>
    );
  }

  renderGame() {
    const { game: { gameInfo, error } } = this.props;

    if (error) {
      return this.renderError();
    }

    if (!gameInfo) {
      return null;
    }

    return (
      <div className="page game">
        <div className="container">
          <img src={gameInfo.img} alt="" />
          <div>{gameInfo.name}</div>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading } = this.props;


    return (
      <Loading isLoading={isLoading}>
        {this.renderGame()}
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
  isLoading: state.loadings.game,
});

const mapDispatchToProps = dispatch => ({
  loadData: gameId => dispatch(loadGameAction(gameId)),
  resetGame: () => dispatch(resetGameAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
