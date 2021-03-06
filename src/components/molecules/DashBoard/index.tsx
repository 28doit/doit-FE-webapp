import React, { useEffect, useState } from 'react';
import * as S from './style';
import { CardItem, ModalLoadingItem } from '../../index';
import { expired_check, get_dash } from '../../../redux/services/auth.service';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useAppThunkDispatch } from '../../../redux/store';
import { Nlogout } from '../../../redux/actions/auth';
import ROUTES from '../../../commons/routes';

export interface DashBoardItemProps {}

export const DashBoardItem = (): React.ReactElement => {
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
    profile: '',
    nickName: '',
    photoIng: [],
    subUser: [],
    totalSale: 0,
    totalMoney: 0,
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
              ['profile']: userData.ProfileImageLocation,
              ['nickName']: userData.NickName,
              ['photoIng']: userData.PhotosForSale,
              ['subUser']: userData.SubScribeUser,
              ['totalSale']: userData.totalSales,
              ['totalMoney']: userData.CumulativeSales,
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
              {data && (
                <S.PC_TopMid key="PC_TopMid">
                  <S.PC_Box where="top">
                    <S.PC_Img src={data.profile} />
                    <S.PC_Nickname>{data.nickName}</S.PC_Nickname>
                  </S.PC_Box>
                  <S.PC_Box where="mid">
                    <S.PC_Info>
                      <S.PC_P p_type="main">누적 판매 수</S.PC_P>
                      <S.PC_P p_type="sub">{data.totalSale} 개</S.PC_P>
                    </S.PC_Info>
                    <S.PC_Info>
                      <S.PC_P p_type="main">누적 매출</S.PC_P>
                      <S.PC_P p_type="sub">{data.totalMoney} 원</S.PC_P>
                    </S.PC_Info>
                    <S.PC_Info>
                      <S.PC_P p_type="main">판매중 콘텐츠</S.PC_P>
                      <S.PC_P p_type="sub">{data.photoIng.length} 개</S.PC_P>
                    </S.PC_Info>
                    <S.PC_Info>
                      <S.PC_P p_type="main">팬 수</S.PC_P>
                      <S.PC_P p_type="sub">{data.subUser.length} 명</S.PC_P>
                    </S.PC_Info>
                  </S.PC_Box>
                </S.PC_TopMid>
              )}
              <S.PC_Box where="bot">
                <S.PC_Ul>
                  {data &&
                    data.photoIng.map((info: any) => (
                      <S.PC_Li key={info.galleryId}>
                        <CardItem
                          CardType="type07"
                          likeImg={info.galleryImageLocation}
                          cardOnclick={() => {
                            console.log('hi');
                          }}
                        />
                      </S.PC_Li>
                    ))}
                </S.PC_Ul>
              </S.PC_Box>
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
