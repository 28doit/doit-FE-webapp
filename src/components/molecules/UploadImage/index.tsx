import * as S from './style';
import React, { useState } from 'react';
import PLUS from '../../../assets/plus.svg';

export interface UploadItemProps {}

export const UploadImageModal = ({}: UploadItemProps): React.ReactElement => {
  const [ImgInfo, setImgInfo] = useState({
    First: '',
    Second: '',
    Third: '',
    Fourth: '',
  });

  const { First, Second, Third, Fourth } = ImgInfo;

  const onImgInfoHandler = (e: any) => {
    setImgInfo({ ...ImgInfo, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <S.UploadWrap>
      <S.UploadTop>
        <S.UploadTitle>버튼을 눌러 파일을 업로드 하세요</S.UploadTitle>
        <S.UploadPtag>사진(JPG, PNG)</S.UploadPtag>
      </S.UploadTop>
      <S.UploadMid>
        <S.UploadForm encType="multipart/form-data">
          <S.UploadInputWrap>
            <S.UploadImageLabel htmlFor="imageIn">
              <S.UploadBtnImg src={PLUS} />
            </S.UploadImageLabel>
          </S.UploadInputWrap>
          <S.UploadImageInput
            id="imageIn"
            inputType="file"
            accept="image/*"
            name="file"
          />
          <S.UploadDiv>
            <S.UploadInputWrap>
              <S.UploadLabel htmlFor="first">첫 번째</S.UploadLabel>
              <S.UploadInput
                id="first"
                name="First"
                placeholder="이거 뭐 넣지"
                value={First}
                onChange={onImgInfoHandler}
              />
            </S.UploadInputWrap>
            <S.UploadInputWrap>
              <S.UploadLabel htmlFor="second">두 번째</S.UploadLabel>
              <S.UploadInput
                id="second"
                name="Second"
                placeholder="이거 뭐 넣지"
                value={Second}
                onChange={onImgInfoHandler}
              />
            </S.UploadInputWrap>
            <S.UploadSelectWrap>
              <S.UploadLabel htmlFor="third">세 번째</S.UploadLabel>
              <S.UploadSelect
                id="third"
                name="Third"
                value={Third}
                onChange={onImgInfoHandler}
              >
                <option>뭘 넣을까</option>
                <option value="imsi1">임시1</option>
                <option value="imsi2">임시2</option>
              </S.UploadSelect>
              <S.UploadLabel htmlFor="fourth">네 번째</S.UploadLabel>
              <S.UploadSelect
                id="fourth"
                name="Fourth"
                value={Fourth}
                onChange={onImgInfoHandler}
              >
                <option>뭘 넣을까</option>
                <option value="imsi1">임시1</option>
                <option value="imsi2">임시2</option>
              </S.UploadSelect>
            </S.UploadSelectWrap>
            <S.UploadResultBtn>업로드</S.UploadResultBtn>
          </S.UploadDiv>
        </S.UploadForm>
      </S.UploadMid>
      <S.UploadBot>
        <S.UploadPtag>나중에 그림 설명 같은거 넣을 예정</S.UploadPtag>
        <S.UploadPtag>나중에 그림 설명 같은거 넣을 예정</S.UploadPtag>
        <S.UploadPtag>나중에 그림 설명 같은거 넣을 예정</S.UploadPtag>
      </S.UploadBot>
    </S.UploadWrap>
  );
};
