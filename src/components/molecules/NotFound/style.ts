import styled from 'styled-components';
import { Btn } from '../../index';

export const PC_Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PC_Img = styled.img`
  width: 60rem;
  height: 40rem;
  margin-bottom: 6rem;
`;

export const PC_Txt = styled.div`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-family: elice;
`;

export const PC_Btn = styled(Btn)`
  width: 20rem;
  margin-top: 6rem;
`;
