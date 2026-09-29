import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import { createComment } from '../../utils/api';
import { reciveUpdateCommentActionCreator } from '../threadDetail/action';

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
};

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: { comment },
  };
}

function asyncAddComment({ threadId = '', content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await createComment({ threadId, content });
      dispatch(addCommentActionCreator(comment));
      dispatch(reciveUpdateCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, addCommentActionCreator, asyncAddComment };
