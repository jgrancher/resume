import React from "react";
import { Circle, Line, Path, Rect, Svg } from "@react-pdf/renderer";
import theme from "../theme";

// Line icons drawn in the same style as the sidebar's PNG ones (24 units grid, rounded strokes)
const strokeProps = {
  fill: "none",
  stroke: theme.colors.white,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
};

// Flags have more inner lines, so they get a slightly lighter stroke to stay readable
const flagStrokeProps = { ...strokeProps, strokeWidth: 1.5 };

// Flag colours are rendered as levels of white, the sidebar being monochrome
const fillProps = (opacity) => ({
  fill: theme.colors.white,
  fillOpacity: opacity,
});

// The viewBox is cropped to the drawing so that icons have no empty space around them, like the PNGs
const Icon = ({ children, style }) => (
  <Svg
    height={theme.sizes.icons}
    style={style}
    viewBox="2 2 20 20"
    width={theme.sizes.icons}
  >
    {children}
  </Svg>
);

// Fills are passed as `background` so that they're drawn below the flag's outline
const Flag = ({ background, children, style }) => (
  <Icon style={style}>
    {background}
    <Rect height={14} rx={2} width={18} x={3} y={5} {...flagStrokeProps} />
    {children}
  </Icon>
);

export const HeartIcon = ({ style }) => (
  <Icon style={style}>
    <Path
      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
      {...strokeProps}
    />
  </Icon>
);

export const FranceFlagIcon = ({ style }) => (
  <Flag
    background={
      <>
        {/* Blue */}
        <Path d="M9 5h-4a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h4z" {...fillProps(0.35)} />
        {/* Red */}
        <Path d="M15 5h4a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-4z" {...fillProps(0.7)} />
      </>
    }
    style={style}
  >
    <Line x1={9} x2={9} y1={5} y2={19} {...flagStrokeProps} />
    <Line x1={15} x2={15} y1={5} y2={19} {...flagStrokeProps} />
  </Flag>
);

export const UkFlagIcon = ({ style }) => (
  <Flag style={style}>
    <Line x1={4} x2={20} y1={6} y2={18} {...flagStrokeProps} />
    <Line x1={20} x2={4} y1={6} y2={18} {...flagStrokeProps} />
    <Line x1={12} x2={12} y1={5} y2={19} {...flagStrokeProps} />
    <Line x1={3} x2={21} y1={12} y2={12} {...flagStrokeProps} />
  </Flag>
);

export const JapanFlagIcon = ({ style }) => (
  <Flag style={style}>
    <Circle cx={12} cy={12} r={3} {...fillProps(1)} />
  </Flag>
);
