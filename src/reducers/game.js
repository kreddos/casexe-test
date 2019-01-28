import * as gameConstants from '../constants/game';

const initialState = {
  gameInfo: null,
  error: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case gameConstants.LOAD_GAME_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case gameConstants.SET_GAME:
      return {
        ...state,
        gameInfo: action.payload,
        error: null,
      };

    case gameConstants.RESET_GAME:
      return {
        ...state,
        gameInfo: null,
        error: null,
      };

    default:
      return state;
  }
};

export default gameReducer;
