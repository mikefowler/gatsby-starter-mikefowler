import React from 'react';
import css, { SerializedStyles } from '@emotion/css';
import { Global } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { withTheme } from 'emotion-theming';

import { Theme } from '../theme';

type MakeGlobalStylesFn = (theme: Theme) => SerializedStyles;

const makeGlobalStyles: MakeGlobalStylesFn = () => css`
  ${emotionNormalize}

  html,
  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }
`;

const GlobalStyles = withTheme(({ theme }) => <Global styles={makeGlobalStyles(theme)} />);

export default GlobalStyles;
