import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create the MUI theme
const theme = createTheme({
  typography: {
    allVariants: {
      color: "white", // Default color for all typography components
      fontSize: "14px", // Default font size for all typography components
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#949494ff",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Router>
        <div style={{ display: "flex", height: "100vh" }}>
          <Sidebar />
          <div style={{ marginLeft: 95, width: "100%", overflow: "hidden" }}>
            <Header />
            <main
              style={{
                marginTop: 60,
                marginBottom: 40,
                minHeight: "calc(100vh - 100px)",
                background: "#111111",
                overflowY: "auto",
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
