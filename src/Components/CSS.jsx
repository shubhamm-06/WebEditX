import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Box, Typography } from '@mui/material';
import DataObjectIcon from "@mui/icons-material/DataObject";

const CSS = ({ code, setCode }) => {
  const [theme, setTheme] = useState('vs-dark'); // Optional theme preference

  const handleEditorChange = (value) => {
    setCode(value); // Update state with new CSS code
  };

  return (
    <Box
      sx={{
        p: 1,
        pt: 0,
        backgroundColor: '#1e1e1e', // Consistent bg color
      }}
    >
      <Typography
        variant="p"
        sx={{
          p: 1,
          display: 'flex',
          fontSize: '16px',
          color: 'skyblue', // Consistent color
        }}
      >
        <DataObjectIcon sx={{ 
          color: 'skyblue',
         borderRadius: '4px',
          mr: '8px' }} />
        CSS
      </Typography>
      <Editor
        width="32vw"
        height="50vh"
        defaultLanguage="css"
        theme={theme} // Initial theme
        options={{
          minimap: {
            enabled: false,
          },
          wordWrap: 'on',
        }}
        value={code} // Use 'value' for controlled editor
        onChange={handleEditorChange}
      />
    </Box>
  );
};

export default CSS;
