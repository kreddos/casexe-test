import * as gamesConstants from '../constants/games';

const initialState = {
  gamesList: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case gamesConstants.SET_GAMES:
      return {
        ...state,
        gamesList: action.payload,
      };

    default:
      return state;
  }
};

export default gamesReducer;
