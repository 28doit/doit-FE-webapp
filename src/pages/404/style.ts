import styled from 'styled-components';
import { Btn } from '../../components/index';

export const ErrContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ErrImg = styled.img`
  width: 600px;
  height: 400px;
  margin-bottom: 60px;
`;

export const ErrTxt = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ReturnHome = styled(Btn)`
  width: 200px;
  margin-top: 60px;
`;
