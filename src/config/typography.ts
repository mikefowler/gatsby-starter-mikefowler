import Typography from 'typography';

/**
 * A configuration for Typography.js
 *
 * @see https://kyleamathews.github.io/typography.js/
 * @see https://fonts.google.com
 */
const typography = new Typography({
  baseFontSize: '17px',
  baseLineHeight: 1.53,
  headerFontFamily: ['Roboto Condensed', 'sans-serif'],
  bodyFontFamily: ['Cabin', 'sans-serif'],
});

export const { scale, rhythm, options } = typography;
export default typography;
