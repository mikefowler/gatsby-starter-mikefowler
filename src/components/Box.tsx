import styled, {
  InterpolationFunction,
  ThemedStyledProps,
  StyledComponentPropsWithRef,
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';
import {
  space,
  layout,
  typography,
  color,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  ColorProps,
  flexbox,
  FlexboxProps,
  ResponsiveValue,
} from 'styled-system';
import { css, get, SystemStyleObject, ResponsiveStyleValue } from '@styled-system/css';

interface BaseProps extends React.RefAttributes<any> {
  as?: React.ElementType;
  css?: CSSObject | FlattenSimpleInterpolation | string;
}

interface BoxProps
  extends BaseProps,
    SpaceProps,
    TypographyProps,
    LayoutProps,
    ColorProps,
    FlexboxProps {
  variant?: ResponsiveValue<string>;
  tx?: string;
}

export type SxStyleProp =
  | SystemStyleObject
  | Record<
      string,
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
    >;

export interface SxProps {
  sx?: SxStyleProp;
}

type Interpolated<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  T extends object,
  O extends object = {}
> = InterpolationFunction<ThemedStyledProps<StyledComponentPropsWithRef<C> & O, T>>;

const base: Interpolated<React.FC<{ __css?: SystemStyleObject }>, any> = (props) =>
  css(props.__css)(props.theme);

const sx: Interpolated<React.FC<SxProps>, any> = (props) => css(props.sx)(props.theme);

const variant: Interpolated<React.FC<BoxProps>, any> = ({ theme, variant, tx = 'variants' }) =>
  css(get(theme, `${tx}.${variant}`, get(theme, `${variant}`)))(theme);

const cssProp: Interpolated<React.FC<BoxProps>, any> = (props) => props.css;

const Box = styled.div<BoxProps>`
  box-sizing: 'border-box';
  margin: 0;
  min-width: 0;

  ${base}
  ${variant}
  ${sx}
  ${cssProp}
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${flexbox}
`;

export default Box;
