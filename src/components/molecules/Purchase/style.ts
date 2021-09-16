import styled from 'styled-components';
import { Btn } from '../../index';
import DatePicker from 'react-datepicker';

export const PurchaseContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 60px;
  flex-direction: column;
`;

export const PurchaseTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  padding: 30px 0;
`;

export const PurchaseDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

export const PurchaseDateBox = styled.div`
  display: flex;
  width: 120px;
  margin-bottom: 10px;
`;

export const PurchaseDatePicker = styled(DatePicker)`
  margin-top: 30px;
  width: 100px;
  height: 38px;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 12px;
  margin-right: 60px;
`;

export const PurchaseBtn = styled(Btn)`
  margin-top: 24px;
  width: 100px;
  border-radius: 4px;
`;

export const PurchaseModal = styled.div`
  margin-top: 40px;
  width: 1000px;
  height: 800px;
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

export const PurchaseUl = styled.ul``;

export const PurchaseLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 250px;
  font-size: 18px;
  font-weight: 700;
  color: #f2f2f2;
`;

export const PurchasePreview = styled.img`
  width: 20%;
  text-align: center;
`;

export const PurchaseExtension = styled.div`
  width: 10%;
  text-align: center;
`;

export const PurchaseWhen = styled.div`
  width: 15%;
  text-align: center;
`;

export const PurchaseAuthor = styled.div`
  width: 10%;
  text-align: center;
  color: black;
`;

export const PurchaseTxtBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const PurchaseTxt = styled.div`
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
`;
