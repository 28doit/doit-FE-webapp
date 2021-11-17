import * as S from './style';
import React, { useEffect, useState } from 'react';
import PLUS from '../../../assets/plus.svg';
import {
  expired_check,
  post_upload_img,
} from '../../../redux/services/auth.service';
import { KaKaoMapItem, ModalLoadingItem } from '../../index';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import { Nlogout } from '../../../redux/actions/auth';
import { useAppThunkDispatch } from '../../../redux/store';
import { useSelector } from 'react-redux';
import ROUTES from '../../../commons/routes';

export interface UploadImageItemProps {}

export const UploadImageItem =
  ({}: UploadImageItemProps): React.ReactElement => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useAppThunkDispatch();
    const [Loading, setLoading] = useState(false);
    const [data, setData] = useState({
      email: '',
      sex: 1,
      phone: '',
      month: '',
      year: '',
      day: '',
      name: '',
    });

    useEffect(() => {
      const getUser = async () => {
        await expired_check(currentUser.token, currentUser.email)
          .then((response) => {
            console.log(response.data);
            if (response.data.Token === false) {
              alert('시간이 만료되었습니다. 다시 로그인 해주세요');
              dispatch(Nlogout());
              window.location.replace(ROUTES.LOGIN);
            } else {
              const userData = response.data;
              setData({
                ...data,
                ['email']: userData.Email,
                ['name']: userData.Name,
                ['sex']: userData.sex,
                ['year']: userData.Year,
                ['month']: userData.Month,
                ['day']: userData.Day,
                ['phone']: userData.PhoneNumber,
              });
            }
          })
          .catch(() => {
            alert(
              '잠시 오류가 발생하였습니다. 잠시 후 다시 시도해주시기 바랍니다.',
            );
            setLoading(false);
            window.location.replace(ROUTES.MYDASH);
          });
        setLoading(false);
      };
      setLoading(true);
      currentUser ? getUser() : window.location.replace(ROUTES.LOGIN);
    }, []);

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
      formData.append('galleryAdress', located);
      formData.append('galleryTime', '2021-09-25 20:11:11');
      formData.append('gallerySeseon', '1');
      formData.append('galleryDireaction', '1');
      formData.append('galleryImageLocation', '1');
      formData.append('gallerySubscibeCount', '0');
      //formData.append('gallaryDireactionY', lng.toString());

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
          {Loading ? <ModalLoadingItem /> : ''}
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
                <S.PC_Box where="top">
                  <S.PC_Title>버튼을 눌러 파일을 업로드 하세요</S.PC_Title>
                  <S.PC_P>사진(JPG, PNG)</S.PC_P>
                </S.PC_Box>
                <S.PC_Box where="mid">
                  <S.PC_Form encType="multipart/form-data">
                    <S.PC_Mid mid="left">
                      <S.PC_Wrap w_type="img">
                        <S.PC_Preview>
                          <S.PC_Img src={ImgBase64} img_type="preview" />
                        </S.PC_Preview>
                        <S.PC_Label l_type="img" htmlFor="imageIn">
                          <S.PC_Img src={PLUS} img_type="btn" />
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
                    </S.PC_Mid>
                    <S.PC_Mid mid="right">
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
                    </S.PC_Mid>
                  </S.PC_Form>
                </S.PC_Box>
                <S.PC_Box where="bot">
                  <S.PC_P>설명 1</S.PC_P>
                  <S.PC_P>설명 2</S.PC_P>
                  <S.PC_P>설명 3</S.PC_P>
                </S.PC_Box>
              </S.PC_Wrap>
            </S.PC_Inner>
          </S.PC_Overlay>
        </PC>
      </>
    );
  };
