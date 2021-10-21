/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { Btn } from '../../index';

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

export const PC_Input = styled.input<{ i_type: string }>`
  ${(props) => props.i_type === 'checkbox' && css``}
`;

export const PC_Box = styled.div<{ box: string }>`
  ${(props) =>
    props.box === 'table' &&
    css`
      width: 98%;
      margin: 1rem 0 4rem 0;
      overflow: scroll;
      &::-webkit-scrollbar {
        width: 1rem;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #2f3542;
      }
    `}
  ${(props) =>
    props.box === 'money' &&
    css`
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border: 0.1rem solid black;
    `}
    ${(props) =>
    props.box === 'del' &&
    css`
      width: 95%;
    `}
`;

export const PC_P = styled.p<{ p_type: string }>`
  ${(props) =>
    props.p_type === 'txt' &&
    css`
      font-size: 2rem;
    `}
  ${(props) =>
    props.p_type === 'money' &&
    css`
      font-size: 3rem;
    `}
    font-family: elice;
`;

export const PC_Table = styled.table`
  width: 98%;
  text-align: center;
  font-family: elice;
  margin-top: 1rem;
`;

export const PC_Tbody = styled.tbody``;

export const PC_Thead = styled.thead``;

export const PC_Tr = styled.tr`
  border-top: 0.1rem solid;
  border-right: 0.1rem solid;
  border-bottom: 0.1rem solid;
  border-left: 0.1rem solid;
`;

export const PC_Th = styled.th`
  width: 13rem;
  font-size: 2rem;
`;

export const PC_Td = styled.td`
  width: 13rem;
  vertical-align: middle;
  font-size: 2rem;
  padding: 1rem 0 1rem 0;
`;

export const PC_Img = styled.img`
  height: 12rem;
`;

export const PC_Btn = styled(Btn)<{ b_type: string }>`
  ${(props) =>
    props.b_type === 'pay' &&
    css`
      width: 20rem;
      background-color: #0197ea;
    `}
  ${(props) =>
    props.b_type === 'del' &&
    css`
      width: 6rem;
      background-color: #041e7d;
    `}
  padding: 0 0 3rem 0;
  font-family: elice;
`;
