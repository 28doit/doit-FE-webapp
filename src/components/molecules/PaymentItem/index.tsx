import * as S from './style';
import React, { useEffect, useState } from 'react';
import { ModalLoading } from '../../index';
import {
  expired_check,
  send_payment,
} from '../../../redux/services/auth.service';
import ROUTES from '../../../commons/routes';
import { useSelector } from 'react-redux';
import { useAppThunkDispatch } from '../../../redux/store';
import { Nlogout } from '../../../redux/actions/auth';

export interface PaymentProps {}

export const PaymentItem = ({}: PaymentProps): React.ReactElement => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    sex: 1,
    phone: '',
    month: '',
    year: '',
    day: '',
    name: '',
  });
  const dispatch = useAppThunkDispatch();

  useEffect(() => {
    const getUser = async () => {
      await expired_check(currentUser.token, currentUser.name)
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
            });
          }
        })
        .catch(() => {
          alert(
            '잠시 오류가 발생하였습니다. 잠시 후 다시 시도해주시기 바랍니다.',
          );
          setLoading(false);
          window.location.replace(ROUTES.MYPAGE);
        });
      setLoading(false);
    };
    setLoading(true);
    currentUser ? getUser() : window.location.replace(ROUTES.LOGIN);
  }, []);

  const [service, setService] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false,
    ninth: false,
  });
  const [money, setMoney] = useState(0);

  const { first, second, third, fourth, fifth, sixth, seventh, eighth, ninth } =
    service;

  const { email, name, sex, year, month, day, phone } = data;

  const onServiceCheckHandler = (e: any) => {
    setService({
      ...service,
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false,
      eighth: false,
      ninth: false,
      [e.currentTarget.id]: true,
    });
    setMoney(parseInt(e.currentTarget.classList[2]));
    console.log(currentUser);
  };

  const onClickPayment = () => {
    const { IMP }: any = window;
    IMP.init('imp89552474');

    const data = {
      pg: 'html5_inicis', // PG사
      pay_method: 'card', // 결제수단
      name: '아임포트 결제 데이터 분석', // 주문명
      buyer_name: name, // 구매자 이름
      buyer_tel: phone, // 구매자 전화번호
      buyer_email: email, // 구매자 이메일
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: money, // 결제금액
    };
    IMP.request_pay(data, payCallBack);
  };

  const payCallBack = (response: any) => {
    const {
      success,
      error_msg,
      merchant_uid,
      buyer_name,
      buyer_email,
      paid_amount,
      imp_uid,
    } = response;

    if (success) {
      console.log(response);
      send_payment(
        merchant_uid,
        buyer_name,
        buyer_email,
        paid_amount,
        imp_uid,
        currentUser.token,
        currentUser.name,
      ).then(() => {
        alert('결제 성공');
        window.location.reload();
      });
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  return (
    <>
      {Loading ? <ModalLoading /> : ''}
      <S.PaymentContainer>
        <S.PaymentBox>
          <S.PaymentTitle>결제하실 상품을 선택해주세요</S.PaymentTitle>
          <S.PaymentTextBox>
            <S.TextxBoxP>상품 선택</S.TextxBoxP>
            <S.TextxBoxP>*부가세 10% 별도</S.TextxBoxP>
          </S.PaymentTextBox>
          <S.ServiceBox>
            <S.ServiceSelect
              id="first"
              className="1100"
              onClick={onServiceCheckHandler}
            >
              {first ? (
                <S.ServiceYes></S.ServiceYes>
              ) : (
                <S.ServiceNo></S.ServiceNo>
              )}
              <S.TextxBoxP>\1,000 결제</S.TextxBoxP>
              <S.TextxBoxP>\1,000 충전</S.TextxBoxP>
            </S.ServiceSelect>
            <S.ServiceSelect
              id="second"
              className="3300"
              onClick={onServiceCheckHandler}
            >
              {second ? (
                <S.ServiceYes></S.ServiceYes>
              ) : (
                <S.ServiceNo></S.ServiceNo>
              )}
              <S.TextxBoxP>\3,000 결제</S.TextxBoxP>
              <S.TextxBoxP>\3,000 충전</S.TextxBoxP>
            </S.ServiceSelect>
            <S.ServiceSelect
              id="third"
              className="5500"
              onClick={onServiceCheckHandler}
            >
              {third ? (
                <S.ServiceYes></S.ServiceYes>
              ) : (
                <S.ServiceNo></S.ServiceNo>
              )}
              <S.TextxBoxP>\5,000 결제</S.TextxBoxP>
              <S.TextxBoxP>\5,000 충전</S.TextxBoxP>
            </S.ServiceSelect>
            <S.ServiceSelect
              id="fourth"
              className="11000"
              onClick={onServiceCheckHandler}
            >
              {fourth ? (
                <S.ServiceYes></S.ServiceYes>
              ) : (
                <S.ServiceNo></S.ServiceNo>
              )}
              <S.TextxBoxP>\10,000 결제</S.TextxBoxP>
              <S.TextxBoxP>\11,000 충전</S.TextxBoxP>
            </S.ServiceSelect>
            <S.ServiceSelect
              id="fifth"
              className="33000"
              onClick={onServiceCheckHandler}
            >
              {fifth ? (
                <S.ServiceYes></S.ServiceYes>
              ) : (
                <S.ServiceNo></S.ServiceNo>
              )}
              <S.TextxBoxP>\30,000 결제</S.TextxBoxP>
              <S.TextxBoxP>\35,000 충전</S.TextxBoxP>
            </S.ServiceSelect>
            <S.ServiceSelect
              id="sixth"
              className="55000"
              onClick={onServiceCheckHandler}
            >
              {sixth ? (
                <S.ServiceYes></S.ServiceYes>
              ) : (
                <S.ServiceNo></S.ServiceNo>
              )}
              <S.TextxBoxP>\50,000 결제</S.TextxBoxP>
              <S.TextxBoxP>\60,000 충전</S.TextxBoxP>
            </S.ServiceSelect>
            <S.ServiceSelect
              id="seventh"
              className="110000"
              onClick={onServiceCheckHandler}
            >
              {seventh ? (
                <S.ServiceYes></S.ServiceYes>
              ) : (
                <S.ServiceNo></S.ServiceNo>
              )}
              <S.TextxBoxP>\100,000 결제</S.TextxBoxP>
              <S.TextxBoxP>\120,000 충전</S.TextxBoxP>
            </S.ServiceSelect>
            <S.ServiceSelect
              id="eighth"
              className="330000"
              onClick={onServiceCheckHandler}
            >
              {eighth ? (
                <S.ServiceYes></S.ServiceYes>
              ) : (
                <S.ServiceNo></S.ServiceNo>
              )}
              <S.TextxBoxP>\300,000 결제</S.TextxBoxP>
              <S.TextxBoxP>\360,000 충전</S.TextxBoxP>
            </S.ServiceSelect>
            <S.ServiceSelect
              id="ninth"
              className="550000"
              onClick={onServiceCheckHandler}
            >
              {ninth ? (
                <S.ServiceYes></S.ServiceYes>
              ) : (
                <S.ServiceNo></S.ServiceNo>
              )}
              <S.TextxBoxP>\500,000 결제</S.TextxBoxP>
              <S.TextxBoxP>\600,000 충전</S.TextxBoxP>
            </S.ServiceSelect>
          </S.ServiceBox>
          <S.Pay btnOnClick={onClickPayment}>결제하기</S.Pay>
        </S.PaymentBox>
      </S.PaymentContainer>
    </>
  );
};
