import React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import Image from "./Image";
import {
  FranceFlagIcon,
  HeartIcon,
  JapanFlagIcon,
  UkFlagIcon,
} from "./Icons";
import { languages } from "../data";
import theme from "../theme";

const flagIcons = {
  fr: FranceFlagIcon,
  jp: JapanFlagIcon,
  uk: UkFlagIcon,
};

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

  // Overrides react-pdf's default link styles (blue & underlined)
  const linkStyles = {
    color: colors.white,
    textDecoration: "none",
  };

  return (
    <View
      style={{
        color: colors.white,
        // Only takes the first page's height, the sidebar's background being drawn by the page itself
        height: 842 - space.md * 2,
        padding: space.sm,
        paddingTop: 0,
        width: sizes.sidebar + space.sm * 2,
      }}
    >
      <Image
        src="jeremy-grancher.jpg"
        style={{
          borderRadius: sizes.sidebar / 2,
          marginBottom: space.sm,
          width: sizes.sidebar,
        }}
      />
      <View style={{ flexGrow: 1, justifyContent: "space-between" }}>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={titleStyles}>Contact</Text>
          <View style={listItemStyles}>
            <Image src="icon-mail.png" style={imageStyles} />
            <Text>
              <Link src="mailto:jgrancher@gmail.com" style={linkStyles}>
                jgrancher@gmail.com
              </Link>
            </Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-phone.png" style={imageStyles} />
            <Text>0478 011 164</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-pin.png" style={imageStyles} />
            <Text>Sydney</Text>
          </View>
          <View style={listItemStyles}>
            <HeartIcon style={imageStyles} />
            <Text>Tokyo</Text>
          </View>
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={{ ...titleStyles, marginTop: space.md }}>
            On the Internets
          </Text>
          <View style={listItemStyles}>
            <Image src="icon-chrome.png" style={imageStyles} />
            <Text>
              <Link src="https://jerem.app" style={linkStyles}>
                jerem.app
              </Link>
            </Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-github.png" style={imageStyles} />
            <Text>
              <Link src="https://github.com/jgrancher" style={linkStyles}>
                jgrancher
              </Link>
            </Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-twitter.png" style={imageStyles} />
            <Text>
              <Link src="https://twitter.com/jgrancher" style={linkStyles}>
                @jgrancher
              </Link>
            </Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-linkedin.png" style={imageStyles} />
            <Text>
              <Link
                src="https://www.linkedin.com/in/jgrancher"
                style={linkStyles}
              >
                jgrancher
              </Link>
            </Text>
          </View>
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={{ ...titleStyles, marginTop: space.md }}>Languages</Text>
          {languages.map(({ flag, label }) => {
            const FlagIcon = flagIcons[flag];

            return (
              <View key={flag} style={listItemStyles}>
                <FlagIcon style={imageStyles} />
                <Text>{label}</Text>
              </View>
            );
          })}
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={{ ...titleStyles, marginTop: space.md }}>Skills</Text>
          <View style={listItemStyles}>
            <Image src="icon-typescript.png" style={imageStyles} />
            <Text>TypeScript &amp; Node.js</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-react.png" style={imageStyles} />
            <Text>React &amp; Next.js</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-scss.png" style={imageStyles} />
            <Text>CSS &amp; design systems</Text>
          </View>
          <View style={{ ...listItemStyles, marginBottom: 0 }}>
            <Image src="icon-graphql.png" style={imageStyles} />
            <Text>GraphQL &amp; REST APIs</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sidebar;
