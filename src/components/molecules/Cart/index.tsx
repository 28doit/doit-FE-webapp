/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import * as S from './style';
import {
  get_cart,
  post_pay_cart,
  post_delete_cart,
  expired_check,
} from '../../../redux/services/auth.service';
import { useSelector } from 'react-redux';
import { Nlogout } from '../../../redux/actions/auth';
import { useAppThunkDispatch } from '../../../redux/store';
import ROUTES from '../../../commons/routes';
import { ModalLoadingItem } from '../ModalLoading';

export interface CartItemProps {}

export const CartItem = ({}: CartItemProps): React.ReactElement => {
  const [cartList, setCartList] = useState([]);
  const [check, setCheck] = useState([] as any);
  const [money, setMoney] = useState(0);
  let allPay = 0;

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

  useEffect(() => {
    get_cart(currentUser.token, currentUser.email).then((response) => {
      console.log(response);
      setCartList(response.data);
    });
  }, []);

  useEffect(() => {
    check.map((info: any) => (allPay += info.price));
    setMoney(allPay);
  }, [check]);

  const onCheckAll = (e: any) => {
    if (e.target.checked) {
      cartList.map((info: any) => (allPay += info.price));
      setCheck(cartList);
    } else {
      setCheck([]);
    }
  };

  const onCheckEach = (e: any, info: any) => {
    if (e.target.checked) {
      setCheck([...check, info]);
    } else {
      setCheck(check.filter((gall_info: any) => gall_info != info));
    }
  };

  const onDeleteCart = (e: any) => {
    let delImg = [] as any;
    check.map((info: any) => delImg.push(info.gallery_id));
    post_delete_cart(currentUser.token, currentUser.email, delImg.join(','))
      .then((response) => {
        if (response.data) {
          alert('목록이 삭제 되었습니다');
          window.location.reload();
        }
      })
      .catch((err) => {
        alert('에러가 발생했습니다 다시 시도해주세요.');
        window.location.reload();
      });
  };

  const onSubmint = (e: any) => {
    let allImg = [] as any;
    check.map((info: any) => allImg.push(info.gallery_id));
    post_pay_cart(currentUser.token, currentUser.email, allImg.join(','), money)
      .then((response) => {
        if (response.data < 0) {
          alert(`${response.data}원 부족합니다.`);
        } else {
          alert(`결제 되었습니다. 남은 금액: ${response.data}`);
          window.location.reload();
        }
      })
      .catch(() => {
        alert('에러가 발생했습니다 다시 시도해주세요.');
        window.location.reload();
      });
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
              <S.PC_Title>장바구니</S.PC_Title>
              <S.PC_Table>
                <S.PC_Thead>
                  <S.PC_Tr>
                    <S.PC_Th>
                      <input
                        type="checkbox"
                        onChange={onCheckAll}
                        checked={check.length === cartList.length}
                      />
                    </S.PC_Th>
                    <S.PC_Th>사진 정보</S.PC_Th>
                    <S.PC_Th>사진 이름</S.PC_Th>
                    <S.PC_Th>판매자</S.PC_Th>
                    <S.PC_Th>금액</S.PC_Th>
                  </S.PC_Tr>
                </S.PC_Thead>
              </S.PC_Table>
              <S.PC_Box box="table">
                <S.PC_Table>
                  <S.PC_Tbody>
                    {cartList &&
                      cartList.map((info: any) => (
                        <S.PC_Tr key={info.gallery_id}>
                          <S.PC_Td>
                            <S.PC_Input
                              i_type="checkbox"
                              type="checkbox"
                              onChange={(e) => {
                                onCheckEach(e, info);
                              }}
                              checked={check.includes(info)}
                            />
                          </S.PC_Td>
                          <S.PC_Td>
                            <S.PC_Img src={info.gallery_location} />
                          </S.PC_Td>
                          <S.PC_Td>{info.gallery_name}</S.PC_Td>
                          <S.PC_Td>{info.seller_Name}</S.PC_Td>
                          <S.PC_Td>{info.price}</S.PC_Td>
                        </S.PC_Tr>
                      ))}
                  </S.PC_Tbody>
                </S.PC_Table>
              </S.PC_Box>
              <S.PC_Box box="del">
                <S.PC_Btn b_type="del" btnOnClick={onDeleteCart}>
                  삭제
                </S.PC_Btn>
              </S.PC_Box>
              <S.PC_Box box="money">
                <S.PC_P p_type="txt">총 상품금액</S.PC_P>
                <S.PC_P p_type="money">{money} 원</S.PC_P>
                <S.PC_Btn b_type="pay" btnOnClick={onSubmint}>
                  구매하기
                </S.PC_Btn>
              </S.PC_Box>
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
