import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import moment from 'moment';
import 'moment/locale/ko';
import * as S from './style';
import {
  expired_check,
  get_pay_log,
} from '../../../redux/services/auth.service';
import { useSelector } from 'react-redux';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import { Nlogout } from '../../../redux/actions/auth';
import { useAppThunkDispatch } from '../../../redux/store';
import ROUTES from '../../../commons/routes';
import { ModalLoadingItem } from '../ModalLoading';

export interface PayLogItemProps {}

interface PayLogCardProps {
  c_date?: string;
  c_m_uid?: string;
  c_money?: string;
  c_name?: string;
}

const PayLogCard = ({
  c_date,
  c_m_uid,
  c_money,
  c_name,
  ...props
}: PayLogCardProps) => {
  return (
    <S.PC_CardLI key={c_m_uid}>
      <S.PC_Info li_type="date">{c_date}</S.PC_Info>
      <S.PC_Info li_type="muid">{c_m_uid}</S.PC_Info>
      <S.PC_Info li_type="money">{c_money}</S.PC_Info>
      <S.PC_Info li_type="name">{c_name}</S.PC_Info>
    </S.PC_CardLI>
  );
};

export const PayLogItem = ({}: PayLogItemProps): React.ReactElement => {
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

  const [startDate, setStartDate] = useState(
    new Date(moment().subtract('1', 'M').format('YYYY/MM/DD')),
  );
  const [endDate, setEndDate] = useState(
    new Date(moment().format('YYYY/MM/DD')),
  );
  const addDaysToDate = (date: any) => {
    var res = new Date(date);
    res.setDate(res.getDate() + 1);
    return res;
  };

  const [item, setItem] = useState([]);

  const onBtnHandler = (e: any) => {
    if (
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) >
      31
    ) {
      alert('조회할 수 있는 기간은 31일 이내 입니다.');
    } else {
      get_pay_log(
        currentUser.token,
        startDate.toLocaleString('fr-CA').substr(0, 10),
        addDaysToDate(endDate).toLocaleString('fr-CA').substr(0, 10),
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
        {Loading ? <ModalLoadingItem /> : ''}
        <S.PC_Overlay>
          <S.PC_Inner>
            <S.PC_Contatiner>
              <S.PC_Title>결제 내역</S.PC_Title>
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
                <S.PC_CardUl>
                  {PayLogCard({
                    c_date: '날짜',
                    c_m_uid: '구매 번호',
                    c_money: '금액',
                    c_name: '카드',
                  })}
                </S.PC_CardUl>
                <S.PC_CardUl>
                  {item &&
                    item.map((info: any) =>
                      PayLogCard({
                        c_date: info.time,
                        c_m_uid: info.mid,
                        c_money: info.pay,
                        c_name: info.payCard,
                      }),
                    )}
                </S.PC_CardUl>
              </S.PC_Modal>
            </S.PC_Contatiner>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
