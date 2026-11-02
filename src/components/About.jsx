import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { about } from "../data";
import theme from "../theme";

const About = () => {
  const { fontSizes, fontWeights, lineHeights, space } = theme;

  return (
    <View style={{ marginBottom: space.sm, paddingVertical: space.xs }}>
      <Text
        style={{
          fontSize: fontSizes.xxxs,
          fontWeight: fontWeights.extraBold,
          lineHeight: lineHeights.sm,
          paddingHorizontal: space.sm,
        }}
      >
        {about}
      </Text>
    </View>
  );
};

export default About;
