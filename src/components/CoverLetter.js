import React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import theme from "../theme";

const Experience = () => {
  const { fontSizes, space } = theme;

  return (
    <View>
      <View style={{ fontSize: fontSizes.xxxs }}>
        <Text style={{ marginBottom: 40 }}>December the 7th, 2022</Text>
        <Text style={{ fontSize: fontSizes.xxs, marginBottom: space.sm }}>
          Dear hiring manager,
        </Text>
        <Text
          style={{
            fontSize: fontSizes.xxs,
            lineHeight: 1.5,
            marginBottom: space.sm,
          }}
        >
          Having always been a passionate of the Nintendo brand and products, I
          was truly excited to see your posting for the position of front-end
          developer.
        </Text>
        <Text
          style={{
            fontSize: fontSizes.xxs,
            lineHeight: 1.5,
            marginBottom: space.sm,
          }}
        >
          In fact, as my career grew in the advertising and software development
          lands, I observed from afar the video game industry and the Nintendo
          Careers page in particular, hoping that one day, an opportunity for a
          *web* developer, like me, would open in Australia.
        </Text>
        <Text
          style={{
            fontSize: fontSizes.xxs,
            lineHeight: 1.5,
            marginBottom: space.sm,
          }}
        >
          As you will see in my resume, I have accumulated more than 10 years of
          work experience in front-end development: semantic HTML5, CSS - in JS
          -, TS, GraphQL, React, Vue, etc. This experience ranges from
          awards-winning websites for advertising agencies like Publicis and
          TBWA (with{" "}
          <Link
            src="https://swimming.org.au"
            style={{ textDecoration: "underline" }}
          >
            swimming.org.au
          </Link>{" "}
          being my most recent project), to fully grown products and web apps
          for Google, Qantas and SafetyCulture.
        </Text>
        <Text
          style={{
            fontSize: fontSizes.xxs,
            lineHeight: 1.5,
            marginBottom: space.sm,
          }}
        >
          With an eye for design, an enthusiasm for joy-sparking animations and
          a passion for perfectly crafted products, I think that I could be a
          great fit for your team.
        </Text>
        <Text
          style={{
            fontSize: fontSizes.xxs,
            lineHeight: 1.5,
            marginBottom: space.sm,
          }}
        >
          I'm really eager to pursue this opportunity, and I'd love to discuss
          with you further how I could improve your web experiences.
        </Text>
        <Text
          style={{
            fontSize: fontSizes.xxs,
            lineHeight: 1.5,
          }}
        >
          Sincerely,
        </Text>
        <Text
          style={{
            fontSize: fontSizes.xxs,
            lineHeight: 1.5,
            marginBottom: space.sm,
          }}
        >
          Jeremy Grancher.
        </Text>
      </View>
    </View>
  );
};

export default Experience;
