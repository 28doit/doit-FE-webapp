import axios from 'axios';

const API_URL =
  'http://50a0bca4-a26d-4e42-b15a-5cf7163d7619.mock.pstmn.io/accounts/new';

class AuthService {
  login(data: any) {
    return axios.post(API_URL, { data }).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(data: any) {
    return axios.post(API_URL, {
      data,
    });
  }
}

export default new AuthService();
