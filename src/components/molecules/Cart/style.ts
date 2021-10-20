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
  font-weight: 700;
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
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
`;

export const PC_Table = styled.table`
  width: 98%;
  text-align: center;
`;

export const PC_Tbody = styled.tbody``;

export const PC_Thead = styled.thead``;

export const PC_Tr = styled.tr``;

export const PC_Th = styled.th`
  width: 13rem;
  font-size: 2rem;
`;

export const PC_Td = styled.td`
  width: 13rem;
  vertical-align: middle;
  font-size: 2rem;
  padding-bottom: 1rem;
`;

export const PC_Img = styled.img`
  height: 12rem;
`;

export const PC_Btn = styled(Btn)`
  width: 20rem;
  padding: 0 0 3rem 0;
  background-color: #0197ea;
`;
