import moment from 'moment';
import React, { useState } from 'react';
import { ko } from 'date-fns/esm/locale';
import 'moment/locale/ko';
import * as S from './style';
import 'react-datepicker/dist/react-datepicker.css';
import { get_purchase } from '../../../redux/services/auth.service';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

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
    <S.PC_Li key={gallId} v="info">
      <S.PC_Preview src={preview} />
      <S.PC_Info li_type="extension">{extension}</S.PC_Info>
      <S.PC_Info li_type="when">{when}</S.PC_Info>
      <S.PC_Info li_type="author">{author}</S.PC_Info>
    </S.PC_Li>
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
              <S.PC_Title>구매한 이미지</S.PC_Title>
              <S.PC_DateContainer>
                <S.PC_DateBox>
                  <S.PC_DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    locale={ko}
                    dateFormat="yyyy년 MM월 dd일"
                  />
                  <S.PC_DatePicker
                    selected={endDate}
                    onChange={(date: any) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    locale={ko}
                    dateFormat="yyyy년 MM월 dd일"
                  />
                </S.PC_DateBox>
                <S.PC_DateBox>
                  <S.PC_Btn btnOnClick={onBtnHandler}>조회 하기</S.PC_Btn>
                </S.PC_DateBox>
              </S.PC_DateContainer>
              <S.PC_Modal>
                <S.PC_Ul>
                  <S.PC_Li key={1} v="default">
                    <S.PC_Info li_type="preview">사진</S.PC_Info>
                    <S.PC_Info li_type="extension">확장자</S.PC_Info>
                    <S.PC_Info li_type="when">시간</S.PC_Info>
                    <S.PC_Info li_type="author">작가</S.PC_Info>
                  </S.PC_Li>
                </S.PC_Ul>
                <S.PC_Ul>
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
                </S.PC_Ul>
              </S.PC_Modal>
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
