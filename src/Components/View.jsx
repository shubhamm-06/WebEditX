import React, { useState, useEffect } from "react";
import { BrowserRouter, useLocation } from 'react-router-dom';
import Editor from "@monaco-editor/react";
import { Box, Typography, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import JavascriptIcon from "@mui/icons-material/Javascript";
import Output from "./Output";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const View = () => {
  //  Setting up props

  const [value, setValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const currentTab = () => {
      switch (location.pathname) {
        case '/tab2':
          return 1;
        case '/tab3':
          return 2;
        default:
          return 0;
      }
    };
    setValue(currentTab());
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 
  //  Function to collect & execute code entered by the user
  const [html, setHtml] = useState("<div>Hello World</div>");
  const [css, setCss] = useState("div { color: red; }");
  const [js, setJs] = useState("// comments");

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

  // Function to download code
  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([htmlCode], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "index.html";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <BrowserRouter>
      <Box
        component="div"
        sx={{
          display: { md: "flex", sm: "block" },
          padding: "0",
          margin: "0",
          height: "85vh",
          backgroundColor: "#1e1e1e",
        }}
      >
        <Box
          sx={{
            width: { md: "50vw", sm: "100vw" },
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                backgroundColor: "#1e1e1e",
              }}
            >
              <Tab
                label={
                  <Typography
                    variant="p"
                    sx={{
                      display: "flex",
                      fontSize: "0.9rem",
                      backgroundColor: "#1e1e1e",
                      color: "red",
                    }}
                  >
                    <CodeIcon
                      sx={{
                        backgroundColor: "red",
                        color: "#1e1e1e",
                        fontSize: "0.9rem",
                        borderRadius: "4px",
                        mr: "8px",
                      }}
                    />
                    HTML
                  </Typography>
                }
                {...a11yProps(0)}
              />

              <Tab
                label={
                  <Typography
                    sx={{
                      display: "flex",
                      fontSize: "0.9rem",
                      backgroundColor: "#1e1e1e",
                      color: "skyblue",
                    }}
                  >
                    <DataObjectIcon
                      sx={{
                        backgroundColor: "skyblue",
                        color: "#1e1e1e",
                        fontSize: "0.9rem",
                        borderRadius: "4px",
                        mr: "8px",
                      }}
                    />
                    CSS
                  </Typography>
                }
                {...a11yProps(1)}
              />

              <Tab
                label={
                  <Typography
                    variant="p"
                    sx={{
                      display: "flex",
                      fontSize: "0.9rem",
                      backgroundColor: "#1e1e1e",
                      color: "yellow",
                    }}
                  >
                    <JavascriptIcon
                      sx={{
                        backgroundColor: "yellow",
                        color: "#1e1e1e",
                        fontSize: "0.9rem",
                        mr: "8px",
                        borderRadius: "4px",
                      }}
                    />
                    Javascript
                  </Typography>
                }
                {...a11yProps(2)}
              />

              {/* <Button 
          onClick={downloadFile}
          startIcon = {<CloudDownloadIcon/>}
          sx={{
            fontSize: "0.9rem",
            color:"white",
            backgroundColor: "#1e1e1e",
          }}
          > 
          DOWNLOAD CODE
          </Button> */}
            </Tabs>
          </Box>
          <TabPanel
            value={value}
            index={0}
            sx={{
              p: 0,
              m: 0,
              width: "10vw",
            }}
          >
            <Box
              sx={{
                p: 0,
                m: 0,
              }}
            >
              <Editor
                width="100%"
                height="81vh"
                defaultLanguage="html"
                theme="vs-dark"
                options={{
                  minimap: {
                    enabled: false,
                  },
                  fontSize: 14,
                  wordWrap: "on",
                }}
                defaultValue="<div>Hello World</div>"
                onChange={(value) => handleEditorChange(value, "html")}
              />
            </Box>
          </TabPanel>

          <TabPanel value={value} index={1} >
            <Box
              sx={{
                p: 0,
                pt: 0,
              }}
            >
              <Editor
                width="100%"
                height="81vh"
                defaultLanguage="css"
                theme="vs-dark"
                options={{
                  minimap: {
                    enabled: false,
                  },
                  fontSize: 14,
                  wordWrap: "on",
                }}
                defaultValue="div { color: red; }"
                onChange={(value) => handleEditorChange(value, "css")}
              />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box
              sx={{
                p: 0,
              }}
            >
              <Editor
                width="100%"
                height="81vh"
                defaultLanguage="javascript"
                defaultValue="// comments"
                theme="vs-dark"
                options={{
                  minimap: {
                    enabled: false,
                  },
                  fontSize: 14,
                  wordWrap: "on",
                }}
                onChange={(value) => handleEditorChange(value, "javascript")}
              />
            </Box>
          </TabPanel>
        </Box>

        <Box
          sx={{
            width: { md: "50vw", sm: "100vw" },
            backgroundColor: "white",
          }}
        >
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
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default View;
