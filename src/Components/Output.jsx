import React from 'react';
import { Box } from '@mui/material';

const Output = ({ srcDoc }) => {
  return (
    <Box
      component="iframe"
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts allow-same-origin" // Set appropriate sandbox attributes
      sx={{
        width: '100%',
        height: '30vh',
        maxHeight:'auto',
        border: 'none', // Remove default border
        overflowX: 'hidden', // Hide any overflow content
        display: 'block', // Ensure it's treated as a block element
      }}
    />
  );
};

export default Output;
