import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Card } from '../../index';
import { get_favorite } from '../../../redux/services/auth.service';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface FavoriteProps {}

export const FavoriteImg = (some: any) => {
  return (
    <S.PC_Box box="info">
      <S.PC_Ul>
        {some &&
          some.map((info: any) => (
            <S.PC_Li key={info.img_id}>
              <Card
                CardType="type03"
                imgWidth="330px"
                imgHeight="200px"
                isSubscribe={info.subscribe}
                likeImg={info.src}
              />
            </S.PC_Li>
          ))}
      </S.PC_Ul>
    </S.PC_Box>
  );
};

export const FavoriteAuthor = (some: any) => {
  return (
    <S.PC_Box box="info">
      <S.PC_Ul>
        {some &&
          some.map((info: any) => (
            <S.PC_Li key={info.author}>
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
            </S.PC_Li>
          ))}
      </S.PC_Ul>
    </S.PC_Box>
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
    <>
      <Mobile>
        <div>모바일</div>
      </Mobile>
      <Tablet>
        <div>태블릿</div>
      </Tablet>
      <PC>
        <S.PC_Overlay>
          <S.PC_Inner>
            <S.PC_Container>
              <S.PC_Title>좋아요</S.PC_Title>
              <S.PC_Box box="btn">
                {favImg ? (
                  <>
                    <S.PC_Btn b_type="imgy" btnOnClick={onFavoriteHandler}>
                      좋아하는 이미지
                    </S.PC_Btn>
                    <S.PC_Btn b_type="authn" btnOnClick={onFavoriteHandler}>
                      좋아하는 작가
                    </S.PC_Btn>
                  </>
                ) : (
                  <>
                    <S.PC_Btn b_type="imgn" btnOnClick={onFavoriteHandler}>
                      좋아하는 이미지
                    </S.PC_Btn>
                    <S.PC_Btn b_type="authy" btnOnClick={onFavoriteHandler}>
                      좋아하는 작가
                    </S.PC_Btn>
                  </>
                )}
              </S.PC_Box>
              {favImg ? FavoriteImg(imgItem) : FavoriteAuthor(authItem)}
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
