import * as S from './style';
import React, { useEffect, useState } from 'react';
import PLUS from '../../../assets/plus.svg';
import { post_upload_img } from '../../../redux/services/auth.service';
import { KaKaoMapItem } from '../../index';

export interface UploadItemProps {}

export const UploadImageModal = ({}: UploadItemProps): React.ReactElement => {
  const [ImgInfo, setImgInfo] = useState('');

  const [ImgObj, setImgObj] = useState({
    ImgBase64: '',
    ImgFile: null,
  });

  const [kakaoMap, setKakaoMap] = useState(false);
  const [location, setLocation] = useState({
    lat: 123,
    lng: 456,
    located: '',
  });

  const { ImgBase64, ImgFile } = ImgObj;
  const { lat, lng, located } = location;

  const onImgInfoHandler = (e: any) => {
    setImgInfo(e.currentTarget.value);
  };

  const onChangeImgHandler = (e: any) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgObj({
          ...ImgObj,
          ['ImgBase64']: base64.toString(),
          ['ImgFile']: e.target.files[0],
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
    let formData = new FormData();
    formData.append('images', ImgFile || '{}');
    formData.append('lat', lat.toString());
    formData.append('lng', lng.toString());
    formData.append('located', located);

    for (let key of formData.keys()) {
      console.log(key);
    }

    for (let value of formData.values()) {
      console.log(value);
    }

    post_upload_img(formData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(ImgFile);
  }, [ImgFile]);

  return (
    <S.UploadWrap>
      {kakaoMap ? (
        <KaKaoMapItem setKakaoMap={setKakaoMap} setLocation={setLocation} />
      ) : (
        ''
      )}
      <S.UploadTop>
        <S.UploadTitle>버튼을 눌러 파일을 업로드 하세요</S.UploadTitle>
        <S.UploadPtag>사진(JPG, PNG)</S.UploadPtag>
      </S.UploadTop>
      <S.UploadMid>
        <S.UploadForm encType="multipart/form-data">
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
              <S.UploadLabel htmlFor="first">검색 키워드</S.UploadLabel>
              <S.UploadInput
                id="first"
                name="First"
                placeholder="검색 키워드"
                value={ImgInfo}
                onChange={onImgInfoHandler}
              />
            </S.UploadInputWrap>
            <S.UploadInputWrap>
              <S.UploadLabel htmlFor="second">촬영 장소</S.UploadLabel>
              <S.UploadInput
                id="second"
                name="Second"
                placeholder="장소 찾기"
                value={located}
                onChange={onImgInfoHandler}
                onClick={(e: any) => {
                  e.preventDefault();
                  setKakaoMap(true);
                }}
              />
            </S.UploadInputWrap>
            <S.UploadResultBtn btnOnClick={onSubmitHandler}>
              업로드
            </S.UploadResultBtn>
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
