import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import * as S from './style';
import moment from 'moment';
import 'moment/locale/ko';
import axios from 'axios';

export interface PayLogProps {}

interface PayLogCardProps {
  c_date?: string;
  c_m_uid?: string;
  c_money?: string;
  c_status?: string;
}

const PayLogCard = ({
  c_date,
  c_m_uid,
  c_money,
  c_status,
  ...props
}: PayLogCardProps) => {
  return (
    <S.PayLogCardLI key={c_m_uid}>
      <S.PayLogPDate>{c_date}</S.PayLogPDate>
      <S.PayLogPMuid>{c_m_uid}</S.PayLogPMuid>
      <S.PayLogPMoney>{c_money}</S.PayLogPMoney>
      <S.PayLogPResult>{c_status}</S.PayLogPResult>
    </S.PayLogCardLI>
  );
};

export const PayLogItem = ({}: PayLogProps): React.ReactElement => {
  const [startDate, setStartDate] = useState(
    new Date(moment().subtract('1', 'M').format('YYYY/MM/DD')),
  );
  const [endDate, setEndDate] = useState(
    new Date(moment().add('1', 'd').format('YYYY/MM/DD')),
  );
  const [item, setItem] = useState([]);

  const onBtnHandler = (e: any) => {
    if (
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) >
      31
    ) {
      alert('조회할 수 있는 기간은 31일 이내 입니다.');
    } else {
      console.log(startDate.toLocaleString('fr-CA').substr(0, 10)); // 나중에 통신 시 사용 할 주소 요소
      console.log(endDate.toLocaleString('fr-CA').substr(0, 10));
      axios.get(`${process.env.REACT_APP_TEST}/paylog`).then((response) => {
        console.log(response);
        setItem(response.data);
      });
    }
  };

  return (
    <S.PayLogContatiner>
      <S.PayLogTitle>결제 내역</S.PayLogTitle>
      <S.PayDateContainer>
        <S.PayDateBox>
          <S.PayDatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
          />
          <S.PayDatePicker
            selected={endDate}
            onChange={(date: any) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
          />
        </S.PayDateBox>
        <S.PayDateBox>
          <S.PayLogBtn btnOnClick={onBtnHandler}>조회 하기</S.PayLogBtn>
        </S.PayDateBox>
      </S.PayDateContainer>
      <S.PayLogModal>
        {PayLogCard({
          c_date: '날짜',
          c_m_uid: '구매 번호',
          c_money: '구매 금액',
          c_status: '상태',
        })}
        <S.PayLogCardUl>
          {item &&
            item.map((info: any) =>
              PayLogCard({
                c_date: info.time,
                c_m_uid: info.mid,
                c_money: info.pay,
                c_status: info.name,
              }),
            )}
        </S.PayLogCardUl>
      </S.PayLogModal>
    </S.PayLogContatiner>
  );
};
