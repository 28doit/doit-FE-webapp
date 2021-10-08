/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface BtnProps {
  btntype?: string;
}

const BtnCSS = css<BtnProps>`
  font-size: 1.8rem;
  line-height: 4.9rem;
  width: 100%;
  height: 4.9rem;
  margin: 1.6rem 0 0.7rem;
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
  ${(props) => props.btntype === 'default' && css``}
  ${(props) =>
    props.btntype === 'gray' &&
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
