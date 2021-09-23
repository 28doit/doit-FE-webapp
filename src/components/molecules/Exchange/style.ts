import styled from 'styled-components';
import { Btn } from '../../index';

export const ExContainer = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ExTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  padding: 30px 0;
`;

export const ExBtnBox = styled.div`
  display: flex;
  width: 400px;
  padding-bottom: 30px;
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

export const ExProToBankYes = styled(Btn)``;

export const ExProToBankNo = styled(Btn)`
  background-color: #2f4f4f;
`;

export const ExProToPoYes = styled(Btn)``;

export const ExProToPoNo = styled(Btn)`
  background-color: #2f4f4f;
`;

export const ExListBox = styled.div`
  width: 1400px;
  height: 800px;
  margin-top: 40px;
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

export const ExListLi = styled.li``;
