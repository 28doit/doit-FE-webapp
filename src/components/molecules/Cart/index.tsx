/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import * as S from './style';
import {
  get_cart,
  post_pay_cart,
  post_delete_cart,
} from '../../../redux/services/auth.service';
import { useSelector } from 'react-redux';

export interface CartItemProps {}

export const CartItem = ({}: CartItemProps): React.ReactElement => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [cartList, setCartList] = useState([]);
  const [check, setCheck] = useState([] as any);
  const [money, setMoney] = useState(0);
  let allPay = 0;

  useEffect(() => {
    get_cart(currentUser.token, currentUser.email).then((response) => {
      console.log(response);
      setCartList(response.data);
    });
  }, []);

  useEffect(() => {
    check.map((info: any) => (allPay += info.pay));
    setMoney(allPay);
  }, [check]);

  const onCheckAll = (e: any) => {
    if (e.target.checked) {
      cartList.map((info: any) => (allPay += info.pay));
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
    post_delete_cart('token', 'email', check).then((response) => {
      console.log(response);
    });
  };

  const onSubmint = (e: any) => {
    post_pay_cart('token', 'email', check, money).then(() => {
      console.log('hi');
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
                        <S.PC_Tr key={info.gall_id}>
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
                            <S.PC_Img src={info.src} />
                          </S.PC_Td>
                          <S.PC_Td>{info.gall_id}</S.PC_Td>
                          <S.PC_Td>{info.author}</S.PC_Td>
                          <S.PC_Td>{info.pay}</S.PC_Td>
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
