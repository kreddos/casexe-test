import * as gamesConstants from '../constants/games';
import gamesData from '../data/games';
import * as loadingsActions from './loadings';

export const setGames = games => ({
  type: gamesConstants.SET_GAMES,
  payload: games,
});

export const loadGamesError = error => ({
  type: gamesConstants.LOAD_GAMES_ERROR,
  error,
});


export const loadGames = () => async (dispatch) => {
  try {
    dispatch(loadingsActions.startLoading('games'));

    await new Promise((res) => { setTimeout(res, 3000); });

    dispatch(setGames(gamesData));
  } catch (error) {
    dispatch(loadGamesError(error));
    throw error;
  } finally {
    dispatch(loadingsActions.stopLoading('games'));
  }
};
