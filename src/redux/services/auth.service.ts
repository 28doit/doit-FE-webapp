import axios from 'axios';

export const login = (email: any, password: any) => {
  return axios
    .post(process.env.REACT_APP_BEOMS + '/accounts/login', {
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
  return axios.post(process.env.REACT_APP_BEOMS + '/accounts', formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};

export const post_re_password = (name: any, email: any, phone: any) => {
  return axios.post(process.env.REACT_APP_BEOMS + '/user/findPwd', {
    name: name,
    email: email,
    phoneNumber: phone,
  });
};

export const post_find_id = (name: any, phone: any) => {
  return axios.post(process.env.REACT_APP_BEOMS + '/user/findId', {
    name: name,
    phoneNumber: phone,
  });
};

export const send_payment = (
  merchant_uid: any,
  buyer_name: any,
  token: any,
  user_email: any,
) => {
  return axios.post(process.env.REACT_APP_BEOMS + '/payment/check', {
    mid: merchant_uid,
    name: buyer_name,
    login_email: user_email,
    token: token,
  });
};

export const edit_user_profile = (formData: any) => {
  return axios.post(
    process.env.REACT_APP_BEOMS + `/api/uploader/profileimage`,
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
    process.env.REACT_APP_BEOMS + '/accounts/email?email=' + email,
  );
};

export const expired_check = (token: any, userEmail: any) => {
  return axios.get(
    process.env.REACT_APP_BEOMS +
      `/accounts/token?token=${token}&email=${userEmail}`,
  );
};

export const get_purchase = (startDate: any, endDate: any, token: any) => {
  return axios.get(
    process.env.REACT_APP_BEOMS +
      `/item/buy?token=${token}&start_history=${startDate}&end_history=${endDate}`,
  );
};

export const get_pay_log = (token: any, startDate: any, endDate: any) => {
  return axios.get(
    process.env.REACT_APP_BEOMS +
      `/cash/payment?token=${token}&start_history=${startDate}&end_history=${endDate}`,
  );
};

export const get_favorite_img = (idx: any) => {
  return axios.get(
    process.env.REACT_APP_BEOMS + `/subscribe/gallery/cursor/${idx}`,
  );
};

export const get_favorite_auth = (idx: any) => {
  return axios.get(
    process.env.REACT_APP_BEOMS + `/subscribe/user/cursor/${idx}`,
  );
};

export const get_management = () => {
  return axios.get(process.env.REACT_APP_LOCAL + '/manage');
};

export const post_upload_img = (formData: any) => {
  return axios.post(
    process.env.REACT_APP_BEOMS + '/uploader/images',
    formData,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );
};

export const get_cursor_based_img = (imgCount: any, imgName: any) => {
  return axios.get(
    process.env.REACT_APP_BEOMS + `/search/title/${imgCount}/${imgName}`,
  );
};

export const get_cursor_based_auth = (imgCount: any, authName: any) => {
  return axios.get(
    process.env.REACT_APP_BEOMS + `/seller/${imgCount}/${authName}`,
  );
};

export const get_cursor_based_default = (imgCount: any) => {
  return axios.get(
    process.env.REACT_APP_BEOMS + `/pagination/cursor/${imgCount}`,
  );
};

export const get_category = () => {
  return axios.get(
    `https://0d67f0d3-4d63-402a-b634-396764869c5e.mock.pstmn.io/category`,
  );
};

export const put_profit_bank = (token: any, email: any, pay: any) => {
  return axios.put(
    process.env.REACT_APP_BEOMS +
      `/cash/withdrawal?token=${token}&email=${email}&pay=${pay}`,
  );
};

export const get_profit_log = (
  token: any,
  email: any,
  startDate: any,
  endDate: any,
) => {
  return axios.get(
    process.env.REACT_APP_BEOMS +
      `/cash/withdrawal?token=${token}&email=${email}&start_history=${startDate}&end_history=${endDate}`,
    {},
  );
};

export const get_dash = (idx: any) => {
  return axios.get(process.env.REACT_APP_BEOMS + `/user/${idx}`);
};

export const get_img_detail = (galleryId: any) => {
  return axios.get(process.env.REACT_APP_BEOMS + `/gallery/${galleryId}`);
};

export const post_like_img = (idx: any, galleryId: any) => {
  return axios.post(process.env.REACT_APP_BEOMS + `/subscribe/gallery`, {
    idx: idx,
    galleryId: galleryId,
  });
};

export const post_like_author = (idx: any, subscribeUser: any) => {
  return axios.post(process.env.REACT_APP_BEOMS + `/subscribe/user`, {
    idx: idx,
    subscribeUser: subscribeUser,
  });
};

export const post_buy_img = (token: any, gallery_id: any) => {
  return axios.post(process.env.REACT_APP_BEOMS + `/item/buy`, {
    token: token,
    gallery_id: gallery_id,
  });
};

export const get_cart = (token: any, email: any) => {
  return axios.get(
    process.env.REACT_APP_BEOMS + `/item/cart?token=${token}&email=${email}`,
  );
};

export const post_pay_cart = (
  token: any,
  email: any,
  items: any,
  money: any,
) => {
  return axios.post(process.env.REACT_APP_BEOMS + `/item/cart/buy`, {
    token: token,
    user_email: email,
    gallery_id: items,
    pay: money,
  });
};

export const post_delete_cart = (token: any, email: any, items: any) => {
  return axios.delete(
    process.env.REACT_APP_BEOMS +
      `/item/cart?token=${token}&email=${email}&gallery_id=${items}`,
  );
};

export const post_cart_img = (token: any, email: any, gallery_id: any) => {
  return axios.post(process.env.REACT_APP_BEOMS + `/item/cart`, {
    token: token,
    email: email,
    gallery_id: gallery_id,
  });
};
