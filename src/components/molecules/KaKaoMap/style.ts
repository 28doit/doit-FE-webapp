import styled from 'styled-components';
import { Btn } from '../../index';

export const KakaoMapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const KakaoMapTitle = styled.h2`
  color: white;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  padding: 30px 0;
`;

export const KakaoMapWrap = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KakaoMapDiv = styled.div`
  width: 800px;
  height: 600px;
`;

export const KakaoRoadViewDiv = styled.div`
  width: 800px;
  height: 600px;
`;

export const KakaoMapBtn = styled(Btn)`
  margin-top: 24px;
  width: 100px;
  border-radius: 4px;
`;
