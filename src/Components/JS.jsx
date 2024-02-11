import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Box, Typography } from '@mui/material';
import JavascriptIcon from '@mui/icons-material/Javascript'; // Assuming you're using Material UI

const JS = ({ code, setCode }) => {
  const [theme, setTheme] = useState('vs-dark'); // Optional theme preference

  const handleEditorChange = (value) => {
    setCode(value); // Update state with new JS code
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
          color: 'yellow', 
          borderRadius: '4px',
        }}
      >
        <JavascriptIcon sx={{ color: 'yellow',  borderRadius: '4px', mr: '8px' }} />
        JavaScript
      </Typography>
      <Editor
        width="32vw"
        height="85%"
        defaultLanguage="javascript"
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

export default JS;
