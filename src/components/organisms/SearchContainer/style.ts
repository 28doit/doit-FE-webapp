import styled from 'styled-components';
import { FormInput } from '../../index';

export const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SearchTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  padding-top: 40px;
`;

export const SearchInput = styled(FormInput)`
  border: 3px solid black;
`;

export const SearchMap = styled.div``;
