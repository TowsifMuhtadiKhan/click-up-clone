import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { Add } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useNavigate } from "react-router-dom";

type Props = {};

export const HomeLeftPanel = (props: Props) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box width="100%" px={2} py={0}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Typography fontSize={"16px"}>Home</Typography>
        <Button
          size="small"
          variant="contained"
          startIcon={<Add />}
          sx={{
            textTransform: "none",
            borderRadius: "10px",
            color: "white",
            backgroundColor: "#3b5CDE",
            "&:hover": {
              backgroundColor: "lightgreen",
            },
          }}
        >
          Create
        </Button>
      </Box>
      <Box mt={2} display="flex" flexDirection="column" gap={1}>
        <Typography
          color="#949494ff"
          fontSize={"14px"}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              color: "#3b5CDE",
            },
          }}
          onClick={() => handleNavigation("/inbox")}
        >
          <InboxIcon sx={{ fontSize: "small", marginRight: 1 }} />
          Inbox
        </Typography>
        <Typography
          color="#949494ff"
          fontSize={"14px"}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              color: "#3b5CDE",
            },
          }}
          onClick={() => handleNavigation("/tasks")}
        >
          <TaskAltIcon sx={{ fontSize: "small", marginRight: 1 }} />
          My Tasks
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};
