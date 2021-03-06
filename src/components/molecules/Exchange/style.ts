/* eslint-disable prettier/prettier */
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

export const PC_Title = styled.h2`
  font-size: 3rem;
  font-family: elice;
  text-align: center;
  padding: 3rem 0;
`;

export const PC_Input = styled.input`
  width: 70%;
  height: 3rem;
  font-size: 2rem;
`;

export const PC_Btn = styled(Btn)<{ b_type: string }>`
  ${(props) =>
    props.b_type === 'submit' &&
    css`
      width: 20%;
      margin: 0;
    `}
  ${(props) =>
    props.b_type === 'log' &&
    css`
      margin-top: 2.4rem;
      width: 10rem;
      border-radius: 0.4rem;
    `}
  background-color: #0197ea;
`;

export const PC_Box = styled.div<{ box: string }>`
  ${(props) =>
    props.box === 'list' &&
    css`
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
    `}
  ${(props) =>
    props.box === 'change' &&
    css`
      padding: 2rem 0 2rem 0;
      display: flex;
      width: 60rem;
      align-items: center;
      justify-content: space-between;
    `}
`;

export const PC_Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: wrap;
`;

export const PC_Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 6rem;
  font-size: 1.8rem;
  color: #f2f2f2;
`;

export const PC_Info = styled.div<{ li_type: string }>`
  ${(props) =>
    props.li_type === 'date' &&
    css`
      width: 30%;
    `}
  ${(props) =>
    props.li_type === 'bank' &&
    css`
      width: 30%;
    `}
  ${(props) =>
    props.li_type === 'money' &&
    css`
      width: 10%;
    `}
  ${(props) =>
    props.li_type === 'status' &&
    css`
      width: 10%;
    `}
  text-align: center;
  font-size: 1.8rem;
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
