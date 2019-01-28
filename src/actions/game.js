import * as gameConstants from '../constants/game';
import gamesData from '../data/games';
import * as loadingsActions from './loadings';

export const loadGameError = error => ({
  type: gameConstants.LOAD_GAME_ERROR,
  error,
});

export const resetGame = () => ({
  type: gameConstants.RESET_GAME,
});

export const setGame = games => ({
  type: gameConstants.SET_GAME,
  payload: games,
});

export const loadGame = gameId => async (dispatch) => {
  try {
    dispatch(loadingsActions.startLoading('game'));

    await new Promise((res) => { setTimeout(res, 3000); });
    const game = gamesData[gameId];

    if (!game) {
      throw new Error('Игра не найдена');
    }

    dispatch(setGame(game));
  } catch (e) {
    dispatch(loadGameError(e));
    throw e;
  } finally {
    dispatch(loadingsActions.stopLoading('game'));
  }
};
