import { useEffect, useState } from 'react';
import * as S from './style';
import {
  get_profit,
  post_profit_bank,
} from '../../../redux/services/auth.service';

export const ProfitToBank = (some: any) => {
  return (
    <S.ExListBox>
      <S.ExListUl>
        {some &&
          some.map((info: any) => (
            <S.ExListLi key={info.id}>
              <S.ExLiDate>{info.date}</S.ExLiDate>
              <S.ExLiBank>{info.bank}</S.ExLiBank>
              <S.ExLiMoney>{info.money}</S.ExLiMoney>
              <S.ExLiStatus>{info.status}</S.ExLiStatus>
            </S.ExListLi>
          ))}
      </S.ExListUl>
    </S.ExListBox>
  );
};

export interface ExchangeItemProps {}

export const ExchangeItem = ({}: ExchangeItemProps): React.ReactElement => {
  const [item, setitem] = useState([]);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    get_profit().then((response) => {
      console.log(response.data);
      setitem(response.data);
    });
  }, []);

  const onChangeMoney = (e: any) => {
    setMoney(e.currentTarget.value);
  };

  const onSubmitHandler = (e: any) => {
    // 소지 금액보다 입력 금액이 클 경우
    if (Number(money) < 5000 || Number(money) % 500 !== 0) {
      alert('환전은 5000원 이상, 500원 단위로 신청해주시기 바랍니다.');
    } else {
      post_profit_bank().then((response) => {
        console.log(response);
      });
    }
  };

  return (
    <S.ExContainer>
      <S.ExTitle>출금</S.ExTitle>
      <S.ExChangeBox>
        <S.ExInput value={money} onChange={onChangeMoney} />
        <S.ExChangeBtn btnOnClick={onSubmitHandler}>신청</S.ExChangeBtn>
      </S.ExChangeBox>
      <S.ExInfoBox>
        <S.ExLiDate>신청일</S.ExLiDate>
        <S.ExLiBank>은행</S.ExLiBank>
        <S.ExLiMoney>금액</S.ExLiMoney>
        <S.ExLiStatus>상태</S.ExLiStatus>
      </S.ExInfoBox>
      {ProfitToBank(item)}
    </S.ExContainer>
  );
};
