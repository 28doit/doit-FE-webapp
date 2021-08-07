import axios from 'axios';
import authHeader from './auth-header';

const API_URL =
  'http://50a0bca4-a26d-4e42-b15a-5cf7163d7619.mock.pstmn.io/accounts/new';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + '/all');
  }

  getUserBoard() {
    return axios.get(API_URL + '/user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + '/mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + '/admin', { headers: authHeader() });
  }
}

export default new UserService();
