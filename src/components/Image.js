import React from "react";
import { Image } from "@react-pdf/renderer";

const MyImage = ({ src, ...rest }) => {
  return (
    <Image
      {...rest}
      allowDangerousPaths
      src={`${process.env.BUILD_FILE ? "public/" : ""}${src}`}
    />
  );
};

export default MyImage;
