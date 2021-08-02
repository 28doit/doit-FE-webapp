import * as S from './style';
import TabIcon from '../../../assets/plus.svg';
import { Image } from '../../index';

export interface CardProps {
  CardType?: string;
  to?: string;
  imgSrc?: string;
  alt?: string;
  title?: string | number;
  noneTitle?: string;
  address?: string;
  description1?: string;
  description2?: string;
  FlagValid?: boolean;
  Flag?: string;
  room?: string;
  roomInfo?: string;
  ableRoom?: number;
  complexData?: boolean;
  boxWidth?: string;
  cardImgHeight?: string;
}

export function Card({
  CardType,
  noneTitle,
  to,
  imgSrc,
  alt,
  title,
  address,
  description1,
  description2,
  FlagValid,
  Flag,
  room,
  roomInfo,
  complexData,
  ableRoom,
  boxWidth,
  cardImgHeight,
  ...props
}: CardProps) {
  return (
    <S.CardWrapper CardType={CardType} boxWidth={boxWidth} {...props}>
      {to ? (
        <S.LinkWrapper to="">
          {imgSrc && (
            <S.ImgWrapper cardImgHeight={cardImgHeight}>
              <Image src={imgSrc} alt="alt" />
            </S.ImgWrapper>
          )}
          {(FlagValid || Flag) && (
            <S.FlagWrapper>
              {FlagValid && <S.Flag FlagValid>플러스+</S.Flag>}
              {Flag && <S.Flag>{Flag}</S.Flag>}
            </S.FlagWrapper>
          )}
          {(room || roomInfo) && (
            <>
              {room && <S.RoomInfoWrapper styleroom>{room}</S.RoomInfoWrapper>}
              {roomInfo && (
                <S.RoomInfoWrapper>
                  <S.AndWrapper>·</S.AndWrapper> {roomInfo}
                </S.RoomInfoWrapper>
              )}
            </>
          )}
          {title && (
            <S.TitleWrapper CardType={CardType}>
              {address && <S.AddressWrapper>{address}</S.AddressWrapper>}
              {title}
            </S.TitleWrapper>
          )}
          {(description1 || description2) && (
            <S.SubWrapper CardType={CardType}>
              {description1 && (
                <S.DetailWrapper>{description1}</S.DetailWrapper>
              )}
              {description2 && (
                <S.DetailWrapper> {description2}</S.DetailWrapper>
              )}
            </S.SubWrapper>
          )}
          {(complexData || ableRoom) && (
            <>
              {ableRoom && (
                <S.InfoListWrapper>
                  거래가능한 방
                  <S.InfoDataWrapper>{ableRoom} 개</S.InfoDataWrapper>
                </S.InfoListWrapper>
              )}
              {complexData && (
                <S.InfoListWrapper>
                  단지 정보
                  <S.InfoDataWrapper>
                    <Image src={TabIcon} alt="탭 아이콘" height="18px" />
                  </S.InfoDataWrapper>
                </S.InfoListWrapper>
              )}
            </>
          )}
          {CardType === 'type05' && (
            <S.SeeWrapper>
              <S.SeeText hasLink>{noneTitle}</S.SeeText>
              <svg width="35" height="35" viewBox="0 0 35 35">
                <g fill="none" fillRule="evenodd">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#3185F8"></circle>
                  <g fill="#FFF">
                    <path d="M10 17h15v1H10z"></path>
                    <path d="M17 10h1v15h-1z"></path>
                  </g>
                </g>
              </svg>
            </S.SeeWrapper>
          )}
        </S.LinkWrapper>
      ) : (
        <>
          {CardType === 'type05' && (
            <S.SeeWrapper>
              <S.SeeText>{noneTitle}</S.SeeText>
            </S.SeeWrapper>
          )}
        </>
      )}
    </S.CardWrapper>
  );
}
