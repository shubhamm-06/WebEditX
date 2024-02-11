import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import HTML from "./HTML";
import CSS from "./CSS";
import JS from "./JS";
import Output from "./Output";
import Header from "./Header";

const Home = () => {
  const [html, setHtml] = useState(localStorage.getItem("html") || "");
  const [css, setCss] = useState(localStorage.getItem("css") || "");
  const [js, setJs] = useState(localStorage.getItem("js") || "");
  const [outputSrcDoc, setOutputSrcDoc] = useState("");
  const [topSectionHeight, setTopSectionHeight] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerLivePreview();
    }, 1300);

    return () => clearTimeout(timer);
  }, [html, css, js]);

  useEffect(() => {
    const handleResize = () => {
      const topSection = document.getElementById("top-section");
      if (topSection) {
        const height = topSection.clientHeight;
        console.log("Top section height:", height);
        setTopSectionHeight(height);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const outputBoxHeight = `calc(100vh - ${topSectionHeight}px)`;
    setOutputBoxHeight(outputBoxHeight);
  }, [topSectionHeight]);

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
    localStorage.setItem("html", newHtml);
  };

  const handleCssChange = (newCss) => {
    setCss(newCss);
    localStorage.setItem("css", newCss);
  };

  const handleJsChange = (newJs) => {
    setJs(newJs);
    localStorage.setItem("js", newJs);
  };

  const [outputBoxHeight, setOutputBoxHeight] = useState(`calc(100vh - ${topSectionHeight}px)`);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "auto",
        maxHeight: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <Header />
      <Box
        id="top-section"
        sx={{
          width: "100vw",
          backgroundColor: "black",
          display: "flex",
          minHeight: "10vh",
          flexDirection: "row",
          height: "80vh",
          resize: "vertical",
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        <HTML code={html} setCode={handleHtmlChange} />
        <CSS code={css} setCode={handleCssChange} />
        <JS code={js} setCode={handleJsChange} />
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: outputBoxHeight,
          minHeight:'0vh',
        }}
      >
        <Output srcDoc={outputSrcDoc} />
      </Box>
    </Box>
  );
};

export default Home;
