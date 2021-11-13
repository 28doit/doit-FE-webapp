import React, { useEffect, useState } from 'react';
import * as S from './style';
import { CardItem } from '../../index';
import { get_dash } from '../../../redux/services/auth.service';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface DashBoardItemProps {}

export const DashBoardItem = (): React.ReactElement => {
  const [imgItem, setImgItem] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    get_dash().then((response: any) => {
      response.data.map(
        (info: any) => (setImgItem(info.img), setUserData(info.user)),
      );
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
              {userData &&
                userData.map((info: any) => (
                  <S.PC_TopMid key="PC_TopMid">
                    <S.PC_Box where="top">
                      <S.PC_Img src={info.profile} />
                      <S.PC_Nickname>{info.nickName}</S.PC_Nickname>
                    </S.PC_Box>
                    <S.PC_Box where="mid">
                      <S.PC_Info>
                        <S.PC_P p_type="main">누적 판매 수</S.PC_P>
                        <S.PC_P p_type="sub">{info.rate} 개</S.PC_P>
                      </S.PC_Info>
                      <S.PC_Info>
                        <S.PC_P p_type="main">누적 매출</S.PC_P>
                        <S.PC_P p_type="sub">{info.sale} 원</S.PC_P>
                      </S.PC_Info>
                      <S.PC_Info>
                        <S.PC_P p_type="main">판매중 콘텐츠</S.PC_P>
                        <S.PC_P p_type="sub">{info.ing} 개</S.PC_P>
                      </S.PC_Info>
                      <S.PC_Info>
                        <S.PC_P p_type="main">팬 수</S.PC_P>
                        <S.PC_P p_type="sub">{info.fan} 명</S.PC_P>
                      </S.PC_Info>
                    </S.PC_Box>
                  </S.PC_TopMid>
                ))}
              <S.PC_Box where="bot">
                <S.PC_Ul>
                  {imgItem &&
                    imgItem.map((info: any) => (
                      <S.PC_Li key={info.key}>
                        <CardItem
                          CardType="type07"
                          likeImg={info.imgSrc}
                          cardOnclick={() => {
                            console.log('hi');
                          }}
                        />
                      </S.PC_Li>
                    ))}
                </S.PC_Ul>
              </S.PC_Box>
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
