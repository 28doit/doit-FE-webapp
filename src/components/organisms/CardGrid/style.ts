/* eslint-disable prettier/prettier */
import styled from 'styled-components';
interface Props {
  boxWidth?: string;
}

export const GridItem = styled.ul<Props>`
  li {
    display: inline-block;
    width: ${(props) => props.boxWidth && props.boxWidth};

    & + li {
      margin: 0 0 0 10px;
    }
  }
`;
