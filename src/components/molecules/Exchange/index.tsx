import { useState } from 'react';
import * as S from './style';
import {
  get_profit,
  post_profit_bank,
  post_profit_point,
} from '../../../redux/services/auth.service';

export const ProfitToBank = (some: any) => {
  return (
    <S.ExListBox>
      <S.ExListUl></S.ExListUl>
    </S.ExListBox>
  );
};

export const ProfitToPoint = (some: any) => {
  return (
    <S.ExListBox>
      <S.ExListUl></S.ExListUl>
    </S.ExListBox>
  );
};

export interface ExchangeItemProps {}

export const ExchangeItem = ({}: ExchangeItemProps): React.ReactElement => {
  const [bankItem, setBankItem] = useState([]);
  const [pointItem, setPointItem] = useState([]);
  const [favBank, setFavBank] = useState(true);
  const [money, setMoney] = useState(0);

  const onProfitHandler = () => {
    get_profit().then((response) => {
      console.log(response.data);
    });
    setFavBank(!favBank);
  };

  const onChangeMoney = (e: any) => {
    setMoney(e.currentTarget.value);
  };

  const onSubmitHandler = (e: any) => {
    // 소지 금액보다 입력 금액이 클 경우
    if (Number(money) < 5000 || Number(money) % 500 !== 0) {
      alert('환전은 5000원 이상, 500원 단위로 신청해주시기 바랍니다.');
    }

    if (favBank) {
      post_profit_bank().then((response) => {
        console.log(response);
      });
    } else {
      post_profit_point().then((response) => {
        console.log(response);
      });
    }
  };

  return (
    <S.ExContainer>
      <S.ExTitle>출금 및 전환</S.ExTitle>
      <S.ExBtnBox>
        {favBank ? (
          <>
            <S.ExProToBankYes btnOnClick={onProfitHandler}>
              계좌로 환전
            </S.ExProToBankYes>
            <S.ExProToPoNo btnOnClick={onProfitHandler}>
              포인트 환전
            </S.ExProToPoNo>
          </>
        ) : (
          <>
            <S.ExProToBankNo btnOnClick={onProfitHandler}>
              계좌로 환전
            </S.ExProToBankNo>
            <S.ExProToPoYes btnOnClick={onProfitHandler}>
              포인트 환전
            </S.ExProToPoYes>
          </>
        )}
      </S.ExBtnBox>
      <S.ExChangeBox>
        <S.ExInput value={money} onChange={onChangeMoney} />
        <S.ExChangeBtn btnOnClick={onSubmitHandler}>신청</S.ExChangeBtn>
      </S.ExChangeBox>
      {favBank ? ProfitToBank(bankItem) : ProfitToPoint(pointItem)}
    </S.ExContainer>
  );
};
