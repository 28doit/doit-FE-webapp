/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { LinkBtn } from '../../index';

interface Props {
  header_right?: boolean;
  header_left?: boolean;
  header_center?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderWrapper = styled.div<Props>`
  display: inline-block;
  li {
    display: inline-block;
    margin-left: 10px;
    & + li {
      margin: 5px;
    }
  }
  cursor: pointer;
  ${(props) =>
    props.header_left &&
    css`
      & + div {
        margin: 0 0 0 22px;
      }
    `}
  ${(props) =>
    props.header_center &&
    css`
      & + div {
        margin: 0 0 0 22px;
      }
    `}
    ${(props) =>
    props.header_right &&
    css`
      & + div {
        margin: 0 0 0 9.1%;
      }
    `};
`;

export const NavBox = styled.nav`
  float: right;
  width: calc(100%-400px);
  text-align: right;
`;

export const HeaderLinkBtn = styled(LinkBtn)`
  padding: 10px;
  border-radius: 20px;
`;
