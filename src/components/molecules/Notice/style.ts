import styled from 'styled-components';
import { Btn } from '../../index';

export const NoticeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoticeBox = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  width: 800px;
  height: 600px;
  flex-direction: column;
`;

export const NoticeH1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #338fef;
`;

export const NoticeP = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const NoticeBtn = styled(Btn)``;
