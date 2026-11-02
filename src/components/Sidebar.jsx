import React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import Image from "./Image";
import {
  ClaudeIcon,
  DumbbellIcon,
  FranceFlagIcon,
  HeartIcon,
  JapanFlagIcon,
  MailIcon,
  MusicIcon,
  SpaceInvaderIcon,
  UkFlagIcon,
} from "./Icons";
import { hobbies, languages } from "../data";
import theme from "../theme";

const flagIcons = {
  fr: FranceFlagIcon,
  jp: JapanFlagIcon,
  uk: UkFlagIcon,
};

const hobbyIcons = {
  dumbbell: DumbbellIcon,
  invader: SpaceInvaderIcon,
  music: MusicIcon,
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
        paddingHorizontal: space.sm,
        width: sizes.sidebar + space.sm * 2,
      }}
    >
      <View>
        <Image
          src="jeremy-grancher.jpg"
          style={{
            borderRadius: sizes.sidebar / 2,
            marginBottom: space.sm,
            width: sizes.sidebar,
          }}
        />
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={titleStyles}>Contact</Text>
          <View style={listItemStyles}>
            <MailIcon style={imageStyles} />
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
          <View style={{ ...listItemStyles, marginBottom: 0 }}>
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
          <View style={{ ...listItemStyles, marginBottom: 0 }}>
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
      </View>
      {/* Skills, languages & hobbies go on the second page */}
      <View break>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={titleStyles}>Skills</Text>
          <View style={listItemStyles}>
            <ClaudeIcon style={imageStyles} />
            <Text>Agentic coding &amp; MCP</Text>
          </View>
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
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={{ ...titleStyles, marginTop: space.md }}>Languages</Text>
          {languages.map(({ flag, label }, i) => {
            const FlagIcon = flagIcons[flag];

            return (
              <View
                key={flag}
                style={{
                  ...listItemStyles,
                  ...(i === languages.length - 1 && { marginBottom: 0 }),
                }}
              >
                <FlagIcon style={imageStyles} />
                <Text>{label}</Text>
              </View>
            );
          })}
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={{ ...titleStyles, marginTop: space.md }}>Hobbies</Text>
          {hobbies.map(({ icon, label }, i) => {
            const HobbyIcon = hobbyIcons[icon];

            return (
              <View
                key={icon}
                style={{
                  ...listItemStyles,
                  ...(i === hobbies.length - 1 && { marginBottom: 0 }),
                }}
              >
                <HobbyIcon style={imageStyles} />
                <Text>{label}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Sidebar;
