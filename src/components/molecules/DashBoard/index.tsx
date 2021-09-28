import React from 'react';
import * as S from './style';
import { Card } from '../Card/index';

export const DashBoardItem = (): React.ReactElement => {
  return (
    <S.DashBoardContainer>
      <S.DashBoardTop>
        <S.TopProfileImg />
        <S.TopNikName>poeynus</S.TopNikName>
      </S.DashBoardTop>
      <S.DashBoardMid>
        <S.MidBox>
          <S.MidP>누적 판매 수</S.MidP>
          <S.MidP>1</S.MidP>
        </S.MidBox>
        <S.MidBox>
          <S.MidP>누적 매출</S.MidP>
          <S.MidP>1</S.MidP>
        </S.MidBox>
        <S.MidBox>
          <S.MidP>판매중 콘텐츠</S.MidP>
          <S.MidP>1</S.MidP>
        </S.MidBox>
        <S.MidBox>
          <S.MidP>팬 수</S.MidP>
          <S.MidP>1</S.MidP>
        </S.MidBox>
      </S.DashBoardMid>
      <S.DashBoardBot>
        <S.BotUl></S.BotUl>
      </S.DashBoardBot>
    </S.DashBoardContainer>
  );
};
