import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { Theme } from '../theme';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${normalize}

  html,
  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }
`;

export default GlobalStyles;
