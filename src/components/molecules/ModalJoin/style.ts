import styled from 'styled-components';
import { Input, Label, Btn, LinkBtn } from '../..';
import CheckIcon from '../../../assets/check_square.svg';
import CheckOn from '../../../assets/check_on.svg';

export const ModalCommonTitle = styled.h2`
  height: 80px;
  height: 80px;
  padding: 0 30px;
  border-bottom: 1px solid #ebebeb;
  font-size: 22px;
  line-height: 80px;
  text-align: center;
`;

export const ModalJoinForm = styled.form``;

export const ModaleSelectWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalCheck = styled(Input)`
  width: 100px;
  height: 100px;
`;

export const ModalRegisterBirth = styled(Input)`
  width: 30%;
  height: 40px;
`;

export const ModalSelect = styled.select`
  position: relative;
  overflow: hidden;
  width: 30%;
  height: 40px;
  margin: 0 0 20px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

export const ModalBirthDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalCommonWrap = styled.div``;

export const ModalInputWrap = styled.div`
  &::after {
    display: block;
    content: '';
    clear: both;
  }
  & + & {
    margin: 20px 0 0;
  }
`;

export const ModalRegisterLabel = styled(Label)`
  float: left;
  width: 100px;
  margin: 0;
  font-size: 15px;
  line-height: 46px;
  cursor: default;
`;

export const ModalRegisterNickName = styled(Input)`
  width: calc(100% - 100px);
`;

export const ModalRegisterInput = styled(Input)`
  float: left;
  width: calc(100% - 100px);
`;

export const ModalRegisterEmail = styled(Input)`
  width: calc(100% - 100px);
`;

export const ModalEmailAt = styled.span`
  display: inline-block;
  width: 25px;
  text-align: center;
`;

export const ModalEmailTail = styled.select`
  width: calc(100% - 25px - 100px - 128px);
  height: 46px;
  border: 1px solid #dddfe1;
`;

export const ModalTelInput = styled(Input)`
  width: calc(100% - 100px);
`;

export const ModalTelInputCheck = styled(Input)`
  width: 320px;
  margin: 0 0 0 100px;
`;

export const ModalTelAt = styled.span`
  display: inline-block;
  width: 22px;
  text-align: center;
`;

export const ModalTelConfirm = styled(Btn)`
  width: calc(100% - 100px - 320px - 10px);
  height: 46px;
  margin: 0 0 0 10px;
`;

export const ModalAgreeYes = styled(Btn)`
  width: calc(100% - 100px - 320px - 10px);
  height: 46px;
  margin: 0 0 0 10px;
`;

export const ModalAgreeNo = styled(Btn)`
  width: calc(100% - 100px - 320px - 10px);
  height: 46px;
  margin: 0 0 0 10px;
`;

export const TermsTxt = styled(Label)`
  display: block;
  position: relative;
  width: 100%;
  height: 30px;
  margin: 30px 0 6px;
  line-height: 30px;
  color: #000000;
  cursor: default;
  &::after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    background: url(${CheckIcon}) no-repeat;
  }
  input[type='checkbox']:checked + &::after {
    background: url(${CheckOn}) no-repeat;
  }
`;

export const TermsRequired = styled.span`
  color: #1564f9;
`;

export const ModalBtn = styled(Btn)`
  width: 100%;
  height: 60px;
  margin: 10px 0 0;
`;
