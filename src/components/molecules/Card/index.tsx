import { useState } from 'react';
import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/pinkHeart.svg';
import { ReactComponent as ViewImg } from '../../../assets/view.svg';
import { ReactComponent as DownloadImg } from '../../../assets/download.svg';
import { ReactComponent as LikeImg } from '../../../assets/like.svg';
import { ReactComponent as EditImg } from '../../../assets/pencil.svg';
import { ReactComponent as TrashImg } from '../../../assets/trash.svg';

export interface CardProps {
  CardType: string;
  imgSrc?: string;
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
  trashImg?: string; // 이미지 관리에서 사용
  editImg?: string; // 이미지 관리에서 사용
  cardOnclick?: (e: any) => void;
}

export const Card = ({
  CardType,
  imgSrc,
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
    <S.PC_Container>
      {CardType === 'type01' && (
        <S.PC_Wrap w_type="t_1">
          <S.PC_Img
            i_type="default"
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
                <S.PC_P p_type="default">{viewCount}</S.PC_P>
                <S.ModalMidImg>
                  <DownloadImg width="20" height="20" fill="#f9f9f9" />
                </S.ModalMidImg>
                <S.PC_P p_type="default">{downloadCount}</S.PC_P>
                <S.ModalMidImg>
                  <LikeImg width="20" height="20" fill="#f9f9f9" />
                </S.ModalMidImg>
                <S.PC_P p_type="default">{likeCount}</S.PC_P>
              </S.ModalMid>
              <S.ModalBot>
                <S.PC_Img i_type="author" src={proFileImg} />
                <S.ModalAuthor>{author}</S.ModalAuthor>
              </S.ModalBot>
            </S.DefaultHoverModal>
          )}
        </S.PC_Wrap>
      )}
      {CardType === 'type02' && (
        <S.PC_Wrap
          w_type="t_2"
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          onClick={cardOnclick}
        >
          <S.PC_Box box="author">
            <S.AuthorBoxTop>
              {show && (
                <>
                  {isSubscribe ? (
                    <S.PC_ImgBox img_box="author">
                      <Heart width="30" height="30" fill="#d7443e" />
                    </S.PC_ImgBox>
                  ) : (
                    <S.PC_ImgBox img_box="author">
                      <Heart width="30" height="30" fill="black" />
                    </S.PC_ImgBox>
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
                <S.PC_Img i_type="a_photos" src={authorFimg} />
                <S.PC_Img i_type="a_photos" src={authorSimg} />
                <S.PC_Img i_type="a_photos" src={authorTimg} />
                <S.PC_Img i_type="a_photos" src={authorHimg} />
              </S.AuthorPhotos>
            </S.AuthorBoxBot>
          </S.PC_Box>
        </S.PC_Wrap>
      )}
      {CardType === 'type03' && (
        <S.PC_Wrap
          w_type="t_3"
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          onClick={cardOnclick}
        >
          <S.PC_Box box="like">
            {show && (
              <>
                {isSubscribe ? (
                  <S.PC_ImgBox img_box="like">
                    <Heart width="30" height="30" fill="#d7443e" />
                  </S.PC_ImgBox>
                ) : (
                  <S.PC_ImgBox img_box="like">
                    <Heart width="30" height="30" fill="black" />
                  </S.PC_ImgBox>
                )}
              </>
            )}
            <S.PC_Img i_type="like" src={likeImg} />
          </S.PC_Box>
        </S.PC_Wrap>
      )}
      {CardType === 'type04' && (
        <S.PC_Wrap w_type="t_4" onClick={cardOnclick}>
          <S.CardCategoryImgBox>
            <S.PC_Img i_type="category" src={imgSrc} />
          </S.CardCategoryImgBox>
          <S.DefaultHoverModal>
            <S.CardCategoryMid>
              <S.PC_P p_type="category">{imgCategory}</S.PC_P>
              <S.PC_P p_type="default">&nbsp;이미지</S.PC_P>
            </S.CardCategoryMid>
          </S.DefaultHoverModal>
        </S.PC_Wrap>
      )}
      {CardType === 'type05' && (
        <S.PC_Wrap
          w_type="t_5"
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          onClick={cardOnclick}
        >
          <S.PC_Box box="like">
            {show && (
              <>
                <S.PC_ImgBox img_box="like">
                  <EditImg width="30" height="30" />
                </S.PC_ImgBox>
                <S.PC_ImgBox img_box="manage">
                  <TrashImg width="30" height="30" />
                </S.PC_ImgBox>
              </>
            )}
            <S.PC_Img i_type="like" src={likeImg} />
          </S.PC_Box>
        </S.PC_Wrap>
      )}
      {CardType === 'type06' && (
        <S.PC_Wrap
          w_type="t_6"
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          onClick={cardOnclick}
        >
          <S.PC_Box box="manage">
            {show && (
              <>
                <S.PC_ImgBox img_box="like">
                  <TrashImg width="30" height="30" />
                </S.PC_ImgBox>
              </>
            )}
            <S.PC_Img i_type="manage" src={likeImg} />
            <S.ManageTxt>승인 불가 사유 보기 / 수정 하기</S.ManageTxt>
          </S.PC_Box>
        </S.PC_Wrap>
      )}
    </S.PC_Container>
  );
};
