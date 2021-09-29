import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Card } from '../Card/index';
import { get_dash } from '../../../redux/services/auth.service';

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
    <S.DashBoardContainer>
      {userData &&
        userData.map((info: any) => (
          <S.TopMid key="topMid">
            <S.DashBoardTop>
              <S.TopProfileImg src={info.profile} />
              <S.TopNikName>{info.nickName}</S.TopNikName>
            </S.DashBoardTop>
            <S.DashBoardMid>
              <S.MidBox>
                <S.MidP>누적 판매 수</S.MidP>
                <S.MidP>{info.rate} 개</S.MidP>
              </S.MidBox>
              <S.MidBox>
                <S.MidP>누적 매출</S.MidP>
                <S.MidP>{info.sale} 원</S.MidP>
              </S.MidBox>
              <S.MidBox>
                <S.MidP>판매중 콘텐츠</S.MidP>
                <S.MidP>{info.ing} 개</S.MidP>
              </S.MidBox>
              <S.MidBox>
                <S.MidP>팬 수</S.MidP>
                <S.MidP>{info.fan} 명</S.MidP>
              </S.MidBox>
            </S.DashBoardMid>
          </S.TopMid>
        ))}
      <S.DashBoardBot>
        <S.BotUl>
          {imgItem &&
            imgItem.map((info: any) => (
              <S.BotLi key={info.key}>
                <Card
                  CardType="type05"
                  likeImg={info.imgSrc}
                  imgWidth="280px"
                  imgHeight="180px"
                  cardOnclick={() => {
                    console.log('hi');
                  }}
                />
              </S.BotLi>
            ))}
        </S.BotUl>
      </S.DashBoardBot>
    </S.DashBoardContainer>
  );
};
