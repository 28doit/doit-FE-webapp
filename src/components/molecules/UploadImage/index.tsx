import * as S from './style';
import React, { useEffect, useState } from 'react';
import PLUS from '../../../assets/plus.svg';
import axios from 'axios';

export interface UploadItemProps {}

export const UploadImageModal = ({}: UploadItemProps): React.ReactElement => {
  const [ImgInfo, setImgInfo] = useState({
    First: '',
    Second: '',
    Third: '',
    Fourth: '',
  });
  const [ImgObj, setImgObj] = useState({
    ImgBase64: '',
    ImgFile: '',
  });

  const { First, Second, Third, Fourth } = ImgInfo;
  const { ImgBase64, ImgFile } = ImgObj;
  const onImgInfoHandler = (e: any) => {
    setImgInfo({ ...ImgInfo, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onChangeImgHandler = (e: any) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgObj({
          ...ImgObj,
          ['ImgBase64']: base64.toString(),
        });
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImgObj({
        ...ImgObj,
        ['ImgFile']: e.target.files[0],
      });
    }
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', ImgFile);
    formData.append('exF', First);
    formData.append('exS', Second);
    formData.append('exT', Third);
    formData.append('exH', Fourth);

    axios.post('url', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  return (
    <S.UploadWrap>
      <S.UploadTop>
        <S.UploadTitle>버튼을 눌러 파일을 업로드 하세요</S.UploadTitle>
        <S.UploadPtag>사진(JPG, PNG)</S.UploadPtag>
      </S.UploadTop>
      <S.UploadMid>
        <S.UploadForm encType="multipart/form-data" onSubmit={onSubmitHandler}>
          <S.UploadMidLeft>
            <S.UploadImgInputWrap>
              <S.UploadPreview>
                <S.UploadPreviewImg src={ImgBase64} />
              </S.UploadPreview>
              <S.UploadImageLabel htmlFor="imageIn">
                <S.UploadBtnImg src={PLUS} />
              </S.UploadImageLabel>
            </S.UploadImgInputWrap>
            <S.UploadImageInput
              id="imageIn"
              inputType="file"
              inputAccept="image/*"
              name="file"
              onChange={onChangeImgHandler}
            />
          </S.UploadMidLeft>
          <S.UploadMidRight>
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
          </S.UploadMidRight>
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
