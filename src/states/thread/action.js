import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import { createThread } from '../../utils/api';

const ActionType = {
  RECIVE_THREADS: 'RECIVE_THREADS',
  CREATE_THREAD: 'CREATE_THREAD',
};

function reciveThreadsActionCreator(thread) {
  return {
    type: ActionType.RECIVE_THREADS,
    payload: { thread },
  };
}

function createThreadActionCreator(thread) {
  return {
    type: ActionType.CREATE_THREAD,
    payload: { thread },
  };
}

function asyncAddThread({ title, body }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await createThread({ title, body });
      dispatch(createThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  reciveThreadsActionCreator,
  createThreadActionCreator,
  asyncAddThread,
};
