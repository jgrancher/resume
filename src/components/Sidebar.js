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
            <Text>Sydney</Text>
          </View>
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={{ ...titleStyles, marginTop: space.md }}>
            On the Internets
          </Text>
          <View style={listItemStyles}>
            <Image src="icon-chrome.png" style={imageStyles} />
            <Text>
              <Link src="https://jerem.app">jerem.app</Link>
            </Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-github.png" style={imageStyles} />
            <Text>
              <Link src="https://github.com/jgrancher">jgrancher</Link>
            </Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-twitter.png" style={imageStyles} />
            <Text>
              <Link src="https://twitter.com/jgrancher">@jgrancher</Link>
            </Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-linkedin.png" style={imageStyles} />
            <Text>
              <Link src="https://www.linkedin.com/in/jgrancher">jgrancher</Link>
            </Text>
          </View>
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={{ ...titleStyles, marginTop: space.md }}>
            Latest projects
          </Text>
          <View style={listItemStyles}>
            <Image
              src="icon-project-swimming.png"
              style={{ ...imageStyles, width: 12 }}
            />
            <Text>
              <Link src="https://www.swimming.org.au">Swimming Australia</Link>
            </Text>
          </View>
          <View style={listItemStyles}>
            <Image
              src="icon-project-semi-permanent.png"
              style={{ ...imageStyles, width: 12 }}
            />
            <Text>
              <Link src="https://semipermanent.com">Semi Permanent</Link>
            </Text>
          </View>
          <View style={listItemStyles}>
            <Image
              src="icon-project-cwg.png"
              style={{ ...imageStyles, width: 12 }}
            />
            <Text>
              <Link src="https://create.withgoogle.com">
                Create with Google
              </Link>
            </Text>
          </View>
          <View style={listItemStyles}>
            <Image
              src="icon-project-qcc.png"
              style={{ ...imageStyles, width: 12 }}
            />
            <Text>
              <Link src="https://cardcompanion.qantas.com">Card Companion</Link>
            </Text>
          </View>
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={{ ...titleStyles, marginTop: space.md }}>Skills</Text>
          <View style={listItemStyles}>
            <Image src="icon-typescript.png" style={imageStyles} />
            <Text>JS &amp; TypeScript</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-react.png" style={imageStyles} />
            <Text>React &amp; React Native</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="icon-scss.png" style={imageStyles} />
            <Text>SCSS &amp; CSS-in-JS</Text>
          </View>
          <View style={{ ...listItemStyles, marginBottom: 0 }}>
            <Image src="icon-graphql.png" style={imageStyles} />
            <Text>Node.js &amp; GraphQL</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sidebar;
