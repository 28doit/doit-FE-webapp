import styled, { css } from 'styled-components';
import { Input, Label, Btn, LinkBtn } from '../..';
import CheckOn from '../../../assets/check_on.svg';

export const PC_Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #868e96;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PC_Inner = styled.div`
  max-width: 45rem;
  width: 90%;
  padding: 5rem 3.5rem 4rem;
  background: #fff;
`;

export const PC_Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const PC_No = styled.div`
  width: 100%;
  height: 6rem;
  margin: 3rem 0 0;
  background-color: #041e7d;
  text-align: center;
  line-height: 3;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.8rem;
`;

export const PC_Join = styled.div`
  padding: 2.4rem 0 4rem;
  font-size: 1.4rem;
  text-align: center;
  span {
    color: #1564f9;
  }
  cursor: pointer;
`;

export const PC_Form = styled.form``;

export const PC_Span =
  styled.span <
  { s_type: string } >
  `
  font-size: 1.2rem;
  ${(props) =>
    props.s_type === 'invalid' &&
    css`
      color: red;
      font-size: 1.2rem;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 3rem;
    `}
  ${(props) =>
    props.s_type === 'valid' &&
    css`
      color: green;
      font-size: 1.2rem;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 3rem;
    `}
  ${(props) =>
    props.s_type === 'repwd' &&
    css`
      cursor: pointer;
    `}
`;

export const PC_Title = styled.h2`
  margin: 0 0 2rem;
  font-size: 3rem;
  text-align: center;
  font-family: elice;
`;

export const PC_Input = styled(Input)`
  & + & {
    margin: 1rem 0 0;
  }
  width: 100%;
`;

export const PC_Label = styled(Label)`
  margin: 0 0 0 1rem;
  color: #888888;
  font-family: elice;
`;

export const PC_CheckWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  line-height: 2.2rem;
  font-family: elice;

  input[type='checkbox'] {
    width: 0.1rem;
    height: 0.1rem;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    &:checked + label::before {
      background: url(${CheckOn}) no-repeat center center/1.3rem;
    }
  }
  label {
    display: inline-block;
    &::before {
      display: inline-block;
      vertical-align: bottom;
      content: '';
      width: 2.2rem;
      height: 2.2rem;
      margin: 0 1rem 0 0;
      border: 0.1rem solid rgb(211, 211, 211);
      border-radius: 0.3rem;
    }
  }
  span {
    right: 0;
    margin: 0;
  }
`;

export const PC_Btn = styled(Btn)`
  width: 100%;
  height: 6rem;
  margin: 3rem 0 0;
  background-color: #0197ea;
`;

export const PC_LinkState = styled(LinkBtn)`
  cursor: pointer;
  font-family: elice;
`;
