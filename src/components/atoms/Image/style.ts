/* eslint-disable prettier/prettier */
import styled from 'styled-components';

interface ImageProps {
  height?: string;
}

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : '100%')};
  border-radius: inherit;
`;
