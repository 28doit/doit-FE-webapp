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
  max-width: 60rem;
  width: 90%;
  padding: 3rem 2rem;
  background: #fff;
  margin: 5rem;
`;

export const PC_Title = styled.h2`
  border-bottom: 0.1rem solid #ebebeb;
  padding: 0 3rem 0 3rem;
  color: #041e7d;
  line-height: 6rem;
  text-align: center;
  font-size: 3rem;
  font-family: elice;
`;

export const PC_Conatiner = styled.div``;

export const PC_Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PC_Submit = styled(Btn)`
  width: 50%;
  height: 3rem;
  margin-top: 6rem;
  line-height: 0;
  margin: 0;
  margin-top: 6rem;
  font-size: 1.6rem;
  font-family: dohyeon;
  background-color: #0197ea;
`;

export const PC_NoSubmit = styled.div`
  width: 50%;
  height: 3rem;
  margin-top: 6rem;
  background-color: #041e7d;
  text-align: center;
  line-height: 2.5;
  color: #ffffff;
  font-size: 1.4rem;
  font-family: dohyeon;
`;

export const PC_EmailCheck = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  background-color: #f75a58;
  justify-content: center;
  margin: 0 0 0 0.5rem;
  color: white;
  border-radius: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
`;

export const PC_Label =
  styled(Label) <
  { lab_type: string } >
  `
  ${(props) => props.lab_type === 'img' && css``}
  ${(props) =>
    props.lab_type === 'input' &&
    css`
      float: left;
      width: 10rem;
      margin: 0;
      font-size: 1.5rem;
      line-height: 4rem;
      cursor: default;
      font-family: dohyeon;
    `}
`;

export const PC_Box =
  styled.div <
  { box: string } >
  `
  ${(props) =>
    props.box === 'birth' &&
    css`
      display: flex;
      justify-content: start;
    `}
  ${(props) =>
    props.box === 'pre' &&
    css`
      display: flex;
      align-items: center;
      justify-content: start;
    `}
  ${(props) =>
    props.box === 'img' &&
    css`
      border-radius: 50%;
    `}
`;

export const PC_Select =
  styled.select <
  { s_type: string } >
  `
  ${(props) =>
    props.s_type === 'gender' &&
    css`
      margin: 0 0 1.5rem;
    `}
  ${(props) =>
    props.s_type === 'birth' &&
    css`
      margin: 0 2.5rem 1.5rem;
    `}
    overflow: hidden;
    width: 25%;
    height: 4rem;
    padding: 0.5rem 3.9rem 0.5rem 1.1rem;
    border: solid 1px #dadada;
    background: #fff;
    box-sizing: border-box;
`;

export const PC_Wrap =
  styled.div <
  { wrap_type: string } >
  `
  ${(props) =>
    props.wrap_type === 'default' &&
    css`
      &::after {
        display: block;
        content: '';
        clear: both;
      }
      & + & {
        margin: 2rem 0 0;
      }
      width: 80%;
    `}
  ${(props) =>
    props.wrap_type === 'email' &&
    css`
      width: 100%;
      display: flex;
    `}
  ${(props) =>
    props.wrap_type === 'select' &&
    css`
      display: flex;
      flex-direction: column;
      width: 80%;
    `}
    ${(props) =>
      props.wrap_type === 'img' &&
      css`
        display: flex;
        align-items: center;
        margin-left: 10rem;
        margin-top: 3rem;
      `}
`;

export const PC_Input =
  styled(Input) <
  { input_type: string } >
  `
  ${(props) =>
    props.input_type === 'default' &&
    css`
      width: 90%;
      margin: 0 0 0.5rem;
    `}
  ${(props) =>
    props.input_type === 'birth' &&
    css`
      width: 25%;
      height: 4rem;
    `}
  ${(props) =>
    props.input_type === 'img' &&
    css`
      display: none;
    `}
  ${(props) =>
    props.input_type === 'email' &&
    css`
      width: 80%;
      margin: 0 0 0.5rem;
    `}
  ${(props) =>
    props.input_type === 'precheck' &&
    css`
      width: 4rem;
      height: 4rem;
      margin-left: 2rem;
    `}
`;

export const PC_Pre = styled.pre`
  background-color: rgb(238, 238, 238);
  width: 90%;
  height: 12rem;
  padding: 2rem;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 1rem;
`;

export const PC_Valid =
  styled.span <
  { v_type: string } >
  `
  color: #03c75a;
  font-size: 1.2rem;
      font-weight: bold;
      display: inline-block;
  ${(props) => props.v_type === 'default' && css``}
  ${(props) =>
    props.v_type === 'select' &&
    css`
      margin-bottom: 2rem;
    `}
`;

export const PC_Invalid =
  styled.span <
  { nv_type: string } >
  `
  color: red;
      font-size: 1.2rem;
      font-weight: bold;
      display: inline-block;
  ${(props) => props.nv_type === 'default' && css``}
  ${(props) =>
    props.nv_type === 'select' &&
    css`
      margin-bottom: 2rem;
    `}
`;

export const PC_Img =
  styled.img <
  { img_type: string } >
  `
  ${(props) =>
    props.img_type === 'btn' &&
    css`
  width: 4.5rem;
  margin-left: 1rem;
  margin-top 4rem;
  `}
  ${(props) =>
    props.img_type === 'preview' &&
    css`
      width: 10rem;
      height: 10rem;
      background-color: black;
      border-radius: 50%;
    `}
`;
