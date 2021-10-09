/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { FormInput } from '../../index';
import TITLE from "../../../assets/title.png";

interface hrProps {
  top?: string;
}

export const PC_Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const PC_Top = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
background-image: url(${TITLE});
background-size: cover;
`;

export const PC_Title = styled.div`
  text-align: center;
  font-size: 4rem;
  font-family: Go;
  padding-top: 8rem;
  color: #041e7d;
`;

export const PC_Input = styled(FormInput)`
  border: 0.3rem solid black;
`;

export const PC_Box = styled.div<{box: string}>`
  ${(props) => props.box === "category" && css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 47rem;
  `}
  ${(props) => props.box === "card" && css`
  top: 90rem;
  `}
  position: absolute;
`;

export const PC_Hr = styled.div<hrProps>`
  width: 95%;
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #222222;
  font-size: 2.4rem;
  margin: 8rem 0 4rem 0;
  font-family: Go;
  font-weight: 700;
  position: absolute;
  top: ${(props) => props.top};

  &:after {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 0.1rem;
    margin: 0px 0 1.6rem 0;
  }

  &:before {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 0.1rem;
    margin: 0px 0 1.6rem 0;
  }
`;
