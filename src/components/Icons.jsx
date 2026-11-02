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

// Like the PNGs, each icon is cropped to its drawing (`box`, strokes included) and is drawn at the
// icons' width, its height following the drawing's proportions
const Icon = ({ box: [x, y, width, height], children, style }) => (
  <Svg
    height={(theme.sizes.icons * height) / width}
    style={style}
    viewBox={`${x} ${y} ${width} ${height}`}
    width={theme.sizes.icons}
  >
    {children}
  </Svg>
);

// Fills are passed as `background` so that they're drawn below the flag's outline
const Flag = ({ background, children, style }) => (
  <Icon box={[2.25, 4.25, 19.5, 15.5]} style={style}>
    {background}
    <Rect height={14} rx={2} width={18} x={3} y={5} {...flagStrokeProps} />
    {children}
  </Icon>
);

export const MailIcon = ({ style }) => (
  <Icon box={[2, 4, 20, 16]} style={style}>
    <Rect height={14} rx={2} width={18} x={3} y={5} {...strokeProps} />
    <Path d="M3 7l9 6l9 -6" {...strokeProps} />
  </Icon>
);

export const HeartIcon = ({ style }) => (
  <Icon box={[2, 3, 20, 18]} style={style}>
    <Path
      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
      {...strokeProps}
    />
  </Icon>
);

export const DumbbellIcon = ({ style }) => (
  <Icon box={[2, 5, 20, 14]} style={style}>
    <Path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" {...strokeProps} />
    <Path
      d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"
      {...strokeProps}
    />
    <Path d="M9 12h6" {...strokeProps} />
    <Path
      d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"
      {...strokeProps}
    />
    <Path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" {...strokeProps} />
  </Icon>
);

export const MusicIcon = ({ style }) => (
  <Icon box={[2, 3, 18, 18]} style={style}>
    <Path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" {...strokeProps} />
    <Path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" {...strokeProps} />
    <Path d="M9 17v-13h10v13" {...strokeProps} />
    <Path d="M9 8h10" {...strokeProps} />
  </Icon>
);

// The classic "crab" space invader, filled pixel by pixel on its own 11x8 grid: being pixel art,
// it's filled like the brands' logos rather than outlined
export const SpaceInvaderIcon = ({ style }) => (
  <Icon box={[0, 0, 11, 8]} style={style}>
    <Path
      d="M2 0h1v1h-1zM8 0h1v1h-1zM3 1h1v1h-1zM7 1h1v1h-1zM2 2h7v1h-7zM1 3h2v1h-2zM4 3h3v1h-3zM8 3h2v1h-2zM0 4h11v1h-11zM0 5h1v1h-1zM2 5h7v1h-7zM10 5h1v1h-1zM0 6h1v1h-1zM2 6h1v1h-1zM8 6h1v1h-1zM10 6h1v1h-1zM3 7h2v1h-2zM6 7h2v1h-2z"
      fill={theme.colors.white}
    />
  </Icon>
);

// Claude's logo, filled like the TypeScript badge; its own 90 units grid matches the drawing exactly
export const ClaudeIcon = ({ style }) => (
  <Icon box={[0, 0, 90, 90]} style={style}>
    <Path
      d="M 17.671 59.85 l 17.699 -9.93 l 0.298 -0.862 l -0.298 -0.48 h -0.862 l -2.958 -0.182 l -10.113 -0.273 l -8.77 -0.364 L 4.17 47.302 l -2.138 -0.456 l -2.004 -2.642 l 0.207 -1.318 l 1.798 -1.209 l 2.575 0.225 l 5.691 0.389 l 8.54 0.589 l 6.195 0.364 l 9.177 0.954 h 1.458 l 0.207 -0.589 l -0.498 -0.364 l -0.389 -0.364 l -8.837 -5.989 l -9.566 -6.329 l -5.011 -3.644 l -2.709 -1.846 l -1.367 -1.731 l -0.589 -3.778 l 2.46 -2.709 l 3.304 0.225 l 0.844 0.225 l 3.347 2.575 l 7.149 5.533 l 9.335 6.875 l 1.367 1.136 l 0.547 -0.389 l 0.067 -0.273 l -0.613 -1.026 l -5.078 -9.177 l -5.418 -9.335 l -2.411 -3.869 l -0.638 -2.32 C 20.945 6.08 20.781 5.278 20.781 4.3 l 2.8 -3.802 L 25.13 0 l 3.735 0.498 l 1.573 1.367 l 2.32 5.308 l 3.76 8.357 l 5.831 11.364 l 1.707 3.371 l 0.911 3.122 l 0.34 0.954 h 0.589 v -0.547 l 0.48 -6.402 l 0.887 -7.859 L 48.125 9.42 l 0.298 -2.849 l 1.409 -3.413 l 2.8 -1.846 l 2.187 1.045 l 1.798 2.575 l -0.249 1.664 l -1.069 6.948 l -2.095 10.884 l -1.367 7.288 h 0.796 l 0.911 -0.911 l 3.687 -4.895 l 6.195 -7.744 l 2.733 -3.073 l 3.189 -3.395 l 2.047 -1.616 h 3.869 l 2.849 4.233 l -1.275 4.373 l -3.984 5.053 l -3.304 4.282 l -4.737 6.377 l -2.958 5.102 l 0.273 0.407 l 0.705 -0.067 l 10.702 -2.278 l 5.782 -1.045 l 6.9 -1.184 l 3.122 1.458 l 0.34 1.482 l -1.227 3.031 l -7.38 1.822 l -8.655 1.731 l -12.888 3.049 l -0.158 0.115 l 0.182 0.225 l 5.806 0.547 l 2.484 0.134 h 6.08 l 11.321 0.844 l 2.958 1.956 l 1.774 2.393 l -0.298 1.822 l -4.555 2.32 l -6.147 -1.458 l -14.346 -3.413 l -4.92 -1.227 h -0.68 v 0.407 l 4.1 4.009 l 7.513 6.784 l 9.408 8.746 l 0.48 2.162 l -1.209 1.707 L 78.044 75.8 l -8.266 -6.219 l -3.189 -2.8 l -7.222 -6.08 h -0.48 v 0.638 l 1.664 2.436 l 8.789 13.21 l 0.456 4.051 l -0.638 1.318 l -2.278 0.796 l -2.502 -0.456 l -5.144 -7.222 l -5.308 -8.133 l -4.282 -7.288 l -0.522 0.298 l -2.527 27.216 l -1.184 1.391 L 42.677 90 l -2.278 -1.731 l -1.209 -2.8 l 1.209 -5.533 l 1.458 -7.222 l 1.184 -5.74 l 1.069 -7.131 l 0.638 -2.369 l -0.043 -0.158 l -0.522 0.067 l -5.375 7.38 l -8.175 11.048 l -6.468 6.924 l -1.549 0.613 l -2.685 -1.391 l 0.249 -2.484 l 1.5 -2.211 l 8.953 -11.388 l 5.4 -7.058 l 3.486 -4.075 l -0.024 -0.589 h -0.207 L 15.509 69.592 l -4.233 0.547 l -1.822 -1.707 l 0.225 -2.8 l 0.862 -0.911 l 7.149 -4.92 l -0.024 0.024 L 17.671 59.85 z"
      fill={theme.colors.white}
    />
  </Icon>
);

export const FranceFlagIcon = ({ style }) => (
  <Flag
    background={
      <>
        {/* Blue */}
        <Path
          d="M9 5h-4a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h4z"
          {...fillProps(0.35)}
        />
        {/* Red */}
        <Path
          d="M15 5h4a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-4z"
          {...fillProps(0.7)}
        />
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
