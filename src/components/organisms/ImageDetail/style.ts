/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { Btn } from '../../index';

export const PC_Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #898e96;
  display: flex;
  justify-content: center;
`;

export const PC_Wrap = styled.div<{ wrap: string }>`
  ${(props) =>
    props.wrap === 'left' &&
    css`
      width: 85rem;
      height: 100rem;
      border-radius: 1%;
    `}
  ${(props) =>
    props.wrap === 'right' &&
    css`
      width: 36rem;
      height: 80rem;
      margin-left: 2rem;
      border-radius: 2%;
    `}
    margin-top: 10rem;
  margin-bottom: 2rem;
  background-color: #ffffff;
  border: 1px solid #849db7;
  box-shadow: 0 0 0.2rem #000000;
`;

export const PC_LeftBox = styled.div<{ b_type: string }>`
  ${(props) =>
    props.b_type === 'top' &&
    css`
      height: 55%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
  ${(props) =>
    props.b_type === 'mid' &&
    css`
      height: 25%;
    `}
${(props) =>
    props.b_type === 'bot' &&
    css`
      height: 20%;
    `}
  width: 100%;
`;

export const PC_LeftInfo = styled.div<{ i_type: string }>`
  ${(props) =>
    props.i_type === 'l_t_wrap' &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    `}
  ${(props) =>
    props.i_type === 'l_t_auth' &&
    css`
      width: 80%;
      display: flex;
      align-items: center;
      margin-left: 3rem;
    `}
${(props) =>
    props.i_type === 'l_t_like' &&
    css`
      display: flex;
      align-items: center;
      margin-right: 2rem;
      width: 20%;
    `}
${(props) =>
    props.i_type === 'l_m_list' &&
    css`
      width: 100%;
    `}
${(props) =>
    props.i_type === 'like' &&
    css`
      width: 3rem;
      height: 3rem;
      margin-right: 2rem;
    `}
`;

export const PC_P = styled.p<{ p_type: string }>`
  ${(props) =>
    props.p_type === 'l_p' &&
    css`
      padding-left: 1rem;
      font-size: 1.6rem;
      font-family: elice;
      color: #808080;
    `}
  ${(props) =>
    props.p_type === 'l_auth' &&
    css`
      font-size: 1.6rem;
      font-family: elice;
      color: #338fef;
      margin: 0 1rem;
    `}
${(props) =>
    props.p_type === 'r_p' &&
    css`
      font-size: 1.5rem;
      font-family: elice;
      color: #808080;
    `}
${(props) =>
    props.p_type === 'r_name' &&
    css`
      font-size: 2rem;
      font-family: elice;
      color: #338fef;
      margin: 2rem;
      text-align: center;
    `}
${(props) =>
    props.p_type === 'r_b' &&
    css`
      font-size: 1.5rem;
      font-family: elice;
      color: #808080;
      margin: 1rem 0 0 1rem;
    `}
`;

export const PC_RightInfo = styled.div<{ i_type: string }>`
  ${(props) =>
    props.i_type === 'r_f_img' &&
    css`
      width: 3rem;
      height: 3rem;
      margin: 0 0.8rem;
    `}
  ${(props) =>
    props.i_type === 'r_s' &&
    css`
      width: 100%;
      height: 45%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
${(props) =>
    props.i_type === 'r_s_box' &&
    css`
      width: 90%;
      height: 90%;
      border: 0.1rem solid #849db7;
    `}
${(props) =>
    props.i_type === 'r_t' &&
    css`
      width: 100%;
      height: 40%;
    `}
${(props) =>
    props.i_type === 'r_t_p' &&
    css`
      font-size: 1.6rem;
      font-family: elice;
      color: #808080;
      margin: 1rem;
    `}
${(props) =>
    props.i_type === 'r_f' &&
    css`
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
${(props) =>
    props.i_type === 'r_h' &&
    css`
      width: 100%;
      height: 15%;
    `}
`;

export const PC_Btn = styled(Btn)<{ b_type: string }>`
  ${(props) => props.b_type === 'cart' && css``}
  ${(props) =>
    props.b_type === 'buy' &&
    css`
      background-color: #0197ea;
    `}
  width: 90%;
  margin-left: 5%;
  height: 15%;
`;

export const PC_Ul = styled.ul`
  list-style-type: disc;
`;

export const PC_Li = styled.li`
  color: #808080;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  margin-right: 1.5rem;
`;

export const PC_Hr = styled.hr`
  border: solid 0.1rem #e5e5e5;
  width: 96%;
`;

export const PC_Img = styled.img<{ img: string }>`
  ${(props) =>
    props.img === 'l_t' &&
    css`
      width: 97%;
      height: 85%;
      border-radius: 1%;
      margin-bottom: 1rem;
    `}
  ${(props) =>
    props.img === 'l_auth' &&
    css`
      width: 3rem;
    `}
`;
