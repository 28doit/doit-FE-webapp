import axios from 'axios';

export const re_password = (name: any, email: any, phone: any) => {
  return axios.post('/api/user/findPwd', {
    name: name,
    email: email,
    phoneNumber: phone,
  });
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

export const email_check = (email: any) => {
  return axios.get(
    process.env.REACT_APP_BEOM + '/accounts/new/email-check?email=' + email,
  );
};

export const expired_check = (token: any, userEmail: any) => {
  return axios.get(
    process.env.REACT_APP_BEOM +
      `/accounts/token-check?token=${token}&email=${userEmail}`,
  );
};

export const login = (email: any, password: any) => {
  return axios
    .post(process.env.REACT_APP_BEOM + '/accounts/login', {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
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
  return axios.post(process.env.REACT_APP_BEOM + '/accounts/new', {
    email: email,
    name: name,
    nickName: nickName,
    phoneNumber: phoneNumber,
    sex: sex,
    profileImageLocation: profileImageLocation,
    userYear: userYear,
    userMonth: userMonth,
    userDay: userDay,
    password: password,
    type: type,
    gallCount: gallCount,
    userSubscribeCount: userSubscribeCount,
  });
};
