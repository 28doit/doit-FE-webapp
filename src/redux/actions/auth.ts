import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './types';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { login, register, logout } from '../services/auth.service';

export const Nregister =
  (
    email: any,
    name: any,
    nickName: any,
    sex: any,
    phoneNumber: any,
    password: any,
    userYear: any,
    userMonth: any,
    userDay: any,
    type: any,
    gallCount: any,
    userSubscribeCount: any,
    profileImageLocation: any,
  ) =>
  (dispatch: any) => {
    return register(
      email,
      name,
      nickName,
      sex,
      phoneNumber,
      password,
      userYear,
      userMonth,
      userDay,
      type,
      gallCount,
      userSubscribeCount,
      profileImageLocation,
    ).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      },
    );
  };

export const Nlogin = (email: any, password: any) => (dispatch: any) => {
  return login(email, password).then(
    (data) => {
      console.log(data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
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
