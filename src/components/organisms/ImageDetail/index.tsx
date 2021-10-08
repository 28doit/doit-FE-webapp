import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/pinkHeart.svg';
import { ReactComponent as ViewImg } from '../../../assets/view.svg';
import { ReactComponent as DownloadImg } from '../../../assets/download.svg';
import { ReactComponent as LikeImg } from '../../../assets/like.svg';
import { useLayoutEffect, useState } from 'react';
import { get_img_detail } from '../../../redux/services/auth.service';
import queryString from 'query-string';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface ImageDetailProps {}

export const ImageDetail = ({
  ...args
}: ImageDetailProps): React.ReactElement => {
  const query = queryString.parse(location.search);
  const [imgData, setImgData] = useState({
    imgSrc: '',
    isSubscribe: '',
    profileImg: '',
    isAuthSubScribe: false,
    author: '',
    likePeople: 0,
    viewCount: 0,
    downloadCount: 0,
    likeCount: 0,
    resolution: '',
    imgSize: '',
    uploadDate: '',
    cameraInfo: '',
    locationInfo: '',
  });
  const {
    imgSrc,
    isSubscribe,
    profileImg,
    isAuthSubScribe,
    author,
    likePeople,
    viewCount,
    downloadCount,
    likeCount,
    resolution,
    imgSize,
    uploadDate,
    cameraInfo,
    locationInfo,
  } = imgData;

  useLayoutEffect(() => {
    get_img_detail(query.id).then((response) => {
      console.log(response.data);
      console.log(query.id);
      const data = response.data;
      setImgData({
        imgSrc: data.imgSrc,
        isSubscribe: data.isSubscribe,
        profileImg: data.profileImg,
        isAuthSubScribe: data.isAuthSubScribe,
        author: data.author,
        likePeople: data.likePeople,
        viewCount: data.viewCount,
        downloadCount: data.downloadCount,
        likeCount: data.likeCount,
        resolution: data.resolution,
        imgSize: data.imgSize,
        uploadDate: data.uploadDate,
        cameraInfo: data.cameraInfo,
        locationInfo: data.locationInfo,
      });
    });
  }, []);

  return (
    <>
      <Mobile>
        <div>모바일</div>
      </Mobile>
      <Tablet>
        <div>태블릿</div>
      </Tablet>
      <PC>
        <S.PC_Container>
          <S.PC_Wrap wrap="left">
            <S.PC_LeftBox b_type="top">
              <S.PC_Img img="l_t" src={imgSrc} />
              <S.PC_LeftInfo i_type="l_t_wrap">
                <S.PC_LeftInfo i_type="l_t_auth">
                  <S.PC_Img img="l_auth" src={profileImg} />
                  <S.PC_P p_type="l_auth">{author}</S.PC_P>
                  {isAuthSubScribe ? (
                    <S.PC_LeftInfo i_type="like">
                      <Heart width="30" height="30" fill="#d7443e" />
                    </S.PC_LeftInfo>
                  ) : (
                    <S.PC_LeftInfo i_type="like">
                      <Heart width="30" height="30" fill="black" />
                    </S.PC_LeftInfo>
                  )}
                  <S.PC_P p_type="l_p">
                    {likePeople} 명이 좋아하는 작가입니다.
                  </S.PC_P>
                </S.PC_LeftInfo>
                <S.PC_LeftInfo i_type="l_t_like">
                  {isSubscribe ? (
                    <S.PC_LeftInfo i_type="like">
                      <Heart width="30" height="30" fill="#d7443e" />
                    </S.PC_LeftInfo>
                  ) : (
                    <S.PC_LeftInfo i_type="like">
                      <Heart width="30" height="30" fill="black" />
                    </S.PC_LeftInfo>
                  )}
                  <S.PC_P p_type="l_p">좋아요</S.PC_P>
                </S.PC_LeftInfo>
              </S.PC_LeftInfo>
              <S.PC_Hr />
            </S.PC_LeftBox>
            <S.PC_LeftBox b_type="mid">
              <S.PC_P p_type="l_p">작가의 다른 이미지</S.PC_P>
              <S.PC_LeftInfo i_type="l_m_list"></S.PC_LeftInfo>
            </S.PC_LeftBox>
            <S.PC_LeftBox b_type="bot">
              <S.PC_P p_type="l_p">댓글</S.PC_P>
            </S.PC_LeftBox>
          </S.PC_Wrap>
          <S.PC_Wrap wrap="right">
            <S.PC_RightInfo i_type="r_f">
              <S.PC_RightInfo i_type="r_f_img">
                <ViewImg width="30" height="30" fill="pink" />
              </S.PC_RightInfo>
              <S.PC_P p_type="r_p">{viewCount} Views</S.PC_P>
              <S.PC_RightInfo i_type="r_f_img">
                <DownloadImg width="30" height="30" fill="pink" />
              </S.PC_RightInfo>
              <S.PC_P p_type="r_p">{downloadCount} Downloads</S.PC_P>
              <S.PC_RightInfo i_type="r_f_img">
                <LikeImg width="30" height="30" fill="pink" />
              </S.PC_RightInfo>
              <S.PC_P p_type="r_p">{likeCount} Likes</S.PC_P>
            </S.PC_RightInfo>
            <S.PC_Hr />
            <S.PC_RightInfo i_type="r_s">
              <S.PC_RightInfo i_type="r_s_box">
                <S.PC_P p_type="r_name">JPG \500</S.PC_P>
                <S.PC_P p_type="r_b">해상도: {resolution}</S.PC_P>
                <S.PC_P p_type="r_b">용량: {imgSize}</S.PC_P>
                <S.PC_P p_type="r_b">업로드 날짜: {uploadDate}</S.PC_P>
                <S.PC_P p_type="r_b">카메라 정보: {cameraInfo}</S.PC_P>
                <S.PC_P p_type="r_b">촬영 정보: {locationInfo}</S.PC_P>
                <S.PC_Btn>구매하기</S.PC_Btn>
              </S.PC_RightInfo>
            </S.PC_RightInfo>
            <S.PC_Hr />
            <S.PC_RightInfo i_type="r_t">
              <S.PC_RightInfo i_type="r_t_p">
                이미지 구매시 주의사항
              </S.PC_RightInfo>
              <S.PC_Ul>
                <S.PC_Li>
                  구매 후 다운로드한 이미지는 자유롭게 보정 및 편집하여 사용할
                  수 있습니다.
                </S.PC_Li>
                <S.PC_Li>
                  이미지 구매전 라이선스를 확인해보시기 바랍니다.
                </S.PC_Li>
                <S.PC_Li>
                  이미지 구매전 꼭 구매자 가이드를 읽어보시기 바랍니다.
                </S.PC_Li>
                <S.PC_Li>
                  이용약관 및 구매자 가이드를 준수하지 않고 발생한 문제의 경우
                  당사가 책임지지 않습니다.
                </S.PC_Li>
                <S.PC_Li>
                  일부 콘텐츠는 초상권과 재산권의 추가 확보가 필요할 수 있으니
                  중요한 용도로 사용할 경우에는 반드시 구매전에 크라우드픽으로
                  문의하시기 바랍니다.
                </S.PC_Li>
                <S.PC_Li>
                  이미지 구매 시 이미지에 사용된 폰트는 디자인 샘플일 뿐, 함께
                  제공되는 것이 아닙니다. 정품 폰트를 구입하시거나 다른 폰트로
                  변경하여 사용하시길 바랍니다.
                </S.PC_Li>
              </S.PC_Ul>
            </S.PC_RightInfo>
            <S.PC_Hr />
            <S.PC_RightInfo i_type="r_h"></S.PC_RightInfo>
          </S.PC_Wrap>
        </S.PC_Container>
      </PC>
    </>
  );
};
