import axios from 'axios';

interface LoginProps {
  email: string;
  password: string;
}
// 로컬 API 만들기
// npx json-server ./db.json --watch --port 8888
export const AxiosLogin = async ({ email, password }: LoginProps) => {
  const response = await axios.get('http://localhost:8888/users');
  const users = await response.data;
  console.log(users);
  const user = users.find((user: any) => user.email === email);
  if (!user || user.password !== password) {
    throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
  }
  console.log(`${email}님 환영합니다!`);
  console.log(typeof user);
  return user;
};
