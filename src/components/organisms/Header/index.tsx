import React from 'react';
import * as S from './style';
import { LinkBtn } from '../../index';
import ROUTES from '../../../commons/routes';

export const Header = (): React.ReactElement => {
  return (
    <S.Container>
      <div className="header_left">
        <S.HeaderWrapper header_left>
          <ul>
            <li>Best</li>
            <li>Category</li>
          </ul>
        </S.HeaderWrapper>
      </div>
      <div className="header_center">
        <S.HeaderWrapper header_center>
          <ul>
            <li>
              <LinkBtn btnLink={ROUTES.HOME} btntype="default">
                Photo Logger
              </LinkBtn>
            </li>
          </ul>
        </S.HeaderWrapper>
      </div>
      <div className="header_right">
        <S.HeaderWrapper header_right>
          <ul>
            <li>
              <LinkBtn btnLink={ROUTES.JOIN} btntype="gray">
                JOIN
              </LinkBtn>
            </li>
            <li>
              <LinkBtn btnLink={ROUTES.LOGIN} btntype="gray">
                LOGIN
              </LinkBtn>
            </li>
          </ul>
        </S.HeaderWrapper>
      </div>
    </S.Container>
  );
};
