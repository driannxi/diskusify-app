import { ActionType } from './action';

const leaderboardReducer = (leaderboard = [], action) => {
  switch (action.type) {
  case ActionType.RECIVE_LEADERBOARD:
    return action.payload.leaderboard;
  default:
    return leaderboard;
  }
};

export default leaderboardReducer;