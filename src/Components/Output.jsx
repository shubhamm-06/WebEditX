import React from 'react';
import {Box } from '@mui/material';
const Output = ({ html, css, js }) => {
  const htmlCode = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>${html}</body>
      <script>${js}</script>
    </html>
  `;

  return (
    <Box 
      component={"iframe"}
      srcDoc={htmlCode}
      title="output"
      sx={{
        width:"99vw",
        // height:"100vh"
      }}
      
      />
  );
};

export default Output;