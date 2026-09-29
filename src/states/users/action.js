const ActionType = {
  RECIVE_USERS: 'RECIVE_USERS',
};

function reciveUsersActionCreator(users) {
  return {
    type: ActionType.RECIVE_USERS,
    payload: { users },
  };
}

export { ActionType, reciveUsersActionCreator };
