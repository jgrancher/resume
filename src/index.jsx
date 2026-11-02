import React from "react";
import { createRoot } from "react-dom/client";
import { Font, PDFViewer } from "@react-pdf/renderer";
import Document from "./components/Document";
import "./index.css";

Font.register({
  family: "TT Norms Pro",
  fonts: [
    {
      src: `/fonts/TT-Norms-Pro-Regular.ttf`,
    },
    {
      src: `/fonts/TT-Norms-Pro-Bold.ttf`,
      fontWeight: 700,
    },
    {
      src: `/fonts/TT-Norms-Pro-ExtraBold.ttf`,
      fontWeight: 800,
    },
  ],
});

// Disables hyphenation, which would otherwise split long words and links
Font.registerHyphenationCallback((word) => [word]);

const App = () => {
  return (
    <PDFViewer style={{ height: "100%", width: "100%" }}>
      <Document />
    </PDFViewer>
  );
};

createRoot(document.getElementById("root")).render(<App />);
