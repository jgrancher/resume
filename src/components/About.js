import React from "react";
import { Text, View } from "@react-pdf/renderer";
import theme from "../theme";

const About = () => {
  const { fontSizes, fontWeights, lineHeights, space } = theme;

  return (
    <View style={{ paddingVertical: 16 }}>
      <Text
        style={{
          fontSize: fontSizes.xxxs,
          fontWeight: fontWeights.extraBold,
          lineHeight: lineHeights.lg,
          paddingHorizontal: space.sm,
        }}
      >
        I am a Sydney-based French front-end specialised web developer who loves
        to craft beautiful digital products using Javascript technology such as
        React. I take special care for little details, following best practices,
        web standards and code hygiene.
      </Text>
    </View>
  );
};

export default About;
