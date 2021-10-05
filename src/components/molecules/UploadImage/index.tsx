import * as S from './style';
import React, { useEffect, useState } from 'react';
import PLUS from '../../../assets/plus.svg';
import { post_upload_img } from '../../../redux/services/auth.service';
import { KaKaoMapItem } from '../../index';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

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
    formData.append('idx', '2006');
    formData.append('gallaryAdress', located);
    formData.append('gallaryTime', '2021-09-25 20:11:11');
    formData.append('gallarySeseon', '1');
    formData.append('gallaryDireactionX', lat.toString());
    formData.append('gallaryDireactionY', lng.toString());

    // for (let key of formData.keys()) {
    //   console.log(key);
    // }

    // for (let value of formData.values()) {
    //   console.log(value);
    // }

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
    <>
      <Mobile>
        <div>모바일</div>
      </Mobile>
      <Tablet>
        <div>태블릿</div>
      </Tablet>
      <PC>
        <S.PC_Overlay>
          <S.PC_Inner>
            <S.PC_Wrap w_type="default">
              {kakaoMap ? (
                <KaKaoMapItem
                  setKakaoMap={setKakaoMap}
                  setLocation={setLocation}
                />
              ) : (
                ''
              )}
              <S.PC_Top>
                <S.PC_Title>버튼을 눌러 파일을 업로드 하세요</S.PC_Title>
                <S.PC_Ptag>사진(JPG, PNG)</S.PC_Ptag>
              </S.PC_Top>
              <S.PC_Mid>
                <S.PC_Form encType="multipart/form-data">
                  <S.PC_MidLeft>
                    <S.PC_Wrap w_type="img">
                      <S.PC_Preview>
                        <S.PC_PreviewImg src={ImgBase64} />
                      </S.PC_Preview>
                      <S.PC_Label l_type="img" htmlFor="imageIn">
                        <S.PC_BtnImg src={PLUS} />
                      </S.PC_Label>
                    </S.PC_Wrap>
                    <S.PC_Input
                      i_type="img"
                      id="imageIn"
                      inputType="file"
                      inputAccept="image/*"
                      name="file"
                      onChange={onChangeImgHandler}
                    />
                  </S.PC_MidLeft>
                  <S.PC_MidRight>
                    <S.PC_Wrap w_type="input">
                      <S.PC_Label l_type="default" htmlFor="first">
                        검색 키워드
                      </S.PC_Label>
                      <S.PC_Input
                        i_type="default"
                        id="first"
                        name="First"
                        placeholder="검색 키워드"
                        value={ImgInfo}
                        onChange={onImgInfoHandler}
                      />
                    </S.PC_Wrap>
                    <S.PC_Wrap w_type="input">
                      <S.PC_Label l_type="default" htmlFor="second">
                        촬영 장소
                      </S.PC_Label>
                      <S.PC_Input
                        i_type="default"
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
                    </S.PC_Wrap>
                    <S.PC_Btn btnOnClick={onSubmitHandler}>업로드</S.PC_Btn>
                  </S.PC_MidRight>
                </S.PC_Form>
              </S.PC_Mid>
              <S.PC_Bot>
                <S.PC_Ptag>나중에 그림 설명 같은거 넣을 예정</S.PC_Ptag>
                <S.PC_Ptag>나중에 그림 설명 같은거 넣을 예정</S.PC_Ptag>
                <S.PC_Ptag>나중에 그림 설명 같은거 넣을 예정</S.PC_Ptag>
              </S.PC_Bot>
            </S.PC_Wrap>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
