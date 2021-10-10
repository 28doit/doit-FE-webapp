import styled, { css, keyframes } from 'styled-components';

interface ListProps {
  direction?: 'vertical' | 'horizontal';
}

export const PC_HoList =
  styled.ul <
  ListProps >
  `
  display: flex;
  list-style: none;
  font-size: 1.6rem;
  margin: 0;
  padding: 0.6rem;
`;

export const PC_VeList =
  styled.ul <
  ListProps >
  `
  display: flex;
  list-style: none;
  font-size: 1.6rem;
  margin: 0;
  padding: 0.6rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const PC_Li = styled.li`
  margin: 0.4rem;
`;

export const PC_Container =
  styled.div <
  { c_type: string } >
  `
${(props) => props.c_type === 'list' && css``}
${(props) =>
  props.c_type === 'category' &&
  css`
    max-width: 95%;
    overflow: auto;
  `}
background-color: #fafafa;
`;
