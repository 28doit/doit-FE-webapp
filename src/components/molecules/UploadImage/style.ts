import styled from 'styled-components';
import { Btn, Input, Label } from '../../index';

export const UploadWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const UploadTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 25px;
  text-align: center;
`;

export const UploadTop = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UploadPtag = styled.p`
  font-weight: 700;
`;

export const UploadMid = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
`;

export const UploadBtnImg = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

export const UploadImageInput = styled(Input)`
  display: none;
`;

export const UploadImageLabel = styled(Label)``;

export const UploadBot = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const UploadForm = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const UploadDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const UploadInputWrap = styled.div``;

export const UploadLabel = styled(Label)``;

export const UploadInput = styled(Input)`
  margin-bottom: 30px;
  width: 90%;
`;

export const UploadSelectWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const UploadSelect = styled.select`
  width: 200px;
  height: 40px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
  margin-bottom: 30px;
`;

export const UploadResultBtn = styled(Btn)`
  width: 50%;
`;
