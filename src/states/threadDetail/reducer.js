import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
  case ActionType.THREAD_DETAIL:
    return action.payload.threadDetail;
  case ActionType.CLEAR_THREAD_DETAIL:
    return null;
  case ActionType.UPDATE_COMMENT:
    return {
      ...threadDetail,
      comments: [action.payload.comment, ...threadDetail.comments],
    };
  default:
    return threadDetail;
  }
}

export default threadDetailReducer;
