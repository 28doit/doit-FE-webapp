import styled from 'styled-components';
import { Btn } from '../../index';

export const PC_Container = styled.div`
  width: 100%;
  height: 100%;
  background: #898e96;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PC_Box = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 1rem;
  width: 80rem;
  height: 60rem;
  flex-direction: column;
`;

export const PC_H1 = styled.h1`
  font-size: 2.4rem;
  font-family: elice;
  color: #338fef;
`;

export const PC_P = styled.p`
  font-size: 1.8rem;
  font-family: elice;
`;

export const PC_Btn = styled(Btn)`
  width: 30%;
  background-color: #0197ea;
`;
