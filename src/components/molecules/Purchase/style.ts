import styled, { css } from 'styled-components';
import { Btn } from '../../index';
import DatePicker from 'react-datepicker';

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

export const PC_Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PC_Title = styled.div`
  font-size: 3rem;
  text-align: center;
  padding: 3rem 0;
  font-family: elice;
`;

export const PC_DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40rem;
`;

export const PC_DateBox = styled.div`
  display: flex;
  width: 12rem;
  margin-bottom: 1rem;
`;

export const PC_DatePicker = styled(DatePicker)`
  margin-top: 3rem;
  width: 10rem;
  height: 3.8rem;
  border-radius: 0.4rem;
  border: 0.1rem solid black;
  font-size: 1.2rem;
  font-family: elice;
  margin-right: 6rem;
`;

export const PC_Btn = styled(Btn)`
  margin-top: 2.4rem;
  width: 10rem;
  border-radius: 0.4rem;
  background-color: #0197ea;
`;

export const PC_Modal = styled.div`
  margin-top: 4rem;
  width: 85%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
  }

  box-shadow: 0 1.4rem 2.8rem rgba(0, 0, 0, 0.25),
    0 1rem 1rem rgba(0, 0, 0, 0.22);
`;

export const PC_Ul = styled.ul``;

export const PC_Li =
  styled.li <
  { v: string } >
  `
  ${(props) =>
    props.v === 'default' &&
    css`
      height: 5rem;
    `}
  ${(props) =>
    props.v === 'info' &&
    css`
      height: 25rem;
    `}
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  font-size: 1.8rem;
  font-family: elice;
  color: #f2f2f2;
`;

export const PC_Preview = styled.img`
  width: 18%;
  text-align: center;
`;

export const PC_Info =
  styled.div <
  { li_type: string } >
  `
${(props) =>
  props.li_type === 'extension' &&
  css`
    width: 10%;
  `}
${(props) =>
  props.li_type === 'when' &&
  css`
    width: 15%;
  `}
${(props) =>
  props.li_type === 'author' &&
  css`
    width: 10%;
    color: black;
  `}
  ${(props) =>
    props.li_type === 'preview' &&
    css`
      width: 20%;
    `}
text-align: center;
`;
