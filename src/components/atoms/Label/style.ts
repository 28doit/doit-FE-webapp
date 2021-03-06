/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface LabelProps {
  required?: boolean;
}

export const Label = styled.label<LabelProps>`
  font-size: 1.4rem;
  color: #414141;
  ${(props) =>
    props.required &&
    css`
      &::after {
        content: '*';
        color: red;
      }
    `}
`;
