import { useState, useEffect } from 'react';
import * as S from './style';
import { CardItem, ModalLoadingItem } from '../../index';
import {
  expired_check,
  get_management,
} from '../../../redux/services/auth.service';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import { Nlogout } from '../../../redux/actions/auth';
import { useAppThunkDispatch } from '../../../redux/store';
import { useSelector } from 'react-redux';
import ROUTES from '../../../commons/routes';

export interface ManagementItemProps {}

const manageResult = (some: any) => {
  return (
    <>
      {some &&
        some.map((info: any) => (
          <S.PC_Li key={info.gall_id}>
            <CardItem CardType="type05" likeImg={info.src} />
          </S.PC_Li>
        ))}
    </>
  );
};

const manageDeny = (some: any) => {
  return (
    <>
      {some &&
        some.map((info: any) => (
          <S.PC_Li key={info.gall_id}>
            <CardItem CardType="type06" likeImg={info.src} />
          </S.PC_Li>
        ))}
    </>
  );
};

export const ManagementItem = ({}: ManagementItemProps): React.ReactElement => {
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

  const [accessItem, setAccessItem] = useState([]);
  const [inProcessItem, setInProcessItem] = useState([]);
  const [denyItem, setDenyItem] = useState([]);

  const [service, setService] = useState({
    access: true,
    inProcess: false,
    deny: false,
  });
  const { access, inProcess, deny } = service;

  const onServiceHandler = (e: any) => {
    setService({
      ...service,
      access: false,
      inProcess: false,
      deny: false,
      [e.currentTarget.id]: true,
    });

    get_management().then((response) => {
      console.log(response.data);
      response.data &&
        response.data.map((info: any) => {
          setAccessItem(info.access),
            setInProcessItem(info.inProcess),
            setDenyItem(info.deny);
        });
    });
  };

  useEffect(() => {
    get_management().then((response) => {
      console.log(response.data);
      response.data &&
        response.data.map((info: any) => {
          setAccessItem(info.access),
            setInProcessItem(info.inProcess),
            setDenyItem(info.deny);
        });
    });
  }, []);

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
              <S.PC_Title>이미지 관리</S.PC_Title>
              <S.PC_Box box="btn">
                {access ? (
                  <S.PC_Btn
                    b_type="yes"
                    btnOnClick={onServiceHandler}
                    btnId="access"
                  >
                    승인
                  </S.PC_Btn>
                ) : (
                  <S.PC_Btn
                    b_type="no"
                    btnOnClick={onServiceHandler}
                    btnId="access"
                  >
                    승인
                  </S.PC_Btn>
                )}
                {inProcess ? (
                  <S.PC_Btn
                    b_type="yes"
                    btnOnClick={onServiceHandler}
                    btnId="inProcess"
                  >
                    심사 중
                  </S.PC_Btn>
                ) : (
                  <S.PC_Btn
                    b_type="no"
                    btnOnClick={onServiceHandler}
                    btnId="inProcess"
                  >
                    심사 중
                  </S.PC_Btn>
                )}
                {deny ? (
                  <S.PC_Btn
                    b_type="yes"
                    btnOnClick={onServiceHandler}
                    btnId="deny"
                  >
                    승인 불가
                  </S.PC_Btn>
                ) : (
                  <S.PC_Btn
                    b_type="no"
                    btnOnClick={onServiceHandler}
                    btnId="deny"
                  >
                    승인 불가
                  </S.PC_Btn>
                )}
              </S.PC_Box>
              <S.PC_Box box="result">
                <S.PC_Ul>
                  {access ? manageResult(accessItem) : ''}
                  {inProcess ? manageResult(inProcessItem) : ''}
                  {deny ? manageDeny(denyItem) : ''}
                </S.PC_Ul>
              </S.PC_Box>
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
