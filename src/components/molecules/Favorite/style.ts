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
`;

export const MyFImgBtnYes = styled(Btn)``;

export const MyFImgBtnNo = styled(Btn)`
  background-color: #2f4f4f;
`;

export const MyFAuthorBtnYes = styled(Btn)``;

export const MyFAuthorBtnNo = styled(Btn)`
  background-color: #2f4f4f;
`;

export const MyFImgBox = styled.div`
  width: 1200px;
  height: 800px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const MyFAuthorBox = styled.div`
  width: 1300px;
  height: 800px;
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
