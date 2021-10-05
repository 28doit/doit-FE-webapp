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

export const PC_Contatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PC_Title = styled.h2`
  font-size: 3rem;
  font-family: elice;
  text-align: center;
  padding: 3rem 0;
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

export const PC_Btn = styled(Btn)`
  margin-top: 2.4rem;
  width: 10rem;
  border-radius: 0.4rem;
  background-color: #0197ea;
`;

export const PC_Modal = styled.div`
  width: 70%;
  height: 80%;
  margin: 4rem 0 0 0;
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

export const PC_CardUl = styled.ul``;

export const PC_CardLI = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  font-size: 1.8rem;
  font-family: elice;
  color: #f2f2f2;
`;

export const PC_Info =
  styled.div <
  { li_type: string } >
  `
  ${(props) =>
    props.li_type == 'date' &&
    css`
      width: 15%;
    `}
  ${(props) =>
    props.li_type == 'muid' &&
    css`
      width: 60%;
    `}
  ${(props) =>
    props.li_type == 'money' &&
    css`
      width: 15%;
    `}
  ${(props) =>
    props.li_type == 'name' &&
    css`
      width: 10%;
      color: black;
    `}
  text-align: center;
  font-family: elice;
`;
