import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import { login, register, logout } from '../services/auth.service';

export const Nregister = (formData: any) => (dispatch: any) => {
  return register(formData).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: REGISTER_FAIL,
      });

      return Promise.reject();
    },
  );
};

export const Nlogin = (email: any, password: any) => (dispatch: any) => {
  return login(email, password).then(
    (data) => {
      if (data.name && data.token) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });

        return Promise.resolve(data);
      } else {
        dispatch({
          type: LOGIN_FAIL,
        });

        return Promise.resolve(data);
      }
    },
    (error) => {
      dispatch({
        type: LOGIN_FAIL,
      });

      return Promise.reject();
    },
  );
};

export const Nlogout = () => (dispatch: any) => {
  logout();

  dispatch({
    type: LOGOUT,
  });
};
