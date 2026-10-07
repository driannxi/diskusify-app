import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import { notify } from 'reapop';
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
      dispatch(notify('Komentar berhasil ditambahkan!', 'success'));
    } catch (error) {
      dispatch(notify(error.message, 'error'));
    }
    dispatch(hideLoading());
  };
}

export { ActionType, addCommentActionCreator, asyncAddComment };
