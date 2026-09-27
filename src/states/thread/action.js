const ActionType = {
  RECIVE_THREADS: "RECIVE_THREADS",
};

function reciveThreadsActionCreator(thread) {
  return {
    type: ActionType.RECIVE_THREADS,
    payload: { thread },
  };
}

function asyncAddThread() {}

export { ActionType, reciveThreadsActionCreator, asyncAddThread };
