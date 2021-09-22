/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { FormInput } from '../../index';

interface hrProps {
  top?: string;
}

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const MainTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  padding-top: 40px;
`;

export const MainInput = styled(FormInput)`
  border: 3px solid black;
`;

export const MainCategoryDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 470px;
`;

export const MainCardDiv = styled.div`
  top: 900px;
  position: absolute;
`;

export const MainHr = styled.div<hrProps>`
  width: 95%;
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #222222;
  font-size: 24px;
  margin: 80px 0 40px 0;
  font-weight: 700;
  position: absolute;
  top: ${(props) => props.top};

  &:after {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }

  &:before {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;
