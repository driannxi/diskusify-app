import {
  getOwnProfile,
  login,
  putAccessToken,
  register,
} from "../../utils/api";

const ActionType = {
  SET_AUTH: "SET_AUTH",
  UNSET_AUTH: "UNSET_AUTH",
};

function setAuthActionCreator(user) {
  return {
    type: ActionType.SET_AUTH,
    payload: {
      user,
    },
  };
}

function unsetAuthActionCreator() {
  return {
    type: ActionType.UNSET_AUTH,
  };
}

//thunk funct
function asyncRegister({ name, email, password }) {
  return async () => {
    try {
      await register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncLogin({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await login({ email, password });
      putAccessToken(token);
      const user = await getOwnProfile();
      dispatch(setAuthActionCreator(user));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncLogout() {
  return (dispatch) => {
    try {
      dispatch(unsetAuthActionCreator());
      putAccessToken("");
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  setAuthActionCreator,
  unsetAuthActionCreator,
  asyncRegister,
  asyncLogin,
  asyncLogout,
};
