import React from "react";
import { Document as DocumentPDF, Page, View } from "@react-pdf/renderer";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Sidebar from "./Sidebar";
import theme from "../theme";

const Document = () => {
  const { colors, fonts, sizes, space } = theme;

  return (
    <DocumentPDF
      creator="Jeremy Grancher"
      keywords="front-end, full-stack, developer, cv, resume"
      title="Jeremy Grancher's Resume"
    >
      <Page
        size="A4"
        style={{
          backgroundColor: colors.white,
          color: colors.black,
          flexDirection: "row",
          fontFamily: fonts.body,
          padding: space.sm,
        }}
      >
        <View
          style={{ backgroundColor: colors.background, flexDirection: "row" }}
        >
          <Sidebar />
          <View
            style={{
              padding: space.sm,
              paddingTop: space.xs,
              width: sizes.main,
            }}
          >
            <Header />
            <About />
            <Experience />
            <Education />
          </View>
        </View>
      </Page>
    </DocumentPDF>
  );
};

export default Document;
