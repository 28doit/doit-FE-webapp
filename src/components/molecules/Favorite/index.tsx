import React, { useEffect, useState } from 'react';
import * as S from './style';
import { CardItem, ModalLoadingItem } from '../../index';
import {
  expired_check,
  get_favorite,
} from '../../../redux/services/auth.service';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import { Nlogout } from '../../../redux/actions/auth';
import { useAppThunkDispatch } from '../../../redux/store';
import { useSelector } from 'react-redux';
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
                likeImg={info.src}
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
  const { user: currentUser } = useSelector((state) => state.auth);
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
            alert('시간이 만료되었습니다. 다시 로그인 해주세요');
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
            '잠시 오류가 발생하였습니다. 잠시 후 다시 시도해주시기 바랍니다.',
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
    get_favorite().then((response) => {
      response.data.map((info: any) => {
        setImgItem(info.img);
        setAuthItem(info.auth);
      });
    });
  }, []);

  const onFavoriteHandler = () => {
    get_favorite().then((response) => {
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
        {Loading ? <ModalLoadingItem /> : ''}
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
              {favImg ? favoriteImg(imgItem) : favoriteAuthor(authItem)}
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
