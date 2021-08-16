import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  IS_EXPIRED,
  EXPIRED_ERR,
} from './types';
import { login, register, logout, is_expired } from '../services/auth.service';

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

export const NisExpired = (token: any, userEmail: any) => (dispatch: any) => {
  return is_expired(token, userEmail).then(
    (response) => {
      console.log(response); // 여기서 조건문 분기로 나누면 되겠다.
      dispatch({
        type: IS_EXPIRED,
        payload: { ans: response },
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: EXPIRED_ERR,
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
