import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import theme from "../theme";

const About = () => {
  const { fontSizes } = theme;

  return (
    <View style={{ backgroundColor: "red" }}>
      <Text style={{ fontSize: fontSizes.xs }}>
        I am a Sydney-based French front-end specialised web developer who loves
        to craft beautiful digital products using web technology such as React.
        I take special care for little details, following best practices, web
        standards and code hygiene.
      </Text>
    </View>
  );
};

export default About;
