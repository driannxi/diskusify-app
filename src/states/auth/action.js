import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import { notify } from 'reapop';
import {
  getOwnProfile,
  login,
  putAccessToken,
  register,
} from '../../utils/api';

const ActionType = {
  SET_AUTH: 'SET_AUTH',
  UNSET_AUTH: 'UNSET_AUTH',
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

function asyncRegister({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await register({ name, email, password });
      dispatch(notify('Registrasi berhasil! Silakan masuk.', 'success'));
    } catch (error) {
      dispatch(notify(error.message, 'error'));
    }
    dispatch(hideLoading());
  };
}

function asyncLogin({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await login({ email, password });
      putAccessToken(token);
      const user = await getOwnProfile();
      dispatch(setAuthActionCreator(user));
      dispatch(notify('Login berhasil! Selamat datang.', 'success'));
    } catch (error) {
      dispatch(notify(error.message, 'error'));
    }
    dispatch(hideLoading());
  };
}

function asyncLogout() {
  return (dispatch) => {
    try {
      dispatch(unsetAuthActionCreator());
      putAccessToken('');
      dispatch(notify('Anda telah berhasil keluar dari akun.', 'info'));
    } catch (error) {
      dispatch(notify(error.message, 'error'));
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
