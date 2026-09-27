import { ActionType } from "./action";

function threadsReducer(threads = null, action = {}) {
  switch (action.type) {
    case ActionType.RECIVE_THREADS:
      return action.payload.thread;
    default:
      return threads;
  }
}

export default threadsReducer;
