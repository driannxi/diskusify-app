import { getOwnProfile } from "../../utils/api";
import { setAuthActionCreator } from "../auth/action";

const ActionType = {
  SET_PRELOAD: "SET_PRELOAD",
};

function preloadActionCreator() {
  return {
    type: ActionType.SET_PRELOAD,
  };
}

//thunk funct
function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      const user = await getOwnProfile();
      dispatch(setAuthActionCreator(user));
    } catch {
      dispatch(setAuthActionCreator(null));
    } finally {
      dispatch(preloadActionCreator(false));
    }
  };
}

export { ActionType, preloadActionCreator, asyncPreloadProcess };
