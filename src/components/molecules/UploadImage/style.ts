import styled from 'styled-components';
import { Btn, Input, Label } from '../../index';

export const UploadWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const UploadLeft = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const UploadRight = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UploadLeftTop = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UploadPtag = styled.p``;

export const UploadLeftMid = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UploadBtnImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const UploadLeftBot = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
`;

export const UploadRightForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UploadLabel = styled(Label)``;

export const UploadInput = styled(Input)`
  margin-bottom: 30px;
  width: 90%;
`;

export const UploadResultBtn = styled(Btn)`
  width: 50%;
`;
