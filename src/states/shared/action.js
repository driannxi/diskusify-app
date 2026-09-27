import { getAllThreads, getAllUsers } from "../../utils/api";
import { reciveThreadsActionCreator } from "../thread/action";
import { reciveUsersActionCreator } from "../users/action";

function asyncUsersAndThread() {
  return async (dispatch) => {
    try {
      const threads = await getAllThreads();
      const users = await getAllUsers();

      dispatch(reciveThreadsActionCreator(threads));
      dispatch(reciveUsersActionCreator(users));
    } catch (error) {
      alert(error.message);
    }
  };
}

export default asyncUsersAndThread;
