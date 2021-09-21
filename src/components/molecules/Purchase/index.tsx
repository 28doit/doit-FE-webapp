import moment from 'moment';
import React, { useState } from 'react';
import { ko } from 'date-fns/esm/locale';
import 'moment/locale/ko';
import * as S from './style';
import 'react-datepicker/dist/react-datepicker.css';
import { get_purchase } from '../../../redux/services/auth.service';

export interface PurchaseProps {}

interface PurchaseCardProps {
  preview?: string;
  extension?: string;
  when?: string;
  author?: string;
  gallId?: number;
}

const PurchaseCard = ({
  preview,
  extension,
  when,
  author,
  gallId,
  ...props
}: PurchaseCardProps) => {
  return (
    <S.PurchaseLi key={gallId}>
      <S.PurchasePreview src={preview} />
      <S.PurchaseExtension>{extension}</S.PurchaseExtension>
      <S.PurchaseWhen>{when}</S.PurchaseWhen>
      <S.PurchaseAuthor>{author}</S.PurchaseAuthor>
    </S.PurchaseLi>
  );
};

export const PurchaseItem = ({}: PurchaseProps): React.ReactElement => {
  const [startDate, setStartDate] = useState(
    new Date(moment().subtract('1', 'M').format('YYYY/MM/DD')),
  );
  const [endDate, setEndDate] = useState(
    new Date(moment().format('YYYY/MM/DD')),
  );
  const [item, setItem] = useState([]);

  const addDaysToDate = (date: any) => {
    var res = new Date(date);
    res.setDate(res.getDate() + 1);
    return res;
  };

  const onBtnHandler = (e: any) => {
    if (
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) >
      31
    ) {
      alert('조회할 수 있는 기간은 31일 이내 입니다.');
    } else {
      console.log(startDate.toLocaleString('fr-CA').substr(0, 10)); // 나중에 통신 시 사용 할 주소 요소
      console.log(addDaysToDate(endDate).toLocaleString('fr-CA').substr(0, 10));

      get_purchase(
        startDate.toLocaleString('fr-CA').substr(0, 10),
        endDate.toLocaleString('fr-CA').substr(0, 10),
      ).then((response) => {
        console.log(response);
        setItem(response.data);
      });
    }
  };

  return (
    <S.PurchaseContainer>
      <S.PurchaseTitle>구매한 이미지</S.PurchaseTitle>
      <S.PurchaseDateContainer>
        <S.PurchaseDateBox>
          <S.PurchaseDatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
          />
          <S.PurchaseDatePicker
            selected={endDate}
            onChange={(date: any) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
          />
        </S.PurchaseDateBox>
        <S.PurchaseDateBox>
          <S.PurchaseBtn btnOnClick={onBtnHandler}>조회 하기</S.PurchaseBtn>
        </S.PurchaseDateBox>
      </S.PurchaseDateContainer>
      <S.PurchaseModal>
        <S.PurchaseTxtBox>
          <S.PurchaseTxt>이미지</S.PurchaseTxt>
          <S.PurchaseTxt>확장자</S.PurchaseTxt>
          <S.PurchaseTxt>날짜</S.PurchaseTxt>
          <S.PurchaseTxt>작가</S.PurchaseTxt>
        </S.PurchaseTxtBox>
        <S.PurchaseUl>
          {item &&
            item.map((info: any) =>
              PurchaseCard({
                gallId: info.gall_id,
                extension: info.type,
                when: info.time,
                author: info.author,
                preview: info.src,
              }),
            )}
        </S.PurchaseUl>
      </S.PurchaseModal>
    </S.PurchaseContainer>
  );
};
