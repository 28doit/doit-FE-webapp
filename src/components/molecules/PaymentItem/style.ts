import styled, { css } from 'styled-components';
import { Btn } from '../../index';

export const PC_Overlay = styled.div`
  width: 100%;
  background: #868e96;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PC_Inner = styled.div`
  width: 60rem;
  height: 90%;
  padding: 3rem 2rem;
  background: #fff;
  margin: 5rem;
`;

export const PC_Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PC_Title = styled.h2`
  margin: 2rem 0 2rem;
  font-size: 3rem;
  text-align: center;
  font-family: elice;
`;

export const PC_P =
  styled.p <
  { where: string } >
  `
  ${(props) =>
    props.where === 't_l' &&
    css`
      font-family: elice;
      font-size: 2rem;
    `}
  ${(props) =>
    props.where === 't_r' &&
    css`
      color: red;
      font-family: elice;
      font-size: 2rem;
    `}
  ${(props) =>
    props.where === 's_t' &&
    css`
      text-align: center;
      font-size: 1.5rem;
    `}
  ${(props) =>
    props.where === 's_b' &&
    css`
      text-align: center;
      margin-top: 1rem;
      color: #0197ea;
      font-family: elice;
      font-size: 1.5rem;
    `}
`;

export const PC_Box =
  styled.div <
  { box: string } >
  `
  ${(props) =>
    props.box === 'default' &&
    css`
      display: flex;
      align-items: center;
      border-radius: 1rem;
      width: 80rem;
      height: 78rem;
      flex-direction: column;
    `}
  ${(props) =>
    props.box === 'service' &&
    css`
      display: flex;
      align-items: center;
      width: 80%;
      cursor: pointer;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 1.5rem;
    `}
  ${(props) =>
    props.box === 'info' &&
    css`
      width: 80%;
    `}
`;

export const PC_Result =
  styled.div <
  { where: string } >
  `
  ${(props) => props.where === 'left' && css``}
  ${(props) => props.where === 'right' && css``}
  color: #808080;
  font-family: elice;
  font-size: 2rem;
`;

export const PC_Wrap =
  styled.div <
  { wrap: string } >
  `
  ${(props) =>
    props.wrap === 'info' &&
    css`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 16px 0;
    `}
  ${(props) =>
    props.wrap === 'text' &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      margin: 1rem;
    `}
  ${(props) =>
    props.wrap === 'service' &&
    css`
      width: 30%;
      height: 10rem;
      border: 0.1rem solid #338fef;
      margin-bottom: 3rem;
    `}
`;

export const PC_Click =
  styled.div <
  { c_type: string } >
  `
  ${(props) =>
    props.c_type === 'yes' &&
    css`
      background-color: green;
    `}
  ${(props) =>
    props.c_type === 'no' &&
    css`
      background-color: red;
    `}

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const PC_Hr = styled.hr``;

export const PC_Btn = styled(Btn)`
  width: 20rem;
  background-color: #0197ea;
`;
