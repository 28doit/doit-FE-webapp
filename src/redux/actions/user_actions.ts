import axios from 'axios';
import { JOIN_USER, LOGIN_USER } from './types';

export const loginUser = (dataToSubmit: any) => {
  const loginUrl: any = process.env.REACT_APP_LOGIN_API_URL;
  const request: any = axios
    .post(loginUrl, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const joinUser = (dataToSubmit: any) => {
  const joinUrl: any = process.env.REACT_APP_MOCK_POST_URL;
  const request: any = axios
    .post(joinUrl, dataToSubmit)
    .then((response) => response.data);

  return {
    type: JOIN_USER,
    payload: request,
  };
};
