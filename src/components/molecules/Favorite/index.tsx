import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Card } from '../../index';
import { get_favorite } from '../../../redux/services/auth.service';

export interface FavoriteProps {}

export const FavoriteImg = (some: any) => {
  return (
    <S.MyFBox>
      <S.MyFUl>
        {some &&
          some.map((info: any) => (
            <S.MyFLi key={info.img_id}>
              <Card
                CardType="type03"
                imgWidth="330px"
                imgHeight="200px"
                isSubscribe={info.subscribe}
                likeImg={info.src}
              />
            </S.MyFLi>
          ))}
      </S.MyFUl>
    </S.MyFBox>
  );
};

export const FavoriteAuthor = (some: any) => {
  return (
    <S.MyFBox>
      <S.MyFUl>
        {some &&
          some.map((info: any) => (
            <S.MyFLi key={info.author}>
              <Card
                CardType="type02"
                imgWidth="330px"
                imgHeight="330px"
                isSubscribe={info.subscribe}
                author={info.author}
                authorPhotos={info.photos}
                authorFimg={info.fimg}
                authorSimg={info.simg}
                authorTimg={info.timg}
                authorHimg={info.himg}
              />
            </S.MyFLi>
          ))}
      </S.MyFUl>
    </S.MyFBox>
  );
};

export const FavoriteItem = ({}: FavoriteProps): React.ReactElement => {
  const [imgItem, setImgItem] = useState([]);
  const [authItem, setAuthItem] = useState([]);
  const [favImg, setFavImg] = useState(true);

  useEffect(() => {
    get_favorite().then((response) => {
      console.log(response.data);
      response.data.map((info: any) => {
        setImgItem(info.img);
        setAuthItem(info.auth);
      });
    });
  }, []);

  const onFavoriteHandler = () => {
    get_favorite().then((response) => {
      console.log(response.data);
      response.data.map((info: any) => {
        setImgItem(info.img);
        setAuthItem(info.auth);
      });
    });
    setFavImg(!favImg);
  };

  return (
    <S.MyFContainer>
      <S.MyFTitle>좋아요</S.MyFTitle>
      <S.MyFBtnBox>
        {favImg ? (
          <>
            <S.MyFImgBtnYes btnOnClick={onFavoriteHandler}>
              좋아하는 이미지
            </S.MyFImgBtnYes>
            <S.MyFAuthorBtnNo btnOnClick={onFavoriteHandler}>
              좋아하는 작가
            </S.MyFAuthorBtnNo>
          </>
        ) : (
          <>
            <S.MyFImgBtnNo btnOnClick={onFavoriteHandler}>
              좋아하는 이미지
            </S.MyFImgBtnNo>
            <S.MyFAuthorBtnYes btnOnClick={onFavoriteHandler}>
              좋아하는 작가
            </S.MyFAuthorBtnYes>
          </>
        )}
      </S.MyFBtnBox>
      {favImg ? FavoriteImg(imgItem) : FavoriteAuthor(authItem)}
    </S.MyFContainer>
  );
};
