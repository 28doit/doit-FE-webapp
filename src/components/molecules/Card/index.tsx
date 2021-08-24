import { useState } from 'react';
import * as S from './style';
import PinkHeart from '../../../assets/pinkHeart.svg';
import BlackHeart from '../../../assets/blackHeart.svg';
import ProImg from '../../../assets/cats.svg';
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
                <S.ModalAuthorImg src={ProImg} />
                <S.ModalAuthor>{author}</S.ModalAuthor>
              </S.ModalBot>
            </S.DefaultHoverModal>
          )}
        </S.CardDefaultWrapper>
      )}
      {CardType === 'type02'}
      {CardType === 'type03'}
    </S.CardContainer>
  );
};
