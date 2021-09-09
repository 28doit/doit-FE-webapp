import axios from 'axios';

export const re_password = (name: any, email: any, phone: any) => {
  return axios.post('/api/user/findPwd', {
    name: name,
    email: email,
    phoneNumber: phone,
  });
};

export const send_payment = (
  merchant_uid: any,
  buyer_name: any,
  buyer_email: any,
  paid_amount: any,
  imp_uid: any,
  token: any,
  user_email: any,
) => {
  return axios.post(process.env.REACT_APP_BEOM + '/payment/check', {
    mid: merchant_uid,
    name: buyer_name,
    //buyer_email: buyer_email,
    //paid_amount: paid_amount,
    //imp_uid: imp_uid,
    token: token,
    login_email: user_email,
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
  phoneNumber: any,
  sex: any,
  profileImageLocation: any,
  userYear: any,
  userMonth: any,
  userDay: any,
  password: any,
  type: any,
  gallCount: any,
  userSubscribeCount: any,
) => {
  return axios.post(process.env.REACT_APP_BEOM + '/accounts/new', {
    email: email,
    name: name,
    nick_name: nickName,
    phone_number: phoneNumber,
    sex: sex,
    profile_image_location: profileImageLocation,
    user_year: userYear,
    user_month: userMonth,
    user_day: userDay,
    password: password,
    type: type,
    gall_count: gallCount,
    user_subscribe_count: userSubscribeCount,
  });
};
