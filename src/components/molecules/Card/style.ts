import styled, { css } from 'styled-components';

export const PC_Container = styled.div``;

export const PC_Wrap =
  styled.div <
  { w_type: string } >
  `
  ${(props) =>
    props.w_type == 't_1' &&
    css`
      width: 330px;
      height: 200px;
      position: relative;
    `}
  ${(props) =>
    props.w_type == 't_2' &&
    css`
      width: 330px;
      height: 330px;
      position: relative;
    `}
  ${(props) =>
    props.w_type == 't_3' &&
    css`
      width: 330px;
      height: 200px;
      position: relative;
    `}
  ${(props) =>
    props.w_type == 't_4' &&
    css`
      width: 330px;
      height: 200px;
      position: relative;
    `}
  ${(props) =>
    props.w_type == 't_5' &&
    css`
      width: 280px;
      height: 180px;
      position: relative;
    `}
  ${(props) =>
    props.w_type == 't_6' &&
    css`
      width: 280px;
      height: 240px;
      position: relative;
    `}
`;

export const PC_Img =
  styled.img <
  { i_type: string } >
  `
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
    margin: 2px;
    border-radius: 5%;
  `}
${(props) =>
  props.i_type === 'default' &&
  css`
    width: 330px;
    height: 200px;
    cursor: pointer;
    border-radius: 3%;
  `}
${(props) =>
  props.i_type === 'category' &&
  css`
    width: 330px;
    height: 200px;
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
    width: 20px;
    hegiht: 20px;
  `}
`;

export const PC_P =
  styled.p <
  { p_type: string } >
  `
${(props) => props.p_type === 'default' && css``}
${(props) =>
  props.p_type === 'category' &&
  css`
    font-weight: 700;
    font-size: 20px;
  `}
`;

export const PC_Box =
  styled.div <
  { box: string } >
  `
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
  box-shadow: 0px 0px 2px #000000;
  cursor: pointer;
  background-color: #f9f9f9;
`;

export const PC_ImgBox =
  styled.div <
  { img_box: string } >
  `
${(props) => props.img_box === 'author' && css``}
${(props) =>
  props.img_box === 'like' &&
  css`
    top: 0;
    left: 0;
    pointer-events: none;
    background-color: white;
    padding: 3px 3px 0;
    border-radius: 50%;
  `}
${(props) =>
  props.img_box === 'manage' &&
  css`
    top: 0;
    left: 40px;
    pointer-events: none;
    background-color: white;
    padding: 3px 3px 0;
    border-radius: 50%;
  `}
  width: 30px;
  height: 30px;
  margin-left: 20px;
  margin-top: 20px;
  position: absolute;
`;

export const CardCategoryImgBox = styled.div`
  width: 330px;
  height: 200px;
  overflow: hidden;
  border-radius: 3%;
`;

export const CardCategoryMid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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

export const ModalBot = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
`;

export const ModalAuthor = styled.div`
  color: white;
  margin-left: 10px;
`;

export const AuthorBoxTop = styled.div`
  width: 100%;
  height: 10%;
  pointer-events: none;
  position: relative;
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

export const ManageTxt = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
`;
