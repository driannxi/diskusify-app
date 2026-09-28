import { ActionType } from "./action";

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECIVE_THREADS:
      return action.payload.thread;
    case ActionType.CREATE_THREAD:
      return [...threads, action.payload.thread];
    default:
      return threads;
  }
}

export default threadsReducer;
