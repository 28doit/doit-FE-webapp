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
  border-radius: 3%;
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

export const ModalTopImg = styled.img`
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

export const ModalMidImg = styled.img`
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
