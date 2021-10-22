import { useEffect, useState } from 'react';
import * as S from './style';
import {
  get_profit,
  post_profit_bank,
} from '../../../redux/services/auth.service';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

const profitToBank = (some: any) => {
  return (
    <S.PC_Box box="list">
      <S.PC_Ul>
        <S.PC_Li key={1}>
          <S.PC_Info li_type="date">신청일</S.PC_Info>
          <S.PC_Info li_type="bank">은행</S.PC_Info>
          <S.PC_Info li_type="money">금액</S.PC_Info>
          <S.PC_Info li_type="status">상태</S.PC_Info>
        </S.PC_Li>
        {some &&
          some.map((info: any) => (
            <S.PC_Li key={info.id}>
              <S.PC_Info li_type="date">{info.date}</S.PC_Info>
              <S.PC_Info li_type="bank">{info.bank}</S.PC_Info>
              <S.PC_Info li_type="money">{info.money}</S.PC_Info>
              <S.PC_Info li_type="status">{info.status}</S.PC_Info>
            </S.PC_Li>
          ))}
      </S.PC_Ul>
    </S.PC_Box>
  );
};

export interface ExchangeItemProps {}

export const ExchangeItem = ({}: ExchangeItemProps): React.ReactElement => {
  const [item, setitem] = useState([]);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    get_profit().then((response) => {
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
      post_profit_bank().then((response) => {});
    }
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
              <S.PC_Title>출금 신청</S.PC_Title>
              <S.PC_Box box="change">
                <S.PC_Input value={money} onChange={onChangeMoney} />
                <S.PC_Btn btnOnClick={onSubmitHandler}>신청</S.PC_Btn>
              </S.PC_Box>
              {profitToBank(item)}
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
