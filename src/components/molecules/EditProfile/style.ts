import styled, { css } from 'styled-components';
import { Input, Label, Btn } from '../..';

export const PC_Overlay = styled.div`
  width: 100%;
  background: #868e96;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PC_Inner = styled.div`
  width: 60rem;
  height: 90%;
  padding: 3rem 2rem;
  background: #fff;
  margin: 5rem;
`;

export const PC_Title = styled.h2`
  padding: 0 3rem;
  border-bottom: 0.1rem solid #ebebeb;
  font-size: 3rem;
  font-family: elice;
  line-height: 6rem;
  text-align: center;
`;

export const PC_Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PC_Select =
  styled.select <
  { s_type: string } >
  `
  ${(props) =>
    props.s_type === 'birth' &&
    css`
      margin: 0 2.5rem 1.5rem;
    `}
  ${(props) => props.s_type === 'gender' && css``}
  overflow: hidden;
  width: 25%;
  height: 4rem;
  padding: 0.5rem 3.9rem 0.5rem 1.1rem;
  border: solid 0.1rem #dadada;
  background: #fff;
  box-sizing: border-box;
`;

export const PC_NoSubmit = styled.div`
  width: 50%;
  height: 3rem;
  margin-top: 3rem;
  background-color: #2f4f4f;
  text-align: center;
  line-height: 2;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.4rem;
`;

export const PC_Wrap =
  styled.div <
  { w_type: string } >
  `
  ${(props) => props.w_type === 'default' && css``}
  ${(props) =>
    props.w_type === 'birth' &&
    css`
      display: flex;
      justify-content: start;
    `}
  ${(props) =>
    props.w_type === 'img' &&
    css`
      display: flex;
      align-items: center;
      margin-left: 10rem;
      margin-top: 3rem;
    `}
  ${(props) =>
    props.w_type === 'preview' &&
    css`
      border-radius: 50%;
    `}
  ${(props) =>
    props.w_type === 'input' &&
    css`
      &::after {
        display: block;
        content: '';
        clear: both;
      }
      width: 80%;
    `}
  ${(props) =>
    props.w_type === 'select' &&
    css`
      display: flex;
      flex-direction: column;
      width: 80%;
    `}
`;

export const PC_Input =
  styled(Input) <
  { i_type: string } >
  `
  ${(props) =>
    props.i_type === 'default' &&
    css`
      width: 90%;
      margin: 0 0 0.5rem;
    `}
  ${(props) =>
    props.i_type === 'birth' &&
    css`
      width: 25%;
      height: 4rem;
    `}
  ${(props) =>
    props.i_type === 'img' &&
    css`
      display: none;
    `}
`;

export const PC_Valid =
  styled.span <
  { v_type: string } >
  `
  ${(props) =>
    props.v_type === 'default' &&
    css`
      color: #03c75a;
      font-size: 1.2rem;
      font-weight: bold;
      display: inline-block;
    `}
  ${(props) =>
    props.v_type === 'select' &&
    css`
      color: #03c75a;
      font-size: 1.2rem;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 2rem;
    `}
`;

export const PC_Invalid =
  styled.span <
  { n_type: string } >
  `
  ${(props) =>
    props.n_type === 'default' &&
    css`
      color: red;
      font-size: 1.2rem;
      font-weight: bold;
      display: inline-block;
    `}
  ${(props) =>
    props.n_type === 'select' &&
    css`
      color: red;
      font-size: 1.2rem;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 2rem;
    `}
`;

export const PC_Submit = styled(Btn)`
  width: 50%;
  height: 3rem;
  line-height: 0;
  margin-top: 3rem;
  font-size: 1.6rem;
`;

export const PC_Label =
  styled(Label) <
  { l_type: string } >
  `
${(props) =>
  props.l_type === 'default' &&
  css`
    float: left;
    width: 10rem;
    margin: 0;
    font-size: 1.5rem;
    line-height: 4rem;
    cursor: default;
  `}
${(props) => props.l_type === 'img' && css``}
`;

export const PC_Img =
  styled.img <
  { i_type: string } >
  `
  ${(props) =>
    props.i_type === 'preview' &&
    css`
      width: 10rem;
      height: 10rem;
      background-color: black;
      border-radius: 50%;
    `}
  ${(props) =>
    props.i_type === 'img' &&
    css`
      width: 4.5rem;
      margin: 4rem 0 0 1rem;
    `}
`;
