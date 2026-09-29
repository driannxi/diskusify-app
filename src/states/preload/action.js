import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import { getOwnProfile } from '../../utils/api';
import { setAuthActionCreator } from '../auth/action';

const ActionType = {
  SET_PRELOAD: 'SET_PRELOAD',
};

function preloadActionCreator() {
  return {
    type: ActionType.SET_PRELOAD,
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const user = await getOwnProfile();
      dispatch(setAuthActionCreator(user));
    } catch {
      dispatch(setAuthActionCreator(null));
    } finally {
      dispatch(preloadActionCreator(false));
    }
    dispatch(hideLoading());
  };
}

export { ActionType, preloadActionCreator, asyncPreloadProcess };
