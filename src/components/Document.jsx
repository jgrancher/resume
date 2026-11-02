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
      keywords="software engineer, product engineer, full-stack, front-end, developer, cv, resume"
      title="Jeremy Grancher's Resume"
    >
      <Page
        size="A4"
        style={{
          backgroundColor: colors.white,
          color: colors.black,
          fontFamily: fonts.body,
          paddingHorizontal: space.sm,
          paddingVertical: space.md,
        }}
      >
        {/* Backgrounds are repeated on every page, as the content can wrap */}
        <View
          fixed
          style={{
            backgroundColor: colors.background,
            bottom: space.sm,
            left: space.sm,
            position: "absolute",
            right: space.sm,
            top: space.sm,
          }}
        />
        <View
          fixed
          style={{
            backgroundColor: colors.text,
            bottom: space.sm,
            left: space.sm,
            position: "absolute",
            top: space.sm,
            width: sizes.sidebar + space.sm * 2,
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Sidebar />
          <View
            style={{
              paddingHorizontal: space.sm,
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
