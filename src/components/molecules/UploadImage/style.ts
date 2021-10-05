import styled, { css } from 'styled-components';
import { Btn, Input, Label } from '../../index';

export const PC_Overlay = styled.div`
  width: 100%;
  background: #868e96;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PC_Inner = styled.div`
  width: 90%;
  height: 90%;
  padding: 3rem 2rem;
  background: #fff;
  margin: 5rem;
`;

export const PC_Title = styled.h2`
  margin: 0 0 2rem;
  font-size: 3rem;
  font-family: elice;
  text-align: center;
`;

export const PC_Top = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PC_Ptag = styled.p``;

export const PC_Mid = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
`;

export const PC_MidLeft = styled.div`
  width: 70%;
  height: 100%
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PC_MidRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
`;

export const PC_BtnImg = styled.img`
  width: 6rem;
  height: 6rem;
  cursor: pointer;
`;

export const PC_Preview = styled.div`
  width: 80%;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PC_PreviewImg = styled.img`
  max-width: 100%;
  max-height: 40rem;
`;

export const PC_Bot = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PC_Form = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const PC_Wrap =
  styled.div <
  { w_type: string } >
  `
  ${(props) =>
    props.w_type === 'default' &&
    css`
      height: 100%;
    `}
  ${(props) =>
    props.w_type === 'img' &&
    css`
      height: 100%;
      align-items: center;
      justify-content: space-between;
    `}
  ${(props) =>
    props.w_type === 'input' &&
    css`
      align-items: center;
    `}
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PC_Label =
  styled(Label) <
  { l_type: string } >
  `
  ${(props) =>
    props.l_type === 'default' &&
    css`
      margin: 0 0 1.5rem 0;
    `}
  ${(props) =>
    props.l_type === 'img' &&
    css`
      margin: 1.5rem 0 0 0;
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
    `}
  ${(props) =>
    props.i_type === 'img' &&
    css`
      display: none;
    `}
`;

export const PC_Btn = styled(Btn)`
  width: 20%;
  background-color: #0197ea;
`;
