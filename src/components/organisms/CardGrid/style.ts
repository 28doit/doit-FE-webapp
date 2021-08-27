/* eslint-disable prettier/prettier */
import styled, { keyframes } from 'styled-components';

interface ListProps {
  direction?: 'vertical' | 'horizontal';
}

export const List = styled.ul<ListProps>`
  display: ${({ direction }) =>
    direction === 'horizontal' ? 'flex' : 'block'};
  list-style: none;
  font-size: 16px;
  margin: 0;
  padding: 6px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li`
  margin: 4px;
`;

const gradientAnimation = keyframes`
    0% {
          background-position: 0% 50%;
      }
      50% {
          background-position: 100% 50%;
      }
      100% {
          background-position: 0% 50%;
      }
  `;

export const LoadingRoot = styled.div`
  animation: ${gradientAnimation} 2s linear infinite;
  background: linear-gradient(45deg, #298fee, #11c958, #a120bb, #d6612a);
  background-size: 600% 600%;
  color: #fff;
  padding: 8px;
  width: 300px;
  height: 300px;
  text-align: center;
  vertical-align: 100px;
`;
export const ListContainer = styled.div`
  background-color: #fafafa;
`;
