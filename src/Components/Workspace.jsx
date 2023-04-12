import React, { useState} from "react";
import Editor from "@monaco-editor/react";
import { Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import JavascriptIcon from "@mui/icons-material/Javascript";
import Output from "./Output";
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
              width: "5vw",
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
              width: "4vw",
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
              width: "8vw",
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
      <Output html={html} css={css} js={js} />

    </>
  )
}

export default Workspace