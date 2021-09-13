import styled from 'styled-components';
import { Btn } from '../../index';
import DatePicker from 'react-datepicker';

export const PayLogContatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PayLogTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  padding: 30px 0;
`;

export const PayDateContainer = styled.div`
  display: flex;
`;

export const PayDateBox = styled.div`
  display: flex;
  width: 120px;
  margin-bottom: 10px;
`;

export const PayLogBtn = styled(Btn)`
  margin-top: 24px;
  width: 100px;
  border-radius: 4px;
`;

export const PayLogModal = styled.div`
  width: 800px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const PayDatePicker = styled(DatePicker)`
  margin-top: 30px;
  width: 100px;
  height: 38px;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 12px;
`;
