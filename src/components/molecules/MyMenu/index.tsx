import React, { useEffect, useState } from 'react';
import * as S from './style';
import ROUTES from '../../../commons/routes';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import { RootStateOrAny, useSelector } from 'react-redux';
import { expired_check } from '../../../redux/services/auth.service';

export interface MyMenuItemProps {}

export const MyMenuItem = ({}: MyMenuItemProps): React.ReactElement => {
  const { user: currentUser } = useSelector(
    (state: RootStateOrAny) => state.auth,
  );
  const [data, setData] = useState({
    email: '',
    sex: 1,
    phone: '',
    month: '',
    year: '',
    day: '',
    name: '',
    profit: '',
    total: '',
  });
  useEffect(() => {
    const getUser = async () => {
      await expired_check(currentUser.token, currentUser.email)
        .then((response) => {
          if (response.data.Token === false) {
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
              ['profit']: userData.Point.profitPoint,
              ['total']: userData.Point.totalPoint,
            });
          }
        })
        .catch(() => {});
    };
    getUser();
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
        <S.PC_Container>
          <S.PC_Box>
            <S.PC_Title>게스트 님</S.PC_Title>
            <S.PC_SmallBox>
              <S.PC_SmallDiv>
                <S.PC_SmallText>보유 포인트</S.PC_SmallText>
                <S.PC_SmallText>{data.total}</S.PC_SmallText>
              </S.PC_SmallDiv>
              <S.PC_SmallDiv>
                <S.PC_SmallText>판매 수익금</S.PC_SmallText>
                <S.PC_SmallText>{data.profit}</S.PC_SmallText>
              </S.PC_SmallDiv>
            </S.PC_SmallBox>
            <S.PC_Btn btnLink={ROUTES.MYEDIT} btntype="default">
              내 정보 관리
            </S.PC_Btn>
          </S.PC_Box>
          <S.PC_Box>
            <S.PC_Title>일반 회원</S.PC_Title>
            <S.PC_Btn btnLink={ROUTES.MYCART} btntype="default">
              장바구니
            </S.PC_Btn>
            <S.PC_Btn btnLink={ROUTES.MYPURCHASE} btntype="default">
              구매한 이미지
            </S.PC_Btn>
            <S.PC_Btn btnLink={ROUTES.MYFAVORITE} btntype="default">
              구독한 이미지 / 작가
            </S.PC_Btn>
            <S.PC_Btn btnLink={ROUTES.MYPAYMENT} btntype="default">
              결제 내역
            </S.PC_Btn>
            <S.PC_Btn btnLink={ROUTES.NEWPAYMENT} btntype="default">
              포인트 충전하기
            </S.PC_Btn>
          </S.PC_Box>
          <S.PC_Box>
            <S.PC_Title>판매자</S.PC_Title>
            <S.PC_Btn btnLink={ROUTES.MYDASH} btntype="default">
              판매자 대시보드
            </S.PC_Btn>
            <S.PC_Btn btnLink={ROUTES.MYIMGUPLOAD} btntype="default">
              이미지 업로드 하기
            </S.PC_Btn>
            <S.PC_Btn btnLink={ROUTES.MYUPLOADLIST} btntype="default">
              이미지 관리
            </S.PC_Btn>
            <S.PC_Btn btnLink={ROUTES.MYEXCHANGE} btntype="default">
              출금 신청
            </S.PC_Btn>
          </S.PC_Box>
        </S.PC_Container>
      </PC>
    </>
  );
};
