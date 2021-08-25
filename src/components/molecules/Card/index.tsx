import { useState } from 'react';
import * as S from './style';
import PinkHeart from '../../../assets/pinkHeart.svg';
import BlackHeart from '../../../assets/blackHeart.svg';
import ViewImg from '../../../assets/view.svg';
import DownloadImg from '../../../assets/download.svg';
import LikeImg from '../../../assets/like.svg';

export interface CardProps {
  CardType: string;
  imgSrc?: string;
  imgWidth?: string;
  imgHeight?: string;
  viewCount?: number;
  downloadCount?: number;
  likeCount?: number;
  isSubscribe?: boolean;
  author?: string;
  proFileImg?: string;
  authorPhotos?: string; // 작가 카드에서만 사용
  authorFimg?: string; // 작가 카드에서만 사용
  authorSimg?: string; // 작가 카드에서만 사용
  authorTimg?: string; // 작가 카드에서만 사용
  authorHimg?: string; // 작가 카드에서만 사용
}

export const Card = ({
  CardType,
  imgSrc,
  imgWidth,
  imgHeight,
  viewCount,
  downloadCount,
  likeCount,
  isSubscribe,
  author,
  proFileImg,
  authorPhotos,
  authorFimg,
  authorSimg,
  authorTimg,
  authorHimg,
  ...props
}: CardProps): React.ReactElement => {
  const [Show, SetShow] = useState(false);

  return (
    <S.CardContainer>
      {CardType === 'type01' && (
        <S.CardDefaultWrapper cardImgWidth={imgWidth} cardImgHeight={imgHeight}>
          <S.CardDefaultImg
            cardImgWidth={imgWidth}
            cardImgHeight={imgHeight}
            src={imgSrc}
            onMouseOver={() => SetShow(true)}
            onMouseOut={() => SetShow(false)}
          />
          {Show && (
            <S.DefaultHoverModal>
              <S.ModalTop>
                {isSubscribe ? (
                  <S.ModalTopImg src={PinkHeart} />
                ) : (
                  <S.ModalTopImg src={BlackHeart} />
                )}
              </S.ModalTop>
              <S.ModalMid>
                <S.ModalMidImg src={ViewImg} />
                <S.ModalMidP>{viewCount}</S.ModalMidP>
                <S.ModalMidImg src={DownloadImg} />
                <S.ModalMidP>{downloadCount}</S.ModalMidP>
                <S.ModalMidImg src={LikeImg} />
                <S.ModalMidP>{likeCount}</S.ModalMidP>
              </S.ModalMid>
              <S.ModalBot>
                <S.ModalAuthorImg src={proFileImg} />
                <S.ModalAuthor>{author}</S.ModalAuthor>
              </S.ModalBot>
            </S.DefaultHoverModal>
          )}
        </S.CardDefaultWrapper>
      )}
      {CardType === 'type02' && (
        <S.CardDefaultWrapper
          cardImgWidth={imgWidth}
          cardImgHeight={imgHeight}
          onMouseOver={() => SetShow(true)}
          onMouseOut={() => SetShow(false)}
        >
          <S.AuthorBox>
            <S.AuthorBoxTop>
              {Show && (
                <>
                  {isSubscribe ? (
                    <S.AuthorTopImg src={PinkHeart} />
                  ) : (
                    <S.AuthorTopImg src={BlackHeart} />
                  )}
                </>
              )}
            </S.AuthorBoxTop>
            <S.AuthorBoxMid>
              <S.AuthorName>{author}</S.AuthorName>
              <S.AuthorInfo>보유사진: {authorPhotos}장</S.AuthorInfo>
            </S.AuthorBoxMid>
            <S.AuthorBoxBot>
              <S.AuthorPhotos>
                <S.AuthorPhotosImg src={authorFimg} />
                <S.AuthorPhotosImg src={authorSimg} />
                <S.AuthorPhotosImg src={authorTimg} />
                <S.AuthorPhotosImg src={authorHimg} />
              </S.AuthorPhotos>
            </S.AuthorBoxBot>
          </S.AuthorBox>
        </S.CardDefaultWrapper>
      )}
      {CardType === 'type03'}
    </S.CardContainer>
  );
};
