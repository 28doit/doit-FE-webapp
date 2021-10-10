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

export const editUserProfile = (formData: any) => {
  return axios.post(
    process.env.REACT_APP_HOON + `/api/uploader/profileimage`,
    formData,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );
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

export const register = (formData: any) => {
  return axios.post(process.env.REACT_APP_HOON + '/accounts/new', formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};

export const get_purchase = (startDate: any, endDate: any) => {
  return axios.get(process.env.REACT_APP_LOCAL + `/purchase`);
};

export const get_pay_log = (token: any, startDate: any, endDate: any) => {
  return axios.get(
    process.env.REACT_APP_BEOM +
      `/payment/history?token=${token}&start_history=${startDate}&end_history=${endDate}`,
  );
};

export const get_favorite = () => {
  return axios.get(process.env.REACT_APP_LOCAL + '/favorite');
};

export const get_management = () => {
  return axios.get(process.env.REACT_APP_LOCAL + '/manage');
};

export const post_upload_img = (formData: any) => {
  return axios.post(
    process.env.REACT_APP_HOON + '/api/uploader/images',
    formData,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );
};

export const get_cursor_based_img = (imgCount: any) => {
  return axios.get(process.env.REACT_APP_LOCAL + `/cursor${imgCount}`);
};

export const get_category = () => {
  return axios.get(process.env.REACT_APP_LOCAL + `/category`);
};

export const get_profit = () => {
  return axios.get(process.env.REACT_APP_LOCAL + `/profit`);
};

export const post_profit_bank = () => {
  return axios.post(process.env.REACT_APP_LOCAL + `/test`);
};

export const get_dash = () => {
  return axios.get(process.env.REACT_APP_LOCAL + `/dash`);
};

export const get_img_detail = (galleryId: any) => {
  return axios.get(process.env.REACT_APP_LOCAL + `/imde`);
};
