import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import { darken } from "polished";
import { education } from "../data";
import theme from "../theme";

const Education = () => {
  const { colors, fontSizes, fontWeights, sizes, space } = theme;

  const titleStyles = {
    color: colors.white,
    backgroundColor: darken(0.1, colors.primary),
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.extraBold,
    marginBottom: space.sm,
    paddingLeft: space.xxs,
  };

  const listItemStyles = {
    flexDirection: "row",
    fontSize: fontSizes.xxxs,
    marginBottom: space.sm,
  };

  const imageStyles = {
    maxHeight: 22,
    objectFit: "contain",
    width: sizes.logos,
  };

  return (
    <View>
      <View style={{ fontSize: fontSizes.xxxs }}>
        <Text style={titleStyles}>Education</Text>
        {education.map((e, i) => (
          <View
            key={i}
            style={{
              ...listItemStyles,
              ...(i === education.length - 1 && { marginBottom: 0 }),
            }}
          >
            <View style={{ width: sizes.logos }}>
              <Image src={e.logo} style={imageStyles} />
            </View>
            <View wrap={false} style={{ marginLeft: space.sm, maxWidth: 312 }}>
              <Text
                style={{
                  fontWeight: fontWeights.bold,
                  marginBottom: space.xxs,
                }}
              >
                {e.degree}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Education;
