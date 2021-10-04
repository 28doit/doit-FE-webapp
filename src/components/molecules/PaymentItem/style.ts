import styled, { css } from 'styled-components';
import { Btn } from '../../index';

export const PC_Overlay = styled.div`
  width: 100%;
  background: #868e96;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PC_Inner = styled.div`
  width: 90%;
  height: 80%;
  padding: 3rem 2rem;
  background: #fff;
  margin: 5rem;
`;

export const PaymentContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaymentBox = styled.div`
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 800px;
  height: 780px;
  flex-direction: column;
`;

export const PaymentTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
  font-weight: 700;
`;

export const PaymentTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 10px;
`;

export const TextBoxP = styled.p`
  font-weight: 700;
`;

export const TextRedBoxP = styled.p`
  color: red;
  font-weight: 700;
`;

export const ServiceBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  cursor: pointer;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const ServiceBoxTopP = styled.p`
  text-align: center;
  color: #808080;
  font-weight: 700;
`;

export const ServiceBoxBotP = styled.p`
  text-align: center;
  margin-top: 10px;
  color: #338fef;
  font-weight: 700;
`;

export const ServiceSelect = styled.div`
  width: 30%;
  height: 100px;
  border: 1px solid #338fef;
  margin-bottom: 30px;
`;
export const ServiceYes = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 10px;
`;

export const ServiceNo = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 10px;
`;

export const InfoBox = styled.div`
  width: 80%;
`;

export const InfoLeftP = styled.div`
  color: #808080;
  font-weight: 700;
  font-size: 20px;
`;

export const InfoRightP = styled.div`
  color: #808080;
  font-weight: 700;
  font-size: 20px;
`;

export const InfoTextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

export const InfoHr = styled.hr``;

export const Pay = styled(Btn)`
  width: 200px;
`;
