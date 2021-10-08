/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface InputProps {
  invalid?: boolean;
  height?: string;
}

export const Input = styled.input<InputProps>`
  height: ${(props) => (props.height ? props.height : '3.3rem')};
  border-radius: 0.2rem;
  background: #ffffff;

  &:focus {
    outline: none;
  }

  &.disabled {
    background: #eeeeee;
  }

  ${(props) =>
    props.invalid &&
    css`
      border: 0.1rem solid red;
    `}
`;
