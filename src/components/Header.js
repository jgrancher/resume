import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import theme from "../theme";

const Header = () => {
  const { colors, fontSizes, fontWeights, space } = theme;

  return (
    <View style={{ marginVertical: space.sm }}>
      <Text
        style={{
          fontSize: fontSizes.xl,
          fontWeight: fontWeights.extraBold,
          marginBottom: space.xs,
        }}
      >
        Jeremy Grancher
      </Text>
      <Text
        style={{
          backgroundColor: colors.primary,
          color: colors.white,
          fontSize: fontSizes.md,
          fontWeight: fontWeights.extraBold,
          paddingHorizontal: 12,
          paddingVertical: 4,
        }}
      >
        Senior Front-End Developer
      </Text>
    </View>
  );
};

export default Header;
