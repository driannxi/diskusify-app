import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
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
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export default asyncUsersAndThread;
