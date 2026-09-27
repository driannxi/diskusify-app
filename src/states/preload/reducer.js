import { ActionType } from "./action";

function preloadReducer(preload = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_PRELOAD:
      return false;
    default:
      return preload;
  }
}

export default preloadReducer;
