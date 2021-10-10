/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Input, Btn, Image, Label } from '../../index';

interface Props {
  invalid?: boolean;
}

export const FormInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 8rem 0;
  width: 80%;
`;

export const FormLabel = styled(Label)``;

export const FormInput = styled(Input)<Props>`
  width: 40%;
  border: 0.3rem solid black;
`;

export const FormBtn = styled(Btn)<Props>`
  width 6rem;
  margin: 0;
  max-height: 4.1rem;
  height 100%;
  border-top: 0.3rem solid black;
  border-right: 0.3rem solid black;
  border-bottom: 0.3rem solid black;
  background-color: #0197ea;
`;

export const FormCaption = styled.div<Props>`
  font-size: 1.2rem;
  color: red;
`;

export const SearchIcon = styled(Image)`
  width: 70%;
  height: 70%;
  vertical-aliign: none;
`;
