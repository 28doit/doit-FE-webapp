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

export const PC_Box = styled.div``;

export const PC_Table = styled.table``;

export const PC_Tbody = styled.tbody``;

export const PC_Thead = styled.thead``;

export const PC_Tr = styled.tr``;

export const PC_Th = styled.th``;

export const PC_Td = styled.td``;

export const PC_img = styled.img`
  width: 30px;
  height: 30px;
`;
