import axios from 'axios';
import authHeader from './auth-header';

export const getPublicContent = () => {
  return axios.get('url' + '/all');
};

export const getUserInfo = (userEmail: any) => {
  axios.get('/user/' + userEmail);
};

export const getAdminBoard = () => {
  return axios.get('url' + '/admin', { headers: authHeader() });
};

export const editUserProfile = (
  userEmail: any,
  password: any,
  nickName: any,
) => {
  return axios.post('/user/setpassword/' + userEmail, {
    password: password,
    nickName: nickName,
  });
};
