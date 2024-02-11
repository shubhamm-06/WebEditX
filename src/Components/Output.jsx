import React from "react";
import { Box } from "@mui/material";

const Output = ({ srcDoc }) => {
  return (
    <Box
      component="iframe"
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts allow-same-origin"
      sx={{
        width: "100%",
        height: "100%", // Set the height to 100% to fill the container
        border: "none",
        overflowX: "hidden",
        overflowY:'scroll',
        display: "block",
      }}
    />
  );
};

export default Output;
