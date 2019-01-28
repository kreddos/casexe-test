import { combineReducers } from 'redux';
import gamesReducer from './games';
import gameReducer from './game';
import loadingsReducer from './loadings';

const rootReducer = combineReducers({
  games: gamesReducer,
  game: gameReducer,
  loadings: loadingsReducer,
});

export default rootReducer;
