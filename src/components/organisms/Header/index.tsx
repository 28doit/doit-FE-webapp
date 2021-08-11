import React, { useState } from 'react';
import * as S from './style';
import ROUTES from '../../../commons/routes';
import { useSelector } from 'react-redux';
import { logout } from '../../../actions/auth';
import { useAppThunkDispatch } from '../../../store';
import { useHistory } from 'react-router-dom';

export const Header = (): React.ReactElement => {
  const dispatch = useAppThunkDispatch();
  const history = useHistory();
  const { user: currentUser } = useSelector((state) => state.auth);

  const Exit = () => {
    dispatch(logout());
  };

  return (
    <S.Container>
      <div className="header_left">
        <S.HeaderWrapper header_left>
          <ul>
            <li>
              <S.HeaderLinkBtn btnLink={ROUTES.JOIN} btntype="gray">
                인기
              </S.HeaderLinkBtn>
            </li>
            <li>
              <S.HeaderLinkBtn btnLink={ROUTES.JOIN} btntype="gray">
                카테고리
              </S.HeaderLinkBtn>
            </li>
          </ul>
        </S.HeaderWrapper>
      </div>
      <div className="header_center">
        <S.HeaderWrapper header_center>
          <ul>
            <li>
              <S.HeaderLinkBtn btnLink={ROUTES.HOME} btntype="default">
                Photo Logger
              </S.HeaderLinkBtn>
            </li>
          </ul>
        </S.HeaderWrapper>
      </div>
      <div className="header_right">
        {currentUser ? (
          <S.HeaderWrapper header_right>
            <ul>
              <li>
                <S.HeaderLinkBtn btnLink={ROUTES.JOIN} btntype="gray">
                  장바구니
                </S.HeaderLinkBtn>
              </li>
              <li>
                <S.HeaderLinkBtn btnLink={ROUTES.MYPAGE} btntype="gray">
                  내 정보
                </S.HeaderLinkBtn>
              </li>
              <li>
                <S.HeaderLinkBtn
                  btnLink={ROUTES.HOME}
                  btnOnClick={Exit}
                  btntype="gray"
                >
                  로그 아웃
                </S.HeaderLinkBtn>
              </li>
            </ul>
          </S.HeaderWrapper>
        ) : (
          <S.HeaderWrapper header_right>
            <ul>
              <li>
                <S.HeaderLinkBtn btnLink={ROUTES.JOIN} btntype="gray">
                  회원가입
                </S.HeaderLinkBtn>
              </li>
              <li>
                <S.HeaderLinkBtn btnLink={ROUTES.LOGIN} btntype="gray">
                  로그인
                </S.HeaderLinkBtn>
              </li>
            </ul>
          </S.HeaderWrapper>
        )}
      </div>
    </S.Container>
  );
};
