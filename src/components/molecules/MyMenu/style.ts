import styled from 'styled-components';
import { LinkBtn } from '../../index';

export const PC_Container = styled.div`
  width: 10%;
  min-width: 15rem;
  background-color: #112378;
  padding-top: 3rem;
`;

export const PC_Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
`;

export const PC_Btn = styled(LinkBtn)`
  font-size: 1.6rem;
  background-color: #112378;
  margin: 0;
  color: #ffffff;
  font-family: elice;
`;

export const PC_SmallBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PC_SmallDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`;

export const PC_SmallText = styled.div`
  font-size: 1.4rem;
  color: #ffffff;
  font-family: hs;
`;

export const PC_Title = styled.div`
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  font-family: elice;
  font-size: 2.5rem;
  color: #fbeccf;
`;
