import React, { useEffect, useState } from 'react';
import * as S from './style';
import { CardItem, ModalLoadingItem } from '../../index';
import {
  expired_check,
  get_favorite_img,
  get_favorite_auth,
} from '../../../redux/services/auth.service';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import { Nlogout } from '../../../redux/actions/auth';
import { useAppThunkDispatch } from '../../../redux/store';
import { RootStateOrAny, useSelector } from 'react-redux';
import ROUTES from '../../../commons/routes';

export interface FavoriteItemProps {}

const favoriteImg = (some: any) => {
  return (
    <S.PC_Box box="info">
      <S.PC_Ul>
        {some &&
          some.map((info: any) => (
            <S.PC_Li key={info.img_id}>
              <CardItem
                CardType="type03"
                isSubscribe={info.subscribe}
                likeImg={info.gallery.galleryImageLocation}
              />
            </S.PC_Li>
          ))}
      </S.PC_Ul>
    </S.PC_Box>
  );
};

const favoriteAuthor = (some: any) => {
  return (
    <S.PC_Box box="info">
      <S.PC_Ul>
        {some &&
          some.map((info: any) => (
            <S.PC_Li key={info.author}>
              <CardItem
                CardType="type02"
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

export const FavoriteItem = ({}: FavoriteItemProps): React.ReactElement => {
  const { user: currentUser } = useSelector(
    (state: RootStateOrAny) => state.auth,
  );
  const dispatch = useAppThunkDispatch();
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    sex: 1,
    phone: '',
    month: '',
    year: '',
    day: '',
    name: '',
  });

  useEffect(() => {
    const getUser = async () => {
      await expired_check(currentUser.token, currentUser.email)
        .then((response) => {
          console.log(response.data);
          if (response.data.Token === false) {
            alert('????????? ?????????????????????. ?????? ????????? ????????????');
            dispatch(Nlogout());
            window.location.replace(ROUTES.LOGIN);
          } else {
            const userData = response.data;
            setData({
              ...data,
              ['email']: userData.Email,
              ['name']: userData.Name,
              ['sex']: userData.sex,
              ['year']: userData.Year,
              ['month']: userData.Month,
              ['day']: userData.Day,
              ['phone']: userData.PhoneNumber,
            });
          }
        })
        .catch(() => {
          alert(
            '?????? ????????? ?????????????????????. ?????? ??? ?????? ?????????????????? ????????????.',
          );
          setLoading(false);
          window.location.replace(ROUTES.MYDASH);
        });
      setLoading(false);
    };
    setLoading(true);
    currentUser ? getUser() : window.location.replace(ROUTES.LOGIN);
  }, []);
  const [imgItem, setImgItem] = useState([]);
  const [authItem, setAuthItem] = useState([]);
  const [favImg, setFavImg] = useState(true);

  useEffect(() => {
    get_favorite_img(2006).then((response) => {
      console.log(response);
      setImgItem(response.data);
    });
    get_favorite_auth(2006).then((response) => {
      console.log(response);
    });
  }, []);

  const onFavoriteHandler = () => {
    get_favorite_img(2006).then((response) => {
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
        <div>?????????</div>
      </Mobile>
      <Tablet>
        <div>?????????</div>
      </Tablet>
      <PC>
        <S.PC_Overlay>
          <S.PC_Inner>
            <S.PC_Container>
              <S.PC_Title>?????????</S.PC_Title>
              <S.PC_Box box="btn">
                {favImg ? (
                  <>
                    <S.PC_Btn b_type="imgy" btnOnClick={onFavoriteHandler}>
                      ???????????? ?????????
                    </S.PC_Btn>
                    <S.PC_Btn b_type="authn" btnOnClick={onFavoriteHandler}>
                      ???????????? ??????
                    </S.PC_Btn>
                  </>
                ) : (
                  <>
                    <S.PC_Btn b_type="imgn" btnOnClick={onFavoriteHandler}>
                      ???????????? ?????????
                    </S.PC_Btn>
                    <S.PC_Btn b_type="authy" btnOnClick={onFavoriteHandler}>
                      ???????????? ??????
                    </S.PC_Btn>
                  </>
                )}
              </S.PC_Box>
              {favImg ? favoriteImg(imgItem) : favoriteAuthor(authItem)}
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
