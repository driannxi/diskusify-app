import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import { notify } from 'reapop';
import { getDetailThread } from '../../utils/api';

const ActionType = {
  THREAD_DETAIL: 'THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  UPDATE_COMMENT: 'UPDATE_COMMENT',
};

function threadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.THREAD_DETAIL,
    payload: { threadDetail },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function reciveUpdateCommentActionCreator(comment) {
  return {
    type: ActionType.UPDATE_COMMENT,
    payload: { comment },
  };
}

function asyncThreadDetail(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await getDetailThread(id);
      dispatch(threadDetailActionCreator(threadDetail));
    } catch (error) {
      dispatch(notify(error.message, 'error'));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  threadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncThreadDetail,
  reciveUpdateCommentActionCreator,
};
