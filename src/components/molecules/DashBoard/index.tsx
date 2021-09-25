import React from 'react';
import * as S from './style';

export const DashBoardItem = (): React.ReactElement => {
  return (
    <S.DashBoardContainer>
      <S.DashBoardTop>
        <S.TopProfileImg />
        <S.TopNikName>poeynus</S.TopNikName>
      </S.DashBoardTop>
      <S.DashBoardMid>
        <S.MidRate></S.MidRate>
        <S.MidSale></S.MidSale>
        <S.MidIng></S.MidIng>
        <S.MidFan></S.MidFan>
      </S.DashBoardMid>
      <S.DashBoardBot>
        <S.BotUl></S.BotUl>
      </S.DashBoardBot>
    </S.DashBoardContainer>
  );
};
