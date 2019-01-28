import * as loadingsConstants from '../constants/loadings';

const initialState = {
  game: false,
  games: false,
};

const loadingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadingsConstants.START_LOADING:
      return {
        ...state,
        [action.payload]: true,
      };
    case loadingsConstants.STOP_LOADING:
      return {
        ...state,
        [action.payload]: false,
      };

    default:
      return state;
  }
};

export default loadingsReducer;
