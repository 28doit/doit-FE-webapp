import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/pinkHeart.svg';
import { ReactComponent as ViewImg } from '../../../assets/view.svg';
import { ReactComponent as DownloadImg } from '../../../assets/download.svg';
import { ReactComponent as LikeImg } from '../../../assets/like.svg';
import { useLayoutEffect, useState } from 'react';
import { get_img_detail } from '../../../redux/services/auth.service';
import queryString from 'query-string';
import {
  post_buy_img,
  post_cart_img,
  post_like_img,
  post_like_author,
} from '../../../redux/services/auth.service';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import { useSelector } from 'react-redux';

export interface ImageDetailItemProps {}

export const ImageDetailItem = ({
  ...args
}: ImageDetailItemProps): React.ReactElement => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const query = queryString.parse(location.search);
  const [imgData, setImgData] = useState({
    imgSrc: '',
    isSubscribe: false,
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
    isCart: false,
    price: 0,
    galleryId: 0,
    galleryAuthId: 0,
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
    isCart,
    price,
    galleryId,
    galleryAuthId,
  } = imgData;

  const [cart, setCart] = useState(isCart);

  useLayoutEffect(() => {
    get_img_detail(query.id)
      .then((response) => {
        console.log(response);
        const gallery = response.data.gallery;
        const authInfo = response.data.user;

        setImgData({
          // 추가로 사진 4장만 가능?
          isSubscribe: gallery.isSubscribe, // 없음
          isCart: gallery.isCart, // 없음
          isAuthSubScribe: gallery.isAuthSubScribe, // 없음
          likePeople: authInfo.userSubscribeCount,
          imgSrc: gallery.galleryImageLocation,
          profileImg: authInfo.profileImageLocation,
          author: authInfo.nickName,
          viewCount: gallery.galleryViews,
          downloadCount: gallery.galleryBuyCount,
          likeCount: gallery.gallerySubscribeCount,
          resolution: gallery.galleryName,
          uploadDate: gallery.galleryTime,
          locationInfo: gallery.galleryAdress,
          price: response.data.galleryPrice.price,
          imgSize: gallery.imgSize,
          cameraInfo: gallery.cameraInfo,
          galleryId: gallery.galleryId,
          galleryAuthId: gallery.idx,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const buyImgHandler = (e: any) => {
    post_buy_img(currentUser.token, query.id).then((response) => {
      console.log(response);
    });
  };

  const imgCart = (e: any) => {
    post_cart_img(currentUser.token, currentUser.email, query.id).then(
      (response) => {
        console.log(response);
        setCart(!cart);
      },
    );
  };

  const onImgLikeBtn = (e: any) => {
    setImgData({ ...imgData, ['isSubscribe']: !isSubscribe });
    post_like_img(currentUser.idx, galleryId).then((response) => {
      console.log(response);
    });
  };

  const onAuthLikeBtn = (e: any) => {
    setImgData({ ...imgData, ['isAuthSubScribe']: !isAuthSubScribe });
    post_like_author(currentUser.idx, galleryAuthId).then((response) => {
      console.log(response);
    });
  };

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
                    <S.PC_LeftInfo i_type="like" onClick={onAuthLikeBtn}>
                      <Heart width="30" height="30" fill="#d7443e" />
                    </S.PC_LeftInfo>
                  ) : (
                    <S.PC_LeftInfo i_type="like" onClick={onAuthLikeBtn}>
                      <Heart width="30" height="30" fill="#d7443e" />
                    </S.PC_LeftInfo>
                  )}
                  <S.PC_P p_type="l_p">
                    {likePeople} 명이 좋아하는 작가입니다.
                  </S.PC_P>
                </S.PC_LeftInfo>
                <S.PC_LeftInfo i_type="l_t_like">
                  {isSubscribe ? (
                    <S.PC_LeftInfo i_type="like" onClick={onImgLikeBtn}>
                      <Heart width="30" height="30" fill="#d7443e" />
                    </S.PC_LeftInfo>
                  ) : (
                    <S.PC_LeftInfo i_type="like" onClick={onImgLikeBtn}>
                      <Heart width="30" height="30" fill="#d7443e" />
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
              <S.PC_P p_type="l_p">댓글 (구현 중)</S.PC_P>
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
                <S.PC_P p_type="r_name">JPG {price}원</S.PC_P>
                <S.PC_P p_type="r_b">제목: {resolution}</S.PC_P>
                <S.PC_P p_type="r_b">업로드 날짜: {uploadDate}</S.PC_P>
                <S.PC_P p_type="r_b">촬영지 주소: {locationInfo}</S.PC_P>
                <S.PC_P p_type="r_b">촬영지 보기: {imgSize}</S.PC_P>
                {/* <S.PC_P p_type="r_b">카메라 정보: {cameraInfo}</S.PC_P> */}
                <S.PC_Btn b_type="cart" btnOnClick={imgCart}>
                  장바구니
                </S.PC_Btn>
                <S.PC_Btn b_type="buy" btnOnClick={buyImgHandler}>
                  구매하기
                </S.PC_Btn>
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
          </S.PC_Wrap>
        </S.PC_Container>
      </PC>
    </>
  );
};
