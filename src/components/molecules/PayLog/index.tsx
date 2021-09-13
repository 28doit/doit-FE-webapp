import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import * as S from './style';
import moment from 'moment';
import 'moment/locale/ko';
import axios from 'axios';

export interface PayLogProps {}

export const PayLogItem = ({}: PayLogProps): React.ReactElement => {
  const [startDate, setStartDate] = useState(
    new Date(moment().subtract('1', 'M').format('YYYY/MM/DD')),
  );
  const [endDate, setEndDate] = useState(
    new Date(moment().format('YYYY/MM/DD')),
  );

  const onBtnHandler = (e: any) => {
    console.log(startDate.toLocaleString('fr-CA').substr(0, 10));
    console.log(endDate.toLocaleString('fr-CA').substr(0, 10));

    axios.get(`${process.env.REACT_APP_TEST}/paylog`).then((response) => {
      console.log(response);
    });
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
        </S.PayDateBox>
        <S.PayDateBox>
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
      <S.PayLogModal></S.PayLogModal>
    </S.PayLogContatiner>
  );
};
