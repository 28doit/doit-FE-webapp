import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';

const API_URL: any = process.env.REACT_APP_MOCK_POST_URL;

class AuthService {
  login(data: any) {
    return axios.post(API_URL, { data }).then((response) => {
      const decode = jwtDecode<JwtPayload>(response.data);

      // 원래는 response.data.accessToken임
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(decode));
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
