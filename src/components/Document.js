import React from "react";
import { Document as DocumentPDF, Page, View } from "@react-pdf/renderer";
import About from "./About";
import Header from "./Header";
import Sidebar from "./Sidebar";
import theme from "../theme";

const Document = () => {
  const { colors, fonts, sizes, space } = theme;

  return (
    <DocumentPDF
      creator="Jeremy Grancher"
      producer="Jeremy Grancher"
      title="Jeremy's Grancher Resume"
    >
      <Page
        size="A4"
        style={{
          backgroundColor: colors.white,
          color: colors.text,
          flexDirection: "row",
          fontFamily: fonts.body,
          padding: space.sm,
        }}
      >
        <View
          style={{ backgroundColor: colors.background, flexDirection: "row" }}
        >
          <Sidebar />
          <View style={{ padding: space.sm, width: sizes.main }}>
            <Header />
            <About />
          </View>
        </View>
      </Page>
    </DocumentPDF>
  );
};

export default Document;
