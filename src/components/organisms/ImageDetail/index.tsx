import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/pinkHeart.svg';
import { ReactComponent as ViewImg } from '../../../assets/view.svg';
import { ReactComponent as DownloadImg } from '../../../assets/download.svg';
import { ReactComponent as LikeImg } from '../../../assets/like.svg';
import { useLayoutEffect, useState } from 'react';
import { get_img_detail } from '../../../redux/services/auth.service';
import queryString from 'query-string';

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
    <S.ImgDetailContainer>
      <S.ImgDetailLeft>
        <S.LeftTop>
          <S.LeftTopImg src={imgSrc} />
          <S.LeftTopBoxWrap>
            <S.LeftTopAuthorBox>
              <S.AuthorBoxProfile src={profileImg} />
              <S.AuthorBoxName>{author}</S.AuthorBoxName>
              {isAuthSubScribe ? (
                <S.LeftTopLike>
                  <Heart width="30" height="30" fill="#d7443e" />
                </S.LeftTopLike>
              ) : (
                <S.LeftTopLike>
                  <Heart width="30" height="30" fill="black" />
                </S.LeftTopLike>
              )}
              <S.LeftP>{likePeople} 명이 좋아하는 작가입니다.</S.LeftP>
            </S.LeftTopAuthorBox>
            <S.LeftTopLikeBox>
              {isSubscribe ? (
                <S.LeftTopLike>
                  <Heart width="30" height="30" fill="#d7443e" />
                </S.LeftTopLike>
              ) : (
                <S.LeftTopLike>
                  <Heart width="30" height="30" fill="black" />
                </S.LeftTopLike>
              )}
              <S.LeftP>좋아요</S.LeftP>
            </S.LeftTopLikeBox>
          </S.LeftTopBoxWrap>
          <S.LeftHr />
        </S.LeftTop>
        <S.LeftMid>
          <S.LeftP>작가의 다른 이미지</S.LeftP>
          <S.MidImgList></S.MidImgList>
        </S.LeftMid>
        <S.LeftBot>
          <S.LeftP>댓글</S.LeftP>
        </S.LeftBot>
      </S.ImgDetailLeft>
      <S.ImgDetailRight>
        <S.RightF>
          <S.RightFImg>
            <ViewImg width="30" height="30" fill="pink" />
          </S.RightFImg>
          <S.RightP>{viewCount} Views</S.RightP>
          <S.RightFImg>
            <DownloadImg width="30" height="30" fill="pink" />
          </S.RightFImg>
          <S.RightP>{downloadCount} Downloads</S.RightP>
          <S.RightFImg>
            <LikeImg width="30" height="30" fill="pink" />
          </S.RightFImg>
          <S.RightP>{likeCount} Likes</S.RightP>
        </S.RightF>
        <S.LeftHr />
        <S.RightS>
          <S.RightSBox>
            <S.RightSBoxName>JPG \500</S.RightSBoxName>
            <S.RightSBoxP>해상도: {resolution}</S.RightSBoxP>
            <S.RightSBoxP>용량: {imgSize}</S.RightSBoxP>
            <S.RightSBoxP>업로드 날짜: {uploadDate}</S.RightSBoxP>
            <S.RightSBoxP>카메라 정보: {cameraInfo}</S.RightSBoxP>
            <S.RightSBoxP>촬영 정보: {locationInfo}</S.RightSBoxP>
            <S.RightSBoxBtn>구매하기</S.RightSBoxBtn>
          </S.RightSBox>
        </S.RightS>
        <S.LeftHr />
        <S.RightT>
          <S.RightTP>이미지 구매시 주의사항</S.RightTP>
          <S.RightUl>
            <S.RightLi>
              구매 후 다운로드한 이미지는 자유롭게 보정 및 편집하여 사용할 수
              있습니다.
            </S.RightLi>
            <S.RightLi>
              이미지 구매전 라이선스를 확인해보시기 바랍니다.
            </S.RightLi>
            <S.RightLi>
              이미지 구매전 꼭 구매자 가이드를 읽어보시기 바랍니다.
            </S.RightLi>
            <S.RightLi>
              이용약관 및 구매자 가이드를 준수하지 않고 발생한 문제의 경우
              당사가 책임지지 않습니다.
            </S.RightLi>
            <S.RightLi>
              일부 콘텐츠는 초상권과 재산권의 추가 확보가 필요할 수 있으니
              중요한 용도로 사용할 경우에는 반드시 구매전에 크라우드픽으로
              문의하시기 바랍니다.
            </S.RightLi>
            <S.RightLi>
              이미지 구매 시 이미지에 사용된 폰트는 디자인 샘플일 뿐, 함께
              제공되는 것이 아닙니다. 정품 폰트를 구입하시거나 다른 폰트로
              변경하여 사용하시길 바랍니다.
            </S.RightLi>
          </S.RightUl>
        </S.RightT>
        <S.LeftHr />
        <S.RightH></S.RightH>
      </S.ImgDetailRight>
    </S.ImgDetailContainer>
  );
};
