import axios from 'axios';
import { JOIN_USER, LOGIN_USER } from './types';

export const loginUser = (dataToSubmit: any) => {
  const loginUrl: any = process.env.REACT_APP_LOGIN_API_URL;
  const request: any = axios
    .post(loginUrl, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request, // 나중에 백엔드에서 로그인 성공하면 보내줄 정보를 저장하는 곳
  };
};

export const joinUser = (dataToSubmit: any) => {
  const joinUrl: any = process.env.REACT_APP_JOIN_API_URL;
  const request: any = axios
    .post(joinUrl, dataToSubmit)
    .then((response) => response.data);

  return {
    type: JOIN_USER,
    payload: request,
  };
};
