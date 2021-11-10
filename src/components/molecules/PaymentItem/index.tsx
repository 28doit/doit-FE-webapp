import * as S from './style';
import React, { useEffect, useState } from 'react';
import { ModalLoadingItem } from '../../index';
import {
  expired_check,
  send_payment,
} from '../../../redux/services/auth.service';
import ROUTES from '../../../commons/routes';
import { useSelector } from 'react-redux';
import { useAppThunkDispatch } from '../../../redux/store';
import { Nlogout } from '../../../redux/actions/auth';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface PaymentItemProps {}

export const PaymentItem = ({}: PaymentItemProps): React.ReactElement => {
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

  // useEffect(() => {
  //   const getUser = async () => {
  //     await expired_check(currentUser.token, currentUser.name)
  //       .then((response) => {
  //         console.log(response.data);
  //         if (response.data.Token === false) {
  //           alert('시간이 만료되었습니다. 다시 로그인 해주세요');
  //           dispatch(Nlogout());
  //           window.location.replace(ROUTES.LOGIN);
  //         } else {
  //           const userData = response.data;
  //           setData({
  //             ...data,
  //             ['email']: userData.Email,
  //             ['name']: userData.Name,
  //             ['sex']: userData.sex,ZZzzzz
  //             ['year']: userData.Year,
  //             ['month']: userData.Month,
  //             ['day']: userData.Day,
  //             ['phone']: userData.PhoneNumber,
  //           });
  //         }
  //       })
  //       .catch(() => {
  //         alert(
  //           '잠시 오류가 발생하였습니다. 잠시 후 다시 시도해주시기 바랍니다.',
  //         );
  //         setLoading(false);
  //         window.location.replace(ROUTES.MYDASH);
  //       });
  //     setLoading(false);
  //   };
  //   setLoading(true);
  //   currentUser ? getUser() : window.location.replace(ROUTES.LOGIN);
  // }, []);

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
      amount: money + money / 10, // 결제금액
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
      });
    } else {
      alert(`결제 실패: ${error_msg}`);
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
        {Loading ? <ModalLoadingItem /> : ''}
        <S.PC_Overlay>
          <S.PC_Inner>
            <S.PC_Container>
              <S.PC_Box box="default">
                <S.PC_Title>결제하실 상품을 선택해주세요</S.PC_Title>
                <S.PC_Wrap wrap="text">
                  <S.PC_P where="t_l">상품 선택</S.PC_P>
                  <S.PC_P where="t_r">*부가세 10% 별도</S.PC_P>
                </S.PC_Wrap>
                <S.PC_Box box="service">
                  <S.PC_Wrap
                    wrap="service"
                    id="first"
                    className="1000"
                    onClick={onServiceCheckHandler}
                  >
                    {first ? (
                      <S.PC_Click c_type="yes"></S.PC_Click>
                    ) : (
                      <S.PC_Click c_type="no"></S.PC_Click>
                    )}
                    <S.PC_P where="s_t">\ 1,000 결제</S.PC_P>
                    <S.PC_P where="s_b">P 1,000 충전</S.PC_P>
                  </S.PC_Wrap>
                  <S.PC_Wrap
                    wrap="service"
                    id="second"
                    className="3000"
                    onClick={onServiceCheckHandler}
                  >
                    {second ? (
                      <S.PC_Click c_type="yes"></S.PC_Click>
                    ) : (
                      <S.PC_Click c_type="no"></S.PC_Click>
                    )}
                    <S.PC_P where="s_t">\ 3,000 결제</S.PC_P>
                    <S.PC_P where="s_b">P 3,000 충전</S.PC_P>
                  </S.PC_Wrap>
                  <S.PC_Wrap
                    wrap="service"
                    id="third"
                    className="5000"
                    onClick={onServiceCheckHandler}
                  >
                    {third ? (
                      <S.PC_Click c_type="yes"></S.PC_Click>
                    ) : (
                      <S.PC_Click c_type="no"></S.PC_Click>
                    )}
                    <S.PC_P where="s_t">\ 5,000 결제</S.PC_P>
                    <S.PC_P where="s_b">P 5,000 충전</S.PC_P>
                  </S.PC_Wrap>
                  <S.PC_Wrap
                    wrap="service"
                    id="fourth"
                    className="10000"
                    onClick={onServiceCheckHandler}
                  >
                    {fourth ? (
                      <S.PC_Click c_type="yes"></S.PC_Click>
                    ) : (
                      <S.PC_Click c_type="no"></S.PC_Click>
                    )}
                    <S.PC_P where="s_t">\ 10,000 결제</S.PC_P>
                    <S.PC_P where="s_b">P 11,500 충전</S.PC_P>
                  </S.PC_Wrap>
                  <S.PC_Wrap
                    wrap="service"
                    id="fifth"
                    className="30000"
                    onClick={onServiceCheckHandler}
                  >
                    {fifth ? (
                      <S.PC_Click c_type="yes"></S.PC_Click>
                    ) : (
                      <S.PC_Click c_type="no"></S.PC_Click>
                    )}
                    <S.PC_P where="s_t">\ 30,000 결제</S.PC_P>
                    <S.PC_P where="s_b">P 34,500 충전</S.PC_P>
                  </S.PC_Wrap>
                  <S.PC_Wrap
                    wrap="service"
                    id="sixth"
                    className="50000"
                    onClick={onServiceCheckHandler}
                  >
                    {sixth ? (
                      <S.PC_Click c_type="yes"></S.PC_Click>
                    ) : (
                      <S.PC_Click c_type="no"></S.PC_Click>
                    )}
                    <S.PC_P where="s_t">\ 50,000 결제</S.PC_P>
                    <S.PC_P where="s_b">P 57,500 충전</S.PC_P>
                  </S.PC_Wrap>
                  <S.PC_Wrap
                    wrap="service"
                    id="seventh"
                    className="100000"
                    onClick={onServiceCheckHandler}
                  >
                    {seventh ? (
                      <S.PC_Click c_type="yes"></S.PC_Click>
                    ) : (
                      <S.PC_Click c_type="no"></S.PC_Click>
                    )}
                    <S.PC_P where="s_t">\ 100,000 결제</S.PC_P>
                    <S.PC_P where="s_b">P 120,000 충전</S.PC_P>
                  </S.PC_Wrap>
                  <S.PC_Wrap
                    wrap="service"
                    id="eighth"
                    className="300000"
                    onClick={onServiceCheckHandler}
                  >
                    {eighth ? (
                      <S.PC_Click c_type="yes"></S.PC_Click>
                    ) : (
                      <S.PC_Click c_type="no"></S.PC_Click>
                    )}
                    <S.PC_P where="s_t">\ 300,000 결제</S.PC_P>
                    <S.PC_P where="s_b">P 360,000 충전</S.PC_P>
                  </S.PC_Wrap>
                  <S.PC_Wrap
                    wrap="service"
                    id="ninth"
                    className="500000"
                    onClick={onServiceCheckHandler}
                  >
                    {ninth ? (
                      <S.PC_Click c_type="yes"></S.PC_Click>
                    ) : (
                      <S.PC_Click c_type="no"></S.PC_Click>
                    )}
                    <S.PC_P where="s_t">\ 500,000 결제</S.PC_P>
                    <S.PC_P where="s_b">P 600,000 충전</S.PC_P>
                  </S.PC_Wrap>
                </S.PC_Box>
                <S.PC_Box box="info">
                  <S.PC_Wrap wrap="info">
                    <S.PC_Result where="left">충전되는포인트</S.PC_Result>
                    {money < 9000 ? (
                      <S.PC_Result where="right">{money}P</S.PC_Result>
                    ) : money < 90000 ? (
                      <S.PC_Result where="right">
                        {money}P + {money * 0.15}P = {money + money * 0.15}P
                      </S.PC_Result>
                    ) : (
                      <S.PC_Result where="right">
                        {money}P + {money * 0.2}P = {money + money * 0.2}P
                      </S.PC_Result>
                    )}
                  </S.PC_Wrap>
                  <S.PC_Hr />
                  <S.PC_Wrap wrap="info">
                    <S.PC_Result where="left">부가세(10%)</S.PC_Result>
                    <S.PC_Result where="right">+ {money / 10}원</S.PC_Result>
                  </S.PC_Wrap>
                  <S.PC_Hr />
                  <S.PC_Wrap wrap="info">
                    <S.PC_Result where="left">최종결제금액</S.PC_Result>
                    <S.PC_Result where="right">
                      {money + money / 10}원
                    </S.PC_Result>
                  </S.PC_Wrap>
                  <S.PC_Hr />
                </S.PC_Box>
                <S.PC_Btn btnOnClick={onClickPayment}>결제하기</S.PC_Btn>
              </S.PC_Box>
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
