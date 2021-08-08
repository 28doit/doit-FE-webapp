import styled from 'styled-components';
import { ReactComponent as Korea } from '../../../assets/southKoreaHigh.svg';

export const MapDiv = styled.div`
  width: 600px;
  height: 80%;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const MapKorea = styled(Korea)`
  width: 100%;
  height: 100%;
`;
