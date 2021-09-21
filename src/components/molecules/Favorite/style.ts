import styled from 'styled-components';
import { Btn } from '../../index';

export const MyFContainer = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MyFTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  padding: 30px 0;
`;

export const MyFBtnBox = styled.div`
  display: flex;
  width: 400px;
  padding-bottom: 30px;
`;

export const MyFImgBtnYes = styled(Btn)``;

export const MyFImgBtnNo = styled(Btn)`
  background-color: #2f4f4f;
`;

export const MyFAuthorBtnYes = styled(Btn)``;

export const MyFAuthorBtnNo = styled(Btn)`
  background-color: #2f4f4f;
`;

export const MyFBox = styled.div`
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

export const MyFUl = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: flex-start;
`;

export const MyFLi = styled.li`
  margin-left: 30px;
  margin-right: 60px;
  margin-bottom: 60px;
`;
