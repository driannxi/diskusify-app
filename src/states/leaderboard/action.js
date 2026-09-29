import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import { getLeaderboard } from '../../utils/api';

const ActionType = {
  RECIVE_LEADERBOARD: 'RECIVE_LEADERBOARD'
};

function reciveLeaderBoardActionCreator(leaderboard){
  return {
    type: ActionType.RECIVE_LEADERBOARD,
    payload: { leaderboard }
  };
}

async function asyncReceiveLeaderboard() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboard = await getLeaderboard();
      dispatch(reciveLeaderBoardActionCreator(leaderboard));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  reciveLeaderBoardActionCreator,
  asyncReceiveLeaderboard
};