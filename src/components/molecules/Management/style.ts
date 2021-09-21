import styled from 'styled-components';
import { Btn } from '../../index';

export const ManageContainer = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ManageTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  padding: 30px 0;
`;

export const ManageBtnBox = styled.div`
  display: flex;
  width: 400px;
  padding-bottom: 30px;
`;

export const ManageCheckBtnYes = styled(Btn)``;

export const ManageCheckBtnNo = styled(Btn)`
  background-color: #2f4f4f;
`;

export const ManageResultBox = styled.div`
  width: 1400px;
  height: 800px;
  padding-top: 30px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
  }

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const ManageUl = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: flex-start;
`;

export const ManageLi = styled.li`
  padding-left: 40px;
  padding-bottom: 60px;
`;
