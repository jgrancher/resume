import React from "react";
import { Image, Link, Text, View } from "@react-pdf/renderer";
import { darken } from "polished";
import { experiences } from "../data";
import theme from "../theme";

const Experience = () => {
  const { colors, fontSizes, fontWeights, sizes, space } = theme;

  const titleStyles = {
    backgroundColor: darken(0.1, colors.primary),
    color: colors.white,
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.extraBold,
    paddingLeft: space.xxs,
    marginBottom: space.sm,
  };

  const listItemStyles = {
    flexDirection: "row",
    fontSize: fontSizes.xxxs,
    marginBottom: space.sm,
  };

  const imageStyles = {
    marginBottom: space.xs,
    maxHeight: 22,
    objectFit: "contain",
    width: sizes.logos,
  };

  return (
    <View>
      <View style={{ fontSize: fontSizes.xxxs }}>
        <Text style={titleStyles}>Professional Experience</Text>
        {experiences.map((e, i) => (
          <View key={i} style={listItemStyles}>
            <View style={{ width: sizes.logos }}>
              <Image src={e.logo} style={imageStyles} />
              {e.date && (
                <Text style={{ fontSize: fontSizes.xxxxs }}>{e.date}</Text>
              )}
              {e.location && (
                <Text style={{ fontSize: fontSizes.xxxxs }}>{e.location}</Text>
              )}
            </View>
            <View wrap={false} style={{ marginLeft: space.sm, maxWidth: 312 }}>
              <Text
                style={{
                  fontWeight: fontWeights.bold,
                  marginBottom: space.xxs,
                }}
              >
                {e.title} @ {e.company}
              </Text>
              {e.tasks.map((task, j) => (
                <Text key={`${i}-${j}`} style={{ marginBottom: space.xs }}>
                  • {task.copy}
                  {task.link && [
                    ` `,
                    <Link
                      src={task.link.url}
                      style={{ textDecoration: "underline" }}
                    >
                      {task.link.label}
                    </Link>,
                  ]}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Experience;
