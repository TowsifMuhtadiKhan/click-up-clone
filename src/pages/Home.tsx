import React from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { HomeLeftPanel } from "./Home Page/HomeLeftPanel";

const Home = () => (
  <Box height={"100vh"}>
    <Allotment>
      <Allotment.Pane maxSize={280} minSize={120} preferredSize={200}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#191919",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            border: "1px solid #353535ff",
          }}
        >
          <Box display={"flex"} alignItems={"center"} py={1.45}>
            <HomeLeftPanel />
          </Box>
        </Box>
      </Allotment.Pane>

      <Allotment.Pane>
        <Box
          sx={{
            borderTop: "1px solid #353535ff",
            borderRight: "1px solid #353535ff",
            borderBottom: "1px solid #353535ff",
            height: "100%",
            mr: 1,
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <Outlet /> {/* This will render the nested routes */}
        </Box>
      </Allotment.Pane>
    </Allotment>
  </Box>
);

export default Home;
