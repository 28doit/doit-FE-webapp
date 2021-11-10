/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const PC_Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const PC_Wrap = styled.div<{ w_type: string }>`
  ${(props) =>
    props.w_type == 't_1' &&
    css`
      width: 33rem;
      height: 20rem;
      position: relative;
    `}
  ${(props) =>
    props.w_type == 't_2' &&
    css`
      width: 33rem;
      height: 33rem;
      position: relative;
    `}
  ${(props) =>
    props.w_type == 't_3' &&
    css`
      width: 33rem;
      height: 20rem;
      position: relative;
    `}
  ${(props) =>
    props.w_type == 't_4' &&
    css`
      width: 33rem;
      height: 20rem;
      position: relative;
    `}
  ${(props) =>
    props.w_type == 't_5' &&
    css`
      width: 28rem;
      height: 18rem;
      position: relative;
    `}
  ${(props) =>
    props.w_type == 't_6' &&
    css`
      width: 28rem;
      height: 24rem;
      position: relative;
    `}
`;

export const PC_Img = styled.img<{ i_type: string }>`
  ${(props) =>
    props.i_type === 'like' &&
    css`
      width: 95%;
      height: 95%;
      border-radius: 3%;
    `}
  ${(props) =>
    props.i_type === 'manage' &&
    css`
      width: 95%;
      height: 75%;
      border-radius: 3%;
    `}
${(props) =>
    props.i_type === 'a_photos' &&
    css`
      width: 48%;
      height: 48%;
      margin: 0.2rem;
      border-radius: 5%;
    `}
${(props) =>
    props.i_type === 'default' &&
    css`
      width: 33rem;
      height: 20rem;
      cursor: pointer;
      border-radius: 3%;
    `}
${(props) =>
    props.i_type === 'category' &&
    css`
      width: 33rem;
      height: 20rem;
      cursor: pointer;
      border-radius: 3%;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    `}
${(props) =>
    props.i_type === 'author' &&
    css`
      width: 2rem;
      hegiht: 2rem;
    `}
`;

export const PC_P = styled.p<{ p_type: string }>`
  ${(props) => props.p_type === 'default' && css``}
  ${(props) =>
    props.p_type === 'category' &&
    css`
      font-family: elice;
      font-size: 2rem;
    `}
`;

export const PC_Box = styled.div<{ box: string }>`
  ${(props) => props.box === 'author' && css``}
  ${(props) =>
    props.box === 'like' &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    `}
  ${(props) =>
    props.box === 'manage' &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-direction: column;
    `}
  width: 100%;
  height: 100%;
  border: 1px solid #849db7;
  border-radius: 3%;
  box-shadow: 0 0 2px #000000;
  cursor: pointer;
  background-color: #f9f9f9;
`;

export const PC_ImgBox = styled.div<{ img_box: string }>`
  ${(props) => props.img_box === 'author' && css``}
  ${(props) =>
    props.img_box === 'like' &&
    css`
      top: 0;
      left: 0;
      pointer-events: none;
      background-color: white;
      padding: 0.3rem 0.3rem 0;
      border-radius: 50%;
    `}
${(props) =>
    props.img_box === 'manage' &&
    css`
      top: 0;
      left: 4rem;
      pointer-events: none;
      background-color: white;
      padding: 0.3rem 0.3rem 0;
      border-radius: 50%;
    `}
  width: 3rem;
  height: 3rem;
  margin-left: 2rem;
  margin-top: 2rem;
  position: absolute;
`;

export const PC_CategoryBox = styled.div<{ c_type: string }>`
  ${(props) =>
    props.c_type === 'img' &&
    css`
      width: 33rem;
      height: 20rem;
      overflow: hidden;
      border-radius: 3%;
    `}
  ${(props) =>
    props.c_type === 'info' &&
    css`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    `}
`;

export const PC_Modal = styled.div<{ m_type: string }>`
  ${(props) =>
    props.m_type === 'default' &&
    css`
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      top: 0;
      border-radius: 3%;
      display: flex;
      flex-direction: column;
    `}
  ${(props) =>
    props.m_type === 'top' &&
    css`
      width: 100%;
      height: 20%;
      display: flex;
    `}
${(props) =>
    props.m_type === 'mid' &&
    css`
      width: 100%;
      height: 60%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: white;
    `}
${(props) =>
    props.m_type === 'bot' &&
    css`
      margin: 2rem 0 0 2rem;
      display: flex;
    `}
`;

export const PC_ModalBox = styled.div<{ mb_type: string }>`
  ${(props) =>
    props.mb_type === 't_img' &&
    css`
      width: 5rem;
      height: 5rem;
      padding: 1rem 0 0 2rem;
    `}
  ${(props) =>
    props.mb_type === 'm_img' &&
    css`
      width: 2rem;
      hegiht: 2rem;
    `}
${(props) =>
    props.mb_type === 'b_author' &&
    css`
      color: white;
      margin-left: 1rem;
    `}
`;

export const PC_AuthorBox = styled.div<{ ab_type: string }>`
  ${(props) =>
    props.ab_type === 'top' &&
    css`
      width: 100%;
      height: 10%;
      pointer-events: none;
      position: relative;
    `}
  ${(props) =>
    props.ab_type === 'mid' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 20%;
    `}
${(props) =>
    props.ab_type === 'bot' &&
    css`
      width: 100%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export const PC_AuthorInfo = styled.div<{ ai_type: string }>`
  ${(props) =>
    props.ai_type === 'name' &&
    css`
    color: #338fef;
    font-family: elice;
    margin-bottom: 1.6rem
    font-size: 2rem;
  `}
  ${(props) =>
    props.ai_type === 'photos' &&
    css`
      color: #808080;
      font-family: elice;
      font-size: 1.4rem;
    `}
${(props) =>
    props.ai_type === 'img' &&
    css`
      width: 95%;
      height: 95%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    `}
`;

export const PC_Deny = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-family: elice;
`;
