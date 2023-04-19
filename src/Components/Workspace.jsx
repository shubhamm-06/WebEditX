import React, { useState} from "react";
import Editor from "@monaco-editor/react";
import { Box, Typography, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import JavascriptIcon from "@mui/icons-material/Javascript";
import Output from "./Output";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Workspace = () => {
  const [html, setHtml] = useState("<div>Hello World</div>");
  const [css, setCss] = useState("div { color: red; }");
  const [js, setJs] = useState("");


  const handleEditorChange = (value, language) => {
    switch (language) {
      case "html":
        setHtml(value);
        break;
      case "css":
        setCss(value);
        break;
      case "javascript":
        setJs(value);
        break;
      default:
        break;
    }
  };
  const htmlCode = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>${html}</body>
      <script>${js}</script>
    </html>
  `;
  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([htmlCode], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "index.html";
    document.body.appendChild(element);
    element.click();
  };
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#060606",
          fontFamily: "Amiko",
        }}
      >
        <Box
          sx={{
            p: 1,
            pt: 0,
          }}
        >
          <Typography
            variant="p"
            sx={{
              p: 1,
              display: "flex",
              fontSize: "16px",
              backgroundColor: "#1e1e1e",
              color: "red",
            }}
          >
            <CodeIcon
              sx={{
                backgroundColor: "red",
                color: "#1e1e1e",
                fontSize: "16px",
                borderRadius: "4px",
                mr: "8px",
              }}
            />
            HTML
          </Typography>
          <Editor
            width="32vw"
            height="50vh"
            defaultLanguage="html"
            theme="vs-dark"
            options={{
              minimap: {
                enabled: false,
              },
              // fontSize: 18,
              wordWrap: "on",
            }}
            defaultValue="<div>Hello World</div>"
          onChange={(value) => handleEditorChange(value, "html")}
          />
        </Box>
        <Box
          sx={{
            p: 1,
            pt: 0,
          }}
        >
          <Typography
            variant="p"
            sx={{
              p: 1,
              display: "flex",
              fontSize: "16px",
              backgroundColor: "#1e1e1e",
              color: "skyblue",
            }}
          >
            <DataObjectIcon
              sx={{
                backgroundColor: "skyblue",
                color: "#1e1e1e",
                fontSize: "16px",
                borderRadius: "4px",
                mr: "8px",
              }}
            />
            CSS
          </Typography>
          <Editor
            width="32vw"
            height="50vh"
            defaultLanguage="css"
            // defaultValue=""
            theme="vs-dark"
            options={{
              minimap: {
                enabled: false,
              },
              // fontSize: 18,
              wordWrap: "on",
            }}
            defaultValue="div { color: red; }"
          onChange={(value) => handleEditorChange(value, "css")}
          />
        </Box>
        <Box
          sx={{
            p: 1,
            pt: 0,
          }}
        >
          <Typography
            variant="p"
            sx={{
              p: 1,
              display: "flex",
              fontSize: "16px",
              backgroundColor: "#1e1e1e",
              color: "yellow",
            }}
          >
            <JavascriptIcon
              sx={{
                backgroundColor: "yellow",
                color: "#1e1e1e",
                fontSize: "16px",
                mr: "8px",
                borderRadius: "4px",
              }}
            />
            Javascript
          </Typography>
          <Editor
            width="32vw"
            height="50vh"
            defaultLanguage="javascript"
            defaultValue="console.log"
            theme="vs-dark"
            options={{
              minimap: {
                enabled: false,
              },
              // fontSize: 18,
              wordWrap: "on",
            }}
          onChange={(value) => handleEditorChange(value, "javascript")}

          />
        </Box>
      </Box>
      <Button
            onClick={downloadFile}
            startIcon={<CloudDownloadIcon />}
            sx={{
              color: "#1e1e1e",
              backgroundColor: "white",
            }}
          >
            DOWNLOAD CODE
          </Button>
      <Output html={html} css={css} js={js} />
    </>
  )
}

export default Workspace