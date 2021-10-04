/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { LinkBtn } from '../../index';

export const PC_Container = styled.div`
  height: 5%;
  max-height: 8rem;
  border: 0.3rem solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 1rem 0 1rem 0;
`;

export const PC_Left = styled.div`
width: 33%;
display: flex;
align-items: center;
justify-content: flex-start;
margin: 0 0 0 2rem;
`;

export const PC_Center = styled.div`
width: 33%;
display: flex;
align-items: center;
justify-content: center;`;

export const PC_Right = styled.div`
width: 33%;
margin: 0 20px 0 0;
display: flex;
align-items: center;
justify-content: flex-end;`;

export const PC_LinkBtn = styled(LinkBtn)`
width: 10%;
min-width: 40px;
background-color: #0197ea;
border-radius: 2rem;
padding: 0.8rem;
margin: 0 1rem 0 0;
`;

export const PC_LogoBtn = styled(LinkBtn)`
width: 30%;
min-width: 20rem;
background-color: #0197ea;
border-radius: 2rem;
padding: 0;
margin: 0;
font-family: dohyeon;
font-size: 2rem;
`