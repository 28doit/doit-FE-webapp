import axios from 'axios';
import { useEffect, useState } from 'react';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import * as S from './style';
export interface CartProps {}

export const CartItem = ({}: CartProps): React.ReactElement => {
  const [cartList, setCartList] = useState([]);
  // eslint-disable-next-line prettier/prettier
  const [check, setCheck] = useState([] as any);

  useEffect(() => {
    axios.get(process.env.REACT_APP_LOCAL + `/cart`).then((response) => {
      setCartList(response.data);
      console.log(response.data);
    });
  }, []);

  const onCheckAll = (e: any) => {
    setCheck(e.target.checked ? cartList : []);
  };

  const onCheckEach = (e: any, info: any) => {
    if (e.target.checked) {
      setCheck([...check, info]);
    } else {
      setCheck(check.filter((gall_info: any) => gall_info != info));
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
              <S.PC_Title>장바구니</S.PC_Title>
              {JSON.stringify(check)}
              <S.PC_Box>
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
                      <S.PC_Th>상품 정보</S.PC_Th>
                      <S.PC_Th>판매자</S.PC_Th>
                      <S.PC_Th>금액</S.PC_Th>
                    </S.PC_Tr>
                  </S.PC_Thead>
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
                            <S.PC_img src={info.src} />
                          </S.PC_Td>
                          <S.PC_Td>{info.gall_id}</S.PC_Td>
                          <S.PC_Td>{info.author}</S.PC_Td>
                          <S.PC_Td>500</S.PC_Td>
                        </S.PC_Tr>
                      ))}
                  </S.PC_Tbody>
                </S.PC_Table>
              </S.PC_Box>
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
