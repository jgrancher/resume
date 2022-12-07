import React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import Image from "./Image";
import theme from "../theme";

const Sidebar = () => {
  const { colors, fontSizes, fontWeights, sizes, space } = theme;

  const titleStyles = {
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.bold,
    marginBottom: space.sm,
  };

  const listItemStyles = {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 12,
  };

  const imageStyles = {
    marginRight: 6,
    width: sizes.icons,
  };

  return (
    <View
      style={{
        backgroundColor: colors.text,
        color: colors.white,
        height: "100%",
        padding: space.sm,
      }}
    >
      <Image
        src="jeremy-grancher.jpg"
        style={{ marginBottom: space.sm, width: sizes.sidebar }}
      />
      <View style={{ flexGrow: 1, justifyContent: "space-between" }}>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={titleStyles}>Contact</Text>
          <View style={listItemStyles}>
            <Image src="icon-mail.png" style={imageStyles} />
            <Text>
              <Link src="mailto:jgrancher@gmail.com">jgrancher@gmail.com</Link>
            </Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-phone.png" style={imageStyles} />
            <Text>0478 011 164</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-pin.png" style={imageStyles} />
            <View>
              <Text>7/118 Curlewis Street,</Text>
              <Text>Bondi Beach NSW 2026</Text>
            </View>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-pin.png" style={imageStyles} />
            <Text>French & Australian citizen</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sidebar;
