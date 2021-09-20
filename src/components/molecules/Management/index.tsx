import { useState, useEffect } from 'react';
import * as S from './style';
import axios from 'axios';
import { Card } from '../../index';

export interface ManagementProps {}

const ManageResult = (some: any) => {
  return (
    <>
      {some &&
        some.map((info: any) => (
          <S.ManageLi key={info.gall_id}>
            <Card
              CardType="type05"
              imgWidth="280px"
              imgHeight="180px"
              likeImg={info.src}
            />
          </S.ManageLi>
        ))}
    </>
  );
};

const ManageDeny = (some: any) => {
  return (
    <>
      {some &&
        some.map((info: any) => (
          <S.ManageLi key={info.gall_id}>
            <Card
              CardType="type06"
              imgWidth="280px"
              imgHeight="240px"
              likeImg={info.src}
            />
          </S.ManageLi>
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

    if (access) {
      axios.get(process.env.REACT_APP_TEST + '/manage').then((response) => {
        console.log(response);
        setAccessItem(response.data);
      });
    } else if (inProcess) {
      axios.get(process.env.REACT_APP_TEST + '/manage').then((response) => {
        console.log(response);
        setInProcessItem(response.data);
      });
    } else {
      axios.get(process.env.REACT_APP_TEST + '/manage').then((response) => {
        console.log(response);
        setDenyItem(response.data);
      });
    }
  };

  useEffect(() => {
    axios.get(process.env.REACT_APP_TEST + '/manage').then((response) => {
      console.log(response);
      setAccessItem(response.data);
    });
    axios.get(process.env.REACT_APP_TEST + '/manage').then((response) => {
      console.log(response);
      setInProcessItem(response.data);
    });
    axios.get(process.env.REACT_APP_TEST + '/manage').then((response) => {
      console.log(response);
      setDenyItem(response.data);
    });
  }, []);

  return (
    <S.ManageContainer>
      <S.ManageTitle>이미지 관리</S.ManageTitle>
      <S.ManageBtnBox>
        {access ? (
          <S.ManageCheckBtnYes btnOnClick={onServiceHandler} btnId="access">
            승인
          </S.ManageCheckBtnYes>
        ) : (
          <S.ManageCheckBtnNo btnOnClick={onServiceHandler} btnId="access">
            승인
          </S.ManageCheckBtnNo>
        )}
        {inProcess ? (
          <S.ManageCheckBtnYes btnOnClick={onServiceHandler} btnId="inProcess">
            심사 중
          </S.ManageCheckBtnYes>
        ) : (
          <S.ManageCheckBtnNo btnOnClick={onServiceHandler} btnId="inProcess">
            심사 중
          </S.ManageCheckBtnNo>
        )}
        {deny ? (
          <S.ManageCheckBtnYes btnOnClick={onServiceHandler} btnId="deny">
            승인 불가
          </S.ManageCheckBtnYes>
        ) : (
          <S.ManageCheckBtnNo btnOnClick={onServiceHandler} btnId="deny">
            승인 불가
          </S.ManageCheckBtnNo>
        )}
      </S.ManageBtnBox>
      <S.ManageResultBox>
        <S.ManageUl>
          {access ? ManageResult(accessItem) : ''}
          {inProcess ? ManageResult(inProcessItem) : ''}
          {deny ? ManageDeny(denyItem) : ''}
        </S.ManageUl>
      </S.ManageResultBox>
    </S.ManageContainer>
  );
};
