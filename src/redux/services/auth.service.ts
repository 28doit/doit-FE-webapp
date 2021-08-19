import axios from 'axios';

export const login = (email: any, password: any) => {
  return axios.post('/accounts/login', { email, password }).then((response) => {
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });
};

export const email_check = (email: any) => {
  return axios.get('/accounts/new/email-check?email=' + email);
};

export const expired_check = (token: any, userEmail: any) => {
  return axios.get(`/accounts/token-check?token=${token}&email=${userEmail}`);
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

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('ans');
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
    phoneNumber,
    sex,
    profileImageLocation,
    userYear,
    userMonth,
    userDay,
    password,
    type,
    gallCount,
    userSubscribeCount,
  });
};
