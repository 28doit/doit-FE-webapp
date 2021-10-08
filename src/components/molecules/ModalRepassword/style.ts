import styled, { css } from 'styled-components';
import { Input, Label, Btn } from '../..';

export const PC_Overlay = styled.div`
  width: 100%;
  height: 100%;
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

export const PC_Container = styled.div``;

export const PC_Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #868e96;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PC_Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PC_Box =
  styled.div <
  { box: string } >
  `
  ${(props) =>
    props.box == 'input' &&
    css`
      width: 50%;
    `}
  ${(props) =>
    props.box == 'success' &&
    css`
      background-color: white;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      width: 60rem;
      height: 30rem;
      font-size: 1.8rem;
      font-weight: 700;
    `}
  
  display: flex;
  flex-direction: column;
`;

export const PC_Title = styled.h2`
  margin: 0 0 2rem;
  font-size: 3rem;
  text-align: center;
  font-family: elice;
`;

export const PC_Label = styled(Label)`
  width: 10rem;
  margin: 0;
  font-size: 1.5rem;
  line-height: 4.6rem;
  cursor: default;
`;

export const PC_Input = styled(Input)`
  width: 100%;
  margin: 0 0 0.5rem;
`;

export const PC_Btn =
  styled(Btn) <
  { b_type: string } >
  `
  ${(props) =>
    props.b_type == 'default' &&
    css`
      background-color: #0197ea;
    `}
  ${(props) => props.b_type == 'success' && css``}
  width: 40%;
  height: 4rem;
  line-height: 0;
  margin-top: 6rem;
  font-size: 1.6rem;
`;
