import styled, { css } from 'styled-components';
import { Btn } from '../../index';

export const PC_Fix = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PC_Container = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #898e96;
`;

export const PC_Title = styled.h2`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  padding: 3rem 0;
`;

export const PC_Wrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PC_Map =
  styled.div <
  { m_type: string } >
  `
  ${(props) => props.m_type === 'map' && css``}
  ${(props) => props.m_type === 'loadview' && css``}
  width: 100%;
  height: 100%;
`;

export const PC_Btn = styled(Btn)`
  margin-top: 2.4rem;
  width: 10rem;
  background-color: #0197ea;
`;
