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
  return axios.get('accounts/new/email-check?email=' + email);
};

export const is_expired = (token: any, userEmail: any) => {
  return axios.post('url', { token: token, userEmail: userEmail });
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
