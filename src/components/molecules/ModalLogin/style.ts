import styled from 'styled-components';
import { Input, Label, Btn, LinkBtn } from '../..';
import CheckOn from '../../../assets/check_on.svg';

export const AllWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalLoginForm = styled.form``;

export const ModalLoginInvalid = styled.span`
  color: red;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 30px;
`;

export const ModalLoginValid = styled.span`
  color: green;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 30px;
`;

export const ModalLoginTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 25px;
  text-align: center;
`;

export const ModalInput = styled(Input)`
  & + & {
    margin: 10px 0 0;
  }
  width: 100%;
`;

export const ModalLabel = styled(Label)`
  margin: 0 0 0 10px;
  color: #888888;
`;

export const ModalLoginCheckWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 22px;

  input[type='checkbox'] {
    width: 1px;
    height: 1px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    &:checked + label::before {
      background: url(${CheckOn}) no-repeat center center/13px;
    }
  }
  label {
    display: inline-block;
    &::before {
      display: inline-block;
      vertical-align: bottom;
      content: '';
      width: 22px;
      height: 22px;
      margin: 0 10px 0 0;
      border: 1px solid rgb(211, 211, 211);
      border-radius: 3px;
    }
  }
  span {
    right: 0;
    margin: 0;
  }
`;

export const ModalBtn = styled(Btn)`
  width: 100%;
  height: 60px;
  margin: 30px 0 0;
`;

export const ModalNo = styled.div`
  width: 100%;
  height: 60px;
  margin: 30px 0 0;
  background-color: #2f4f4f;
  text-align: center;
  line-height: 3;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
`;

export const ModalAddMem = styled.div`
  padding: 24px 0 40px;
  font-size: 14px;
  text-align: center;
  span {
    color: #1564f9;
  }
`;

export const ModalLinkState = styled(LinkBtn)`
  cursor: pointer;
`;

export const ModalRePassword = styled.span`
  cursor: pointer;
`;
