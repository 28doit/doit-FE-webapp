import styled from 'styled-components';
import { Btn } from '../../index';
import DatePicker from 'react-datepicker';

export const PayLogContatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 60px;
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
  justify-content: space-between;
  width: 400px;
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
  margin-top: 40px;
  width: 840px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
  }
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const PayDatePicker = styled(DatePicker)`
  margin-top: 30px;
  width: 100px;
  height: 38px;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 12px;
  margin-right: 60px;
`;

export const PayLogCardP = styled.p``;

export const PayLogCardUl = styled.ul``;

export const PayLogCardLI = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  color: #f2f2f2;
`;

export const PayLogPDate = styled.div`
  width: 15%;
  text-align: center;
`;

export const PayLogPMuid = styled.div`
  width: 60%;
  text-align: center;
`;

export const PayLogPMoney = styled.div`
  width: 15%;
  text-align: center;
`;

export const PayLogPName = styled.div`
  width: 10%;
  text-align: center;
  color: black;
`;
