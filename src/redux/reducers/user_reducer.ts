import { JOIN_USER, LOGIN_USER } from '../actions/types';

export default function (state = {}, action: any) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload }; // 백엔드에서 정보 가져올 예정
    case JOIN_USER:
      return { ...state, join: action.payload };
    default:
      return state;
  }
}
