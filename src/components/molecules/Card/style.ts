/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export interface Props {
  cardImgHeight?: string;
  cardImgWidth?: string;
}

export const CardContainer = styled.div``;

export const CardDefaultWrapper = styled.div<Props>`
  position: relative;
  width: ${(props) => props.cardImgWidth};
  height: ${(props) => props.cardImgHeight};
`;

export const CardDefaultImg = styled.img<Props>`
  width: ${(props) => props.cardImgWidth};
  height: ${(props) => props.cardImgHeight};
  cursor: pointer;
  border-radius: 3%;
`;

export const CardCategoryDiv = styled.div<Props>`
  width: ${(props) => props.cardImgWidth};
  height: ${(props) => props.cardImgHeight};
  overflow: hidden;
  border-radius: 3%;
`;

export const CardCategoryImg = styled.img<Props>`
  width: ${(props) => props.cardImgWidth};
  height: ${(props) => props.cardImgHeight};
  cursor: pointer;
  border-radius: 3%;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CardCategoryMid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const CardCategoryP = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const DefaultHoverModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  pointer-events: none;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
`;

export const ModalTop = styled.div`
  width: 20%;
  height: 20%;
  display: flex;
`;

export const ModalTopImg = styled.div`
  width: 60px;
  hegiht: 60px;
  margin-left: 20px;
`;

export const ModalMid = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
`;

export const ModalMidImg = styled.div`
  width: 20px;
  hegiht: 20px;
`;

export const ModalMidP = styled.p``;

export const ModalBot = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
`;

export const ModalAuthorImg = styled.img`
  width: 20px;
  hegiht: 20px;
`;

export const ModalAuthor = styled.div`
  color: white;
  margin-left: 10px;
`;

export const AuthorBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #849db7;
  border-radius: 3%;
  box-shadow: 0px 0px 2px #000000;
  cursor: pointer;
  background-color: #f9f9f9;
`;

export const AuthorBoxTop = styled.div`
  width: 100%;
  height: 10%;
  pointer-events: none;
  position: relative;
`;

export const AuthorTopImg = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  margin-top: 20px;
  position: absolute;
`;
export const AuthorBoxMid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20%;
`;

export const AuthorName = styled.div`
  color: #338fef;
  font-weight: 700;
  margin-bottom: 16px;
  font-size: 20px;
`;

export const AuthorInfo = styled.div`
  color: #808080;
  font-weight: 700;
  font-size: 14px;
`;

export const AuthorBoxBot = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthorPhotos = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const AuthorPhotosImg = styled.img`
  width: 48%;
  height: 48%;
  margin: 2px;
  border-radius: 5%;
`;

export const LikeImgBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #849db7;
  border-radius: 3%;
  box-shadow: 0px 0px 2px #000000;
  cursor: pointer;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LikeImg = styled.img`
  width: 95%;
  height: 95%;
  border-radius: 3%;
`;

export const LikeImgHeart = styled.div`
  width: 30px;
  hegiht: 30px;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20px;
  margin-top: 20px;
  pointer-events: none;
  background-color: white;
  padding: 3px 3px 0;
  border-radius: 50%;
`;

export const ManageImgBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #849db7;
  border-radius: 3%;
  box-shadow: 0px 0px 2px #000000;
  cursor: pointer;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
`;

export const ManageImg = styled.div`
  width: 30px;
  hegiht: 30px;
  position: absolute;
  top: 0;
  left: 40px;
  margin-left: 20px;
  margin-top: 20px;
  pointer-events: none;
  background-color: white;
  padding: 3px 3px 0;
  border-radius: 50%;
`;

export const ManageImgPre = styled.img`
  width: 95%;
  height: 75%;
  border-radius: 3%;
`;

export const ManageTxt = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
`;
