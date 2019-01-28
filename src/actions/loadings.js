import * as loadingsConstants from '../constants/loadings';

export const startLoading = loadingName => ({
  type: loadingsConstants.START_LOADING,
  payload: loadingName,
});

export const stopLoading = loadingName => ({
  type: loadingsConstants.STOP_LOADING,
  payload: loadingName,
});
