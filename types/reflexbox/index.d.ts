declare module 'reflexbox' {
  import { FC } from 'react';
  import * as CSS from 'csstype';

  export type CSSProperties = CSS.Properties<string | number>;

  type MaybeArray<T> = T | T[];
  type SizingUnit = string | number;

  interface BaseProps {
    // Space
    margin?: MaybeArray<CSSProperties['margin']>;
    m?: MaybeArray<CSSProperties['margin']>;
    marginTop?: MaybeArray<CSSProperties['marginTop']>;
    mt?: MaybeArray<CSSProperties['marginTop']>;
    marginRight?: MaybeArray<CSSProperties['marginRight']>;
    mr?: MaybeArray<CSSProperties['marginRight']>;
    marginBottom?: MaybeArray<CSSProperties['marginBottom']>;
    mb?: MaybeArray<CSSProperties['marginBottom']>;
    marginLeft?: MaybeArray<CSSProperties['marginLeft']>;
    ml?: MaybeArray<CSSProperties['marginLeft']>;
    marginX?: MaybeArray<CSSProperties['margin']>;
    mx?: MaybeArray<CSSProperties['margin']>;
    marginY?: MaybeArray<CSSProperties['margin']>;
    my?: MaybeArray<CSSProperties['margin']>;
    padding?: MaybeArray<CSSProperties['padding']>;
    p?: MaybeArray<CSSProperties['padding']>;
    paddingTop?: MaybeArray<CSSProperties['paddingTop']>;
    pt?: MaybeArray<CSSProperties['paddingTop']>;
    paddingRight?: MaybeArray<CSSProperties['paddingRight']>;
    pr?: MaybeArray<CSSProperties['paddingRight']>;
    paddingBottom?: MaybeArray<CSSProperties['paddingBottom']>;
    pb?: MaybeArray<CSSProperties['paddingBottom']>;
    paddingLeft?: MaybeArray<CSSProperties['paddingLeft']>;
    pl?: MaybeArray<CSSProperties['paddingLeft']>;
    paddingX?: MaybeArray<CSSProperties['padding']>;
    px?: MaybeArray<CSSProperties['padding']>;
    paddingY?: MaybeArray<CSSProperties['padding']>;
    py?: MaybeArray<CSSProperties['padding']>;

    // Layout
    width?: MaybeArray<CSSProperties['width']>;
    height?: MaybeArray<CSSProperties['height']>;
    minWidth?: MaybeArray<CSSProperties['minWidth']>;
    maxWidth?: MaybeArray<CSSProperties['maxWidth']>;
    minHeight?: MaybeArray<CSSProperties['minHeight']>;
    maxHeight?: MaybeArray<CSSProperties['maxHeight']>;

    // Typography
    fontFamily?: MaybeArray<CSSProperties['fontFamily']>;
    fontSize?: MaybeArray<CSSProperties['fontSize']>;
    fontWeight?: MaybeArray<CSSProperties['fontWeight']>;
    lineHeight?: MaybeArray<CSSProperties['lineHeight']>;
    letterSpacing?: MaybeArray<CSSProperties['letterSpacing']>;
    fontStyle?: MaybeArray<CSSProperties['fontStyle']>;
    textAlign?: MaybeArray<CSSProperties['textAlign']>;

    // Color
    color?: MaybeArray<CSSProperties['color']>;
    backgroundColor?: MaybeArray<CSSProperties['backgroundColor']>;
    bg?: MaybeArray<CSSProperties['backgroundColor']>;
    opacity?: MaybeArray<CSSProperties['opacity']>;

    // Flexbox
    alignItems?: MaybeArray<CSSProperties['alignItems']>;
    alignContent?: MaybeArray<CSSProperties['alignContent']>;
    justifyItems?: MaybeArray<CSSProperties['justifyItems']>;
    justifyContent?: MaybeArray<CSSProperties['justifyContent']>;
    flexWrap?: MaybeArray<CSSProperties['flexWrap']>;
    flexDirection?: MaybeArray<CSSProperties['flexDirection']>;
    flex?: MaybeArray<CSSProperties['flex']>;
    flexGrow?: MaybeArray<CSSProperties['flexGrow']>;
    flexShrink?: MaybeArray<CSSProperties['flexShrink']>;
    flexBasis?: MaybeArray<CSSProperties['flexBasis']>;
    justifySelf?: MaybeArray<CSSProperties['justifySelf']>;
    alignSelf?: MaybeArray<CSSProperties['alignSelf']>;
    order?: MaybeArray<CSSProperties['order']>;
  }

  interface SxProps {
    sx?: any;
  }

  export type BoxProps = BaseProps & SxProps;
  export type FlexProps = BaseProps & SxProps;

  export const Box: React.FC<BoxProps>;
  export const Flex: React.FC<FlexProps>;
}
