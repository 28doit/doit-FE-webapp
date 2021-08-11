import styled from 'styled-components';
import { LinkBtn } from '../../index';

export const MyMenuContainer = styled.div`
  width: 10%;
  background-color: skyblue;
  padding-top: 30px;
`;

export const MyMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const MyMenuBtn = styled(LinkBtn)`
  font-size: 16px;
  background-color: skyblue;
  margin: 0;
  color: #666666;
`;

export const MyMenuSmallBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallBoxDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`;

export const SmallBoxText = styled.div`
  font-size: 14px;
`;

export const MyMenuTitle = styled.div`
  font-weight: 700;
  text-align: center;
`;
