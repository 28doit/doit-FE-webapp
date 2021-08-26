import styled from 'styled-components';
import { Btn } from '../../index';

export const ImgDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f0f0;
  display: flex;
  justify-content: center;
`;

export const ImgDetailLeft = styled.div`
  width: 850px;
  height: 1000px;
  margin-top: 20px;
  border-radius: 1%;
  background-color: #f9f9f9;
  border: 1px solid #849db7;
  box-shadow: 0px 0px 2px #000000;
`;

export const ImgDetailRight = styled.div`
  width: 360px;
  height: 800px;
  background-color: #f9f9f9;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 2%;
  border: 1px solid #849db7;
  box-shadow: 0px 0px 2px #000000;
`;

export const LeftHr = styled.hr`
  border: solid 1px #e5e5e5;
  width: 96%;
`;

export const LeftTop = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LeftTopBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const LeftTopImg = styled.img`
  width: 97%;
  height: 85%;
  border-radius: 1%;
  margin-bottom: 10px;
`;

export const LeftTopAuthorBox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

export const AuthorBoxProfile = styled.img`
  width: 30px;
`;

export const AuthorBoxName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #338fef;
  margin: 0 10px;
`;

export const LeftTopLikeBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  width: 20%;
`;

export const LeftTopLike = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const LeftP = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #808080;
`;

export const LeftMid = styled.div`
  width: 100%;
  height: 20%;
`;

export const MidImgList = styled.div`
  width: 100%;
`;

export const LeftBot = styled.div`
  width: 100%;
  height: 25%;
`;

export const RightF = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightP = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #808080;
`;

export const RightFImg = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 8px;
`;

export const RightS = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightSBox = styled.div`
  width: 90%;
  height: 90%;
  border: 1px solid #849db7;
`;

export const RightSBoxName = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #338fef;
  margin: 20px;
  text-align: center;
`;

export const RightSBoxP = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #808080;
  margin: 10px 0 0 10px;
`;

export const RightSBoxBtn = styled(Btn)`
  width: 90%;
  margin-left: 5%;
  height: 20%;
`;

export const RightT = styled.div`
  width: 100%;
  height: 40%;
`;

export const RightTP = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #808080;
  margin: 10px;
`;

export const RightUl = styled.ul`
  list-style-type: disc;
`;

export const RightLi = styled.li`
  color: #808080;
  font-size: 12px;
  margin-bottom: 10px;
  line-height: 1.5;
  margin-right: 15px;
`;

export const RightH = styled.div`
  width: 100%;
  height: 15%;
`;
