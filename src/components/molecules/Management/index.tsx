import { useState, useEffect } from 'react';
import * as S from './style';
import { Card } from '../../index';
import { get_management } from '../../../redux/services/auth.service';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface ManagementProps {}

const ManageResult = (some: any) => {
  return (
    <>
      {some &&
        some.map((info: any) => (
          <S.PC_Li key={info.gall_id}>
            <Card CardType="type05" likeImg={info.src} />
          </S.PC_Li>
        ))}
    </>
  );
};

const ManageDeny = (some: any) => {
  return (
    <>
      {some &&
        some.map((info: any) => (
          <S.PC_Li key={info.gall_id}>
            <Card CardType="type06" likeImg={info.src} />
          </S.PC_Li>
        ))}
    </>
  );
};

export const ManagementItem = ({}: ManagementProps): React.ReactElement => {
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
                  {access ? ManageResult(accessItem) : ''}
                  {inProcess ? ManageResult(inProcessItem) : ''}
                  {deny ? ManageDeny(denyItem) : ''}
                </S.PC_Ul>
              </S.PC_Box>
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
