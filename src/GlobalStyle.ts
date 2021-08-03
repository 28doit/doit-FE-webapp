import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle` ${reset};
  html, body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  },
  #root{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
`;
