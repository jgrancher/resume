import React from "react";
import { Text, View } from "@react-pdf/renderer";
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
          letterSpacing: 0.25,
          paddingHorizontal: space.sm,
          paddingVertical: 6,
        }}
      >
        Senior Front-End Developer
      </Text>
    </View>
  );
};

export default Header;
