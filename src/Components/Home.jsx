import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import HTML from './HTML';
import CSS from './CSS';
import JS from './JS';
import Output from './Output';
import Header from './Header';

const Home = () => {
  const [html, setHtml] = useState(localStorage.getItem('html') || '');
  const [css, setCss] = useState(localStorage.getItem('css') || '');
  const [js, setJs] = useState(localStorage.getItem('js') || '');
  const [outputSrcDoc, setOutputSrcDoc] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerLivePreview();
    }, 1300);

    return () => clearTimeout(timer);
  }, [html, css, js]);

  const triggerLivePreview = () => {
    const srcDoc = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;

    setOutputSrcDoc(srcDoc);
  };

  const handleHtmlChange = (newHtml) => {
    setHtml(newHtml);
    localStorage.setItem('html', newHtml);
  };

  const handleCssChange = (newCss) => {
    setCss(newCss);
    localStorage.setItem('css', newCss);
  };

  const handleJsChange = (newJs) => {
    setJs(newJs);
    localStorage.setItem('js', newJs);
  };

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        padding: 0,
        margin: 0
      }}
    >
      <Header/>
      <Box
        component="div"
        sx={{
          width: '99vw',
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <HTML code={html} setCode={handleHtmlChange} />
        <CSS code={css} setCode={handleCssChange} />
        <JS code={js} setCode={handleJsChange} />
      </Box>
      <Output srcDoc={outputSrcDoc} />
    </Box>
  );
};

export default Home;
