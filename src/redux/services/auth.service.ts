import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';

const API_URL: any = process.env.REACT_APP_MOCK_POST_URL;

export const login = (email: any, password: any) => {
  return axios.post('/accounts/login', { email, password }).then((response) => {
    const decode = JSON.stringify(jwtDecode<JwtPayload>(response.data.token));

    if (response.data.token) {
      localStorage.setItem('user', decode);
    }

    return response.data;
  });
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const register = (
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
) => {
  return axios.post('/accounts/new', {
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
  });
};
