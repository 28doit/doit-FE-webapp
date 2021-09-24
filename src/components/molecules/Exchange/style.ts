import styled from 'styled-components';
import { Btn } from '../../index';

export const ExContainer = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`;

export const ExTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  padding: 30px 0;
`;

export const ExChangeBox = styled.div`
  display: flex;
  width: 600px;
  align-items: center;
  justify-content: space-between;
`;

export const ExInput = styled.input`
  width: 70%;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
`;

export const ExChangeBtn = styled(Btn)`
  width: 20%;
  margin: 0;
`;

export const ExListBox = styled.div`
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

export const ExListUl = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: wrap;
`;

export const ExListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  color: #f2f2f2;
`;

export const ExLiDate = styled.div`
  width: 15%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const ExLiBank = styled.div`
  width: 15%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const ExLiMoney = styled.div`
  width: 15%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const ExLiStatus = styled.div`
  width: 10%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const ExInfoBox = styled.div`
  display: flex;
  width: 840px;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;
