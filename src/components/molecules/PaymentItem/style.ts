import styled from 'styled-components';
import { Btn, Input } from '../../index';

export const PaymentContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaymentBox = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 800px;
  height: 1000px;
  flex-direction: column;
`;

export const PaymentTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 25px;
  text-align: center;
`;

export const PaymentTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const TextxBoxP = styled.p``;

export const ServiceBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  cursor: pointer;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ServiceSelect = styled.div`
  width: 30%;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 30px;
`;
export const ServiceYes = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
  border-radius: 50%;
`;

export const ServiceNo = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
`;

export const Pay = styled(Btn)``;
