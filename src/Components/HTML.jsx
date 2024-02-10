import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Box, Typography } from '@mui/material';
import CodeIcon from "@mui/icons-material/Code";

const HTML = ({ code, setCode }) => {
  const [theme, setTheme] = useState('vs-dark'); // Initial theme preference (optional)

  const handleEditorChange = (value) => {
    setCode(value); // Update state with new HTML code
  };

  return (
    <Box
      sx={{
        p: 1,
        pt: 0,
        backgroundColor: '#1e1e1e', // Consistent bg color across components
      }}
    >
      <Typography
        variant="p"
        sx={{
          p: 1,
          display: 'flex',
          fontSize: '16px',
          color: 'red', // Consistent color across components
        }}
      >
        <CodeIcon sx={{ color: 'red', borderRadius: '4px', mr: '8px' }} />
        HTML
      </Typography>
      <Editor
        width="32vw"
        height="50vh"
        defaultLanguage="html"
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

export default HTML;
