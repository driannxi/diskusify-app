import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import { notify } from 'reapop';
import { getAllThreads, getAllUsers } from '../../utils/api';
import { reciveThreadsActionCreator } from '../thread/action';
import { reciveUsersActionCreator } from '../users/action';

function asyncUsersAndThread() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threads = await getAllThreads();
      const users = await getAllUsers();

      dispatch(reciveThreadsActionCreator(threads));
      dispatch(reciveUsersActionCreator(users));
    } catch (error) {
      dispatch(notify(error.message, 'error'));
    }
    dispatch(hideLoading());
  };
}

export default asyncUsersAndThread;
