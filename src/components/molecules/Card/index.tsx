import { useState } from 'react';
import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/pinkHeart.svg';
import { ReactComponent as ViewImg } from '../../../assets/view.svg';
import { ReactComponent as DownloadImg } from '../../../assets/download.svg';
import { ReactComponent as LikeImg } from '../../../assets/like.svg';
import { ReactComponent as EditImg } from '../../../assets/pencil.svg';
import { ReactComponent as TrashImg } from '../../../assets/trash.svg';
import {
  post_like_img,
  post_like_author,
} from '../../../redux/services/auth.service';

export interface CardItemProps {
  CardType: string;
  gallId?: any;
  imgUserIdx?: any;
  imgSrc?: string;
  viewCount?: number;
  downloadCount?: number;
  likeCount?: number;
  isSubscribe?: boolean;
  isCart?: boolean;
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

export const CardItem = ({
  CardType,
  gallId,
  imgUserIdx,
  imgSrc,
  viewCount,
  downloadCount,
  likeCount,
  isSubscribe,
  isCart,
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
}: CardItemProps): React.ReactElement => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(isSubscribe);

  const imgLike = (idx: any, gallId: any) => {
    console.log(idx, gallId);
    post_like_img(idx, gallId).then(() => {
      setLike(!like);
    });
  };

  const authorLike = (idx: any, auth: any) => {
    post_like_author(idx, auth).then(() => {
      setLike(!like);
    });
  };

  return (
    <S.PC_Container>
      {CardType === 'type01' && (
        <S.PC_Wrap
          w_type="t_1"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <S.PC_Img i_type="default" src={imgSrc} />
          {show && (
            <S.PC_Modal m_type="default">
              <S.PC_Modal m_type="top">
                <S.PC_ModalBox mb_type="t_img">
                  <Heart
                    width="60"
                    height="60"
                    fill={like ? '#d7443e' : 'white'}
                    onClick={() => {
                      imgLike(imgUserIdx, gallId);
                    }}
                  />
                </S.PC_ModalBox>
              </S.PC_Modal>
              <S.PC_Modal m_type="mid" onClick={cardOnclick}>
                <S.PC_ModalBox mb_type="m_img">
                  <ViewImg width="20" height="20" fill="#f9f9f9" />
                </S.PC_ModalBox>
                <S.PC_P p_type="default">{viewCount}</S.PC_P>
                <S.PC_ModalBox mb_type="m_img">
                  <DownloadImg width="20" height="20" fill="#f9f9f9" />
                </S.PC_ModalBox>
                <S.PC_P p_type="default">{downloadCount}</S.PC_P>
                <S.PC_ModalBox mb_type="m_img">
                  <LikeImg width="20" height="20" fill="#f9f9f9" />
                </S.PC_ModalBox>
                <S.PC_P p_type="default">{likeCount}</S.PC_P>
              </S.PC_Modal>
              <S.PC_Modal m_type="bot" onClick={cardOnclick}>
                <S.PC_Img i_type="author" src={proFileImg} />
                <S.PC_ModalBox mb_type="b_author">{author}</S.PC_ModalBox>
              </S.PC_Modal>
            </S.PC_Modal>
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
            <S.PC_AuthorBox ab_type="top">
              <S.PC_ImgBox img_box="author">
                <Heart
                  width="30"
                  height="30"
                  fill={like ? '#d7443e' : 'black'}
                  onClick={() => {
                    authorLike(imgUserIdx, imgUserIdx);
                  }}
                />
              </S.PC_ImgBox>
            </S.PC_AuthorBox>
            <S.PC_AuthorBox ab_type="mid">
              <S.PC_AuthorInfo ai_type="name">{author}</S.PC_AuthorInfo>
              <S.PC_AuthorInfo ai_type="photos">
                보유사진: {authorPhotos}장
              </S.PC_AuthorInfo>
            </S.PC_AuthorBox>
            <S.PC_AuthorBox ab_type="bot">
              <S.PC_AuthorInfo ai_type="img">
                <S.PC_Img i_type="a_photos" src={authorFimg} />
                <S.PC_Img i_type="a_photos" src={authorSimg} />
                <S.PC_Img i_type="a_photos" src={authorTimg} />
                <S.PC_Img i_type="a_photos" src={authorHimg} />
              </S.PC_AuthorInfo>
            </S.PC_AuthorBox>
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
            <S.PC_ImgBox img_box="like">
              <Heart
                width="30"
                height="30"
                fill={like ? '#d7443e' : 'black'}
                onClick={() => {
                  imgLike(imgUserIdx, gallId);
                }}
              />
            </S.PC_ImgBox>
            <S.PC_Img i_type="like" src={likeImg} />
          </S.PC_Box>
        </S.PC_Wrap>
      )}
      {CardType === 'type04' && (
        <S.PC_Wrap w_type="t_4" onClick={cardOnclick}>
          <S.PC_CategoryBox c_type="img">
            <S.PC_Img i_type="category" src={imgSrc} />
          </S.PC_CategoryBox>
          <S.PC_Modal m_type="default">
            <S.PC_CategoryBox c_type="info">
              <S.PC_P p_type="category">{imgCategory}</S.PC_P>
              <S.PC_P p_type="default">&nbsp;이미지</S.PC_P>
            </S.PC_CategoryBox>
          </S.PC_Modal>
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
            <S.PC_Deny>승인 불가 사유 보기 / 수정 하기</S.PC_Deny>
          </S.PC_Box>
        </S.PC_Wrap>
      )}
      {CardType === 'type07' && (
        <S.PC_Wrap w_type="t_5" onClick={cardOnclick}>
          <S.PC_Box box="like">
            <S.PC_Img i_type="like" src={likeImg} />
          </S.PC_Box>
        </S.PC_Wrap>
      )}
    </S.PC_Container>
  );
};
