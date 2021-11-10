/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

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
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PC_Box = styled.div<{ where: string }>`
  ${(props) =>
    props.where === 'top' &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #c6d57e;
      color: #ffffff;
      margin-bottom: 3rem;
      padding: 3rem 0;
    `}
  ${(props) =>
    props.where === 'mid' &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 3rem;
    `}
  ${(props) =>
    props.where === 'bot' &&
    css`
      background-color: #a2cdcd;
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
  width: 95%;
`;

export const PC_Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 0.3rem solid #ffffff;
`;

export const PC_Nickname = styled.div`
  font-size: 3rem;
  font-family: elice;
  margin-left: 2rem;
`;

export const PC_Info = styled.div`
  width: 18%;
  background-color: #d57e7e;
  height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
`;

export const PC_P = styled.p<{ p_type: string }>`
  ${(props) =>
    props.p_type === 'main' &&
    css`
      font-size: 2rem;
      color: #ffffff;
    `}
  ${(props) =>
    props.p_type === 'sub' &&
    css`
      font-size: 1.5rem;
      color: #f9f8e6;
    `}
  padding-top: 2rem;
  font-family: elice;
`;

export const PC_Ul = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
`;

export const PC_Li = styled.li`
  margin: 2rem 4rem 3rem 3rem;
`;

export const PC_TopMid = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
