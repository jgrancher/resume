import React from "react";
import { Document as DocumentPDF, Page, View } from "@react-pdf/renderer";
import About from "./About";
import Header from "./Header";
import Sidebar from "./Sidebar";
import theme from "../theme";

const Document = () => {
  const { colors, fonts, space } = theme;

  return (
    <DocumentPDF>
      <Page
        size="A4"
        style={{
          backgroundColor: colors.white,
          flexDirection: "row",
          padding: space.sm,
        }}
      >
        <View
          style={{
            backgroundColor: colors.background,
            color: colors.text,
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
            fontFamily: fonts.body,
            minHeight: "100%",
          }}
        >
          <Sidebar />
          <View>
            <Header />
            {/* <About /> */}
          </View>
        </View>
      </Page>
    </DocumentPDF>
  );
};

export default Document;
