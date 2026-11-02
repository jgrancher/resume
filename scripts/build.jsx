import React from "react";
import ReactPDF, { Font } from "@react-pdf/renderer";
import Document from "../src/components/Document";

Font.register({
  family: "TT Norms Pro",
  fonts: [
    {
      src: `public/fonts/TT-Norms-Pro-Regular.ttf`,
    },
    {
      src: `public/fonts/TT-Norms-Pro-Bold.ttf`,
      fontWeight: 700,
    },
    {
      src: `public/fonts/TT-Norms-Pro-ExtraBold.ttf`,
      fontWeight: 800,
    },
  ],
});

// Disables hyphenation, which would otherwise split long words and links
Font.registerHyphenationCallback((word) => [word]);

ReactPDF.render(<Document />, `dist/Resume.pdf`);
