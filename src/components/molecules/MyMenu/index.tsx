import React from 'react';
import * as S from './style';
import ROUTES from '../../../commons/routes';

export interface MyMenuProps {}

export const MyMenu = ({}: MyMenuProps): React.ReactElement => {
  return (
    <>
      <S.MyMenuContainer>
        <S.MyMenuBox>
          <S.MyMenuTitle>게스트 님</S.MyMenuTitle>
          <S.MyMenuSmallBox>
            <S.SmallBoxDiv>
              <S.SmallBoxText>보유 포인트</S.SmallBoxText>
              <S.SmallBoxText>1000P</S.SmallBoxText>
            </S.SmallBoxDiv>
            <S.SmallBoxDiv>
              <S.SmallBoxText>판매 수익금</S.SmallBoxText>
              <S.SmallBoxText>500P</S.SmallBoxText>
            </S.SmallBoxDiv>
          </S.MyMenuSmallBox>
          <S.MyMenuBtn btnLink={ROUTES.MYEDIT} btntype="default">
            내 정보 관리
          </S.MyMenuBtn>
        </S.MyMenuBox>
        <S.MyMenuBox>
          <S.MyMenuTitle>일반 회원</S.MyMenuTitle>
          <S.MyMenuBtn btnLink={ROUTES.MYPURCHASE} btntype="default">
            구매한 이미지
          </S.MyMenuBtn>
          <S.MyMenuBtn btnLink={ROUTES.MYFAVORITE} btntype="default">
            구독한 이미지 / 작가
          </S.MyMenuBtn>
          <S.MyMenuBtn btnLink={ROUTES.MYPAYMENT} btntype="default">
            결제 내역
          </S.MyMenuBtn>
          <S.MyMenuBtn btnLink={ROUTES.NEWPAYMENT} btntype="default">
            포인트 충전하기
          </S.MyMenuBtn>
        </S.MyMenuBox>
        <S.MyMenuBox>
          <S.MyMenuTitle>판매자</S.MyMenuTitle>
          <S.MyMenuBtn btnLink={ROUTES.MYSELLERDASH} btntype="default">
            판매자 대시보드
          </S.MyMenuBtn>
          <S.MyMenuBtn btnLink={ROUTES.MYIMGUPLOAD} btntype="default">
            이미지 업로드 하기
          </S.MyMenuBtn>
          <S.MyMenuBtn btnLink={ROUTES.MYUPLOADLIST} btntype="default">
            이미지 관리
          </S.MyMenuBtn>
          <S.MyMenuBtn btnLink={ROUTES.MYEXCHANGE} btntype="default">
            출금 신청
          </S.MyMenuBtn>
        </S.MyMenuBox>
      </S.MyMenuContainer>
    </>
  );
};
