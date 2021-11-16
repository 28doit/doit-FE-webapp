import { useEffect, useState } from 'react';
import * as S from './style';
import {
  expired_check,
  get_profit,
  put_profit_bank,
} from '../../../redux/services/auth.service';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import { Nlogout } from '../../../redux/actions/auth';
import { useAppThunkDispatch } from '../../../redux/store';
import { useSelector } from 'react-redux';
import ROUTES from '../../../commons/routes';
import { ModalLoadingItem } from '../ModalLoading';

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
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useAppThunkDispatch();
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    sex: 1,
    phone: '',
    month: '',
    year: '',
    day: '',
    name: '',
    point: '',
  });

  useEffect(() => {
    const getUser = async () => {
      await expired_check(currentUser.token, currentUser.email)
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
              ['point']: userData.Point.profitPoint,
            });
          }
        })
        .catch(() => {
          alert(
            '잠시 오류가 발생하였습니다. 잠시 후 다시 시도해주시기 바랍니다.',
          );
          setLoading(false);
          window.location.replace(ROUTES.MYDASH);
        });
      setLoading(false);
    };
    setLoading(true);
    currentUser ? getUser() : window.location.replace(ROUTES.LOGIN);
  }, []);

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
      put_profit_bank(currentUser.token, currentUser.email, money)
        .then((response) => {
          if (response.data === false) {
            alert('금액이 부족합니다.');
          } else {
            alert(`${money}원이 출금 신청 되었습니다.`);
          }
          window.location.reload();
        })
        .catch((err) => {
          alert('에러가 발생했습니다. 다시 시도해 주시기 바랍니다.');
          window.location.reload();
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
        {Loading ? <ModalLoadingItem /> : ''}
        <S.PC_Overlay>
          <S.PC_Inner>
            <S.PC_Container>
              <S.PC_Title>환전 가능 포인트: {data.point}</S.PC_Title>
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
