/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface BtnProps {
  btnType?: string;
}

const BtnCSS = css<BtnProps>`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  text-decoration: none;

  &.disabled {
    background-color: #2f4f4f;
  }
  ${(props) => props.btnType === 'default' && css``}
  ${(props) =>
    props.btnType === 'gray' &&
    css`
      border: 0;
      color: #ffffff !important;
      background: #2f4f4f;
    `}
`;

export const Btn = styled.button<BtnProps>`
  ${BtnCSS}
`;

export const LinkBtn = styled(Link)<BtnProps>`
  ${BtnCSS}
`;
