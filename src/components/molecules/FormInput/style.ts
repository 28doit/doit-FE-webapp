/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Input, Btn, Image, Label } from '../../index';

interface Props {
  invalid?: boolean;
}

export const FormInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 0;
  width: 80%;
`;

export const FormLabel = styled(Label)``;

export const FormInput = styled(Input)<Props>`
  width: 40%;
  border: 3px solid black;
`;

export const FormBtn = styled(Btn)<Props>`
  width 60px;
  margin: 0;
  max-height: 41px;
  height 100%;
  border-top:3px solid black;
  border-right:3px solid black;
  border-bottom:3px solid black;
`;

export const FormCaption = styled.div<Props>`
  font-size: 12px;
  color: red;
`;

export const SearchIcon = styled(Image)`
  width: 70%;
  height: 70%;
  vertical-aliign: none;
`;
