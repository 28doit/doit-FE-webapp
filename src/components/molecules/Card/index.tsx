import { useState } from 'react';
import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/pinkHeart.svg';
import { ReactComponent as ViewImg } from '../../../assets/view.svg';
import { ReactComponent as DownloadImg } from '../../../assets/download.svg';
import { ReactComponent as LikeImg } from '../../../assets/like.svg';

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
  likeImg?: string; // 좋아하는 이미지에서 사용
  imgCategory?: string; // 카테고리에서만 사용
  cardOnclick?: (e: any) => void;
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
  likeImg,
  imgCategory,
  cardOnclick,
  ...props
}: CardProps): React.ReactElement => {
  const [show, setShow] = useState(false);

  return (
    <S.CardContainer>
      {CardType === 'type01' && (
        <S.CardDefaultWrapper cardImgWidth={imgWidth} cardImgHeight={imgHeight}>
          <S.CardDefaultImg
            cardImgWidth={imgWidth}
            cardImgHeight={imgHeight}
            src={imgSrc}
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
            onClick={cardOnclick}
          />
          {show && (
            <S.DefaultHoverModal>
              <S.ModalTop>
                {isSubscribe ? (
                  <S.ModalTopImg>
                    <Heart width="60" height="60" fill="#d7443e" />
                  </S.ModalTopImg>
                ) : (
                  <S.ModalTopImg>
                    <Heart width="60" height="60" fill="black" />
                  </S.ModalTopImg>
                )}
              </S.ModalTop>
              <S.ModalMid>
                <S.ModalMidImg>
                  <ViewImg width="20" height="20" fill="#f9f9f9" />
                </S.ModalMidImg>
                <S.ModalMidP>{viewCount}</S.ModalMidP>
                <S.ModalMidImg>
                  <DownloadImg width="20" height="20" fill="#f9f9f9" />
                </S.ModalMidImg>
                <S.ModalMidP>{downloadCount}</S.ModalMidP>
                <S.ModalMidImg>
                  <LikeImg width="20" height="20" fill="#f9f9f9" />
                </S.ModalMidImg>
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
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          onClick={cardOnclick}
        >
          <S.AuthorBox>
            <S.AuthorBoxTop>
              {show && (
                <>
                  {isSubscribe ? (
                    <S.AuthorTopImg>
                      <Heart width="30" height="30" fill="#d7443e" />
                    </S.AuthorTopImg>
                  ) : (
                    <S.AuthorTopImg>
                      <Heart width="30" height="30" fill="black" />
                    </S.AuthorTopImg>
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
      {CardType === 'type03' && (
        <S.CardDefaultWrapper
          cardImgWidth={imgWidth}
          cardImgHeight={imgHeight}
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          onClick={cardOnclick}
        >
          <S.LikeImgBox>
            {show && (
              <>
                {isSubscribe ? (
                  <S.LikeImgHeart>
                    <Heart width="30" height="30" fill="#d7443e" />
                  </S.LikeImgHeart>
                ) : (
                  <S.LikeImgHeart>
                    <Heart width="30" height="30" fill="black" />
                  </S.LikeImgHeart>
                )}
              </>
            )}
            <S.LikeImg src={likeImg} />
          </S.LikeImgBox>
        </S.CardDefaultWrapper>
      )}
      {CardType === 'type04' && (
        <S.CardDefaultWrapper
          cardImgWidth={imgWidth}
          cardImgHeight={imgHeight}
          onClick={cardOnclick}
        >
          <S.CardCategoryDiv>
            <S.CardCategoryImg
              cardImgWidth={imgWidth}
              cardImgHeight={imgHeight}
              src={imgSrc}
            />
          </S.CardCategoryDiv>
          <S.DefaultHoverModal>
            <S.CardCategoryMid>
              <S.CardCategoryP>{imgCategory}</S.CardCategoryP>
              <S.ModalMidP>&nbsp;이미지</S.ModalMidP>
            </S.CardCategoryMid>
          </S.DefaultHoverModal>
        </S.CardDefaultWrapper>
      )}
    </S.CardContainer>
  );
};
