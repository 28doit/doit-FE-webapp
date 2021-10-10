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
  width: 90%;
  height: 90%;
  padding: 3rem 2rem;
  background: #fff;
  margin: 5rem;
`;

export const PC_Container = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PC_Title = styled.h2`
  font-size: 3rem;
  font-family: elice;
  text-align: center;
  padding: 3rem 0;
`;

export const PC_Box =
  styled.div <
  { box: string } >
  `
  ${(props) =>
    props.box === 'btn' &&
    css`
      display: flex;
      width: 40rem;
      padding-bottom: 3rem;
    `}
  ${(props) =>
    props.box === 'result' &&
    css`
      width: 98%;
      padding-top: 3rem;
      overflow: scroll;
      &::-webkit-scrollbar {
        width: 1rem;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #2f3542;
      }

      box-shadow: 0 1.4rem 2.8rem rgba(0, 0, 0, 0.25),
        0 1rem 1rem rgba(0, 0, 0, 0.22);
    `}
`;

export const PC_Btn =
  styled(Btn) <
  { b_type: string } >
  `
  ${(props) =>
    props.b_type === 'yes' &&
    css`
      background-color: #0197ea;
    `}
    ${(props) =>
      props.b_type === 'no' &&
      css`
        background-color: #041e7d;
      `}
`;

export const PC_Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: flex-start;
`;

export const PC_Li = styled.li`
  padding: 0 6rem 6rem 2.5rem;
`;
